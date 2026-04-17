import React from 'react';
import AuthView from '../components/auth/AuthView';

export default function AuthPage({ onLogin }) {
  return <AuthView setView={onLogin} />;
}