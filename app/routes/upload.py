from fastapi import UploadFile, File, Depends, APIRouter
from app.core.security import get_current_user

router = APIRouter()
@router.post("/upload")
def upload_file(
    file: UploadFile = File(...),
    user: str = Depends(get_current_user)
):
    content = file.file.read()

    return {
        "filename": file.filename,
        "uploaded_by": user
    }
