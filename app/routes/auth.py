from fastapi import APIRouter
from app.db.fake_db import fake_users_db
from app.schemas.user import UserCreate,UserLogin
from app.core.security import hash_password,verify_password, create_access_token
from fastapi import HTTPException

router = APIRouter()





@router.post("/register")
def register(user: UserCreate):
    if user.username in fake_users_db:
        return {"error": "User already exists"}

    # if len(user.password.encode("utf-8")) > 72:
    #     raise HTTPException(status_code=400, detail="Password too long")

    hash_pw = hash_password(user.password)
    fake_users_db[user.username] = hash_pw

    print(fake_users_db)

    return {"message": "User registered"}

@router.post("/login")
def login(user: UserLogin):
    # 1. check if user exists
    if user.username not in fake_users_db:
        raise HTTPException(status_code=400, detail="User not found")

    stored_password = fake_users_db[user.username]

    # 2. verify password
    if not verify_password(user.password, stored_password):
        raise HTTPException(status_code=400, detail="Wrong password")

    access_token = create_access_token(
        data={"sub": user.username}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }