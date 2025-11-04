import React, { useState } from 'react';
import InputField from '../molecules/InputField';
import Button from '../atoms/Button1';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`로그인 시도: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <InputField
        label="이메일"
        type="email"
        placeholder="example@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="비밀번호"
        type="password"
        placeholder="******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label="로그인" type="submit" />
    </form>
  );
};

export default LoginForm;
