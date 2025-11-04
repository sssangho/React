import React from 'react';

const AuthTemplate = ({ title, children }) => {
  return (
    <div className="auth-template">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default AuthTemplate;
