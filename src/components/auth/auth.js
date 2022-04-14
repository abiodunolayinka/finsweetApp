import './Auth.css';

const AuthLayout = ({ children, title, info }) => {
  return (
    <div className="auth">
      <div className="auth_container">
        <div className="form_container">
          <h3>{title}</h3>
          <p>{info}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;