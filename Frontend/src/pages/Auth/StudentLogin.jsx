const StudentLogin = () => {
  return (
    <div
      className="
        min-h-screen
        flex items-center justify-center
        bg-gradient-to-br from-[#0b2c4d] via-[#123e6a] to-[#0b2c4d]
        relative
      "
    >
      {/* subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_60%)]"></div>

      <div
        className="
          relative
          bg-white/95
          backdrop-blur-xl
          p-10
          rounded-2xl
          w-[380px]
          shadow-[0_20px_50px_rgba(0,0,0,0.25)]
        "
      >
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-center text-[#0b2c4d] tracking-wide">
          Salok University
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8 text-sm">
          Student Login Portal
        </p>

        {/* Enrollment */}
        <input
          type="text"
          placeholder="Enrollment Number"
          className="
            w-full
            mb-4
            px-4 py-3
            rounded-lg
            border border-gray-300
            focus:outline-none
            focus:ring-2
            focus:ring-orange-400
            transition
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="
            w-full
            mb-2
            px-4 py-3
            rounded-lg
            border border-gray-300
            focus:outline-none
            focus:ring-2
            focus:ring-orange-400
            transition
          "
        />

        {/* Forgot */}
        <p className="text-sm text-right text-blue-700 cursor-pointer mb-6 hover:underline">
          Forgot Password?
        </p>

        {/* Login Button */}
        <button
          className="
            w-full
            bg-gradient-to-r from-orange-400 to-orange-500
            text-white
            py-3
            rounded-lg
            font-semibold
            tracking-wide
            shadow-md
            hover:scale-[1.02]
            hover:shadow-lg
            transition
            duration-200
          "
        >
          Login
        </button>

        {/* Footer note */}
        <p className="text-xs text-center text-gray-500 mt-6">
          Authorized students only · © Salok University
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;
