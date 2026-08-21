import { SignIn } from "@clerk/clerk-react";

const StudentLogin = () => {
  return (
    <div className="login-page">
      <SignIn
        routing="path"
        path="/login"
        signUpUrl="/register"
        afterSignInUrl="/student/dashboard"
        afterSignUpUrl="/student/dashboard"
      />
    </div>
  );
};

export default StudentLogin;
