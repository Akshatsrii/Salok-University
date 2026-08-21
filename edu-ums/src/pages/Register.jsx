import { SignUp } from "@clerk/clerk-react";
import "../styles/register.css";

const Register = () => {
  return (
    <div className="login-page">
      <SignUp
        routing="path"
        path="/register"
        signInUrl="/login"
        afterSignUpUrl="/student/dashboard"
      />
    </div>
  );
};

export default Register;
