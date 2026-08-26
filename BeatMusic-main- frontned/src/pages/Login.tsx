import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Music, Eye, EyeOff, Lock, Mail, ArrowLeft } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    setLoading(true);

    const result = await login(email, password);
    setLoading(false);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error || "Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4 font-sans select-none relative overflow-hidden">
      {/* Soft color highlights for premium background effect */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-green-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-[#5c1c1f]/10 blur-[120px] pointer-events-none" />

      {/* Back button */}
      <Link
        to="/"
        className="absolute top-6 left-6 text-gray-400 hover:text-white flex items-center gap-2 text-sm font-bold transition-colors duration-200"
      >
        <ArrowLeft size={16} />
        Back to Player
      </Link>

      <div className="w-full max-w-md bg-[#121212] border border-white/5 p-8 rounded-2xl shadow-2xl flex flex-col items-center">
        {/* Brand Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-[#1db954] p-2.5 rounded-full flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.892-.982-.336.076-.67-.135-.746-.472-.076-.336.135-.67.472-.746 3.854-.878 7.15-.502 9.82 1.134.295.18.387.565.207.86zm1.226-2.723c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.082-1.182-.413.125-.847-.107-.972-.52-.125-.413.107-.847.52-.972 3.676-1.116 8.243-.573 11.348 1.336.367.227.488.708.26 1.078zm.106-2.836C14.492 8.78 8.793 8.59 5.483 9.595c-.507.153-1.04-.135-1.194-.64-.154-.507.135-1.04.64-1.195 3.8-1.153 10.103-.928 14.07 1.43.456.27.608.86.338 1.317-.27.457-.86.61-1.317.338z" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tight text-white">BeatMusic</span>
        </div>

        <h2 className="text-xl font-extrabold text-white text-center mb-6">Log in to BeatMusic</h2>

        {error && (
          <div className="w-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold rounded-lg p-3.5 mb-6 text-center leading-relaxed">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          {/* Email input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-extrabold text-gray-300 uppercase tracking-wider">Email Address</label>
            <div className="relative flex items-center">
              <Mail className="absolute left-4 text-gray-400 h-5 w-5 pointer-events-none" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1e1e1e] hover:bg-[#252525] focus:bg-[#252525] text-white placeholder-gray-500 rounded-lg py-3.5 pl-12 pr-4 text-sm border border-transparent focus:border-[#333] outline-none transition-all duration-200 font-semibold"
                required
              />
            </div>
          </div>

          {/* Password input */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-extrabold text-gray-300 uppercase tracking-wider">Password</label>
            </div>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 text-gray-400 h-5 w-5 pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#1e1e1e] hover:bg-[#252525] focus:bg-[#252525] text-white placeholder-gray-500 rounded-lg py-3.5 pl-12 pr-12 text-sm border border-transparent focus:border-[#333] outline-none transition-all duration-200 font-semibold"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-[#1db954] hover:bg-[#1ed760] disabled:bg-[#1db954]/50 text-black font-extrabold py-3.5 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg cursor-pointer flex items-center justify-center"
          >
            {loading ? (
              <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              "Log In"
            )}
          </button>
        </form>

        <div className="mt-8 border-t border-white/5 w-full pt-6 text-center text-sm font-semibold">
          <span className="text-gray-400 mr-1.5">Don't have an account?</span>
          <Link
            to="/register"
            className="text-white hover:text-[#1db954] underline transition-colors"
          >
            Sign up for BeatMusic
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
