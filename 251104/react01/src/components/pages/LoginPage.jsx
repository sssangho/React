import React from 'react';
import AuthTemplate from '../templates/AuthTemplate';
import LoginForm from '../organisms/LoginForm';

const LoginPage = () => {
  return (
    <AuthTemplate title="로그인">
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
