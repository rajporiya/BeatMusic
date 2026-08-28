import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { User, Eye, EyeOff, Lock, Mail, ArrowLeft } from "lucide-react";
import BeatMusicLogo from "@/AppComponants/BeatMusicLogo";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError("");
    setLoading(true);

    const result = await register(username, email, password);
    setLoading(false);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error || "Registration failed");
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
          <BeatMusicLogo className="w-12 h-12" />
          <span className="text-2xl font-black tracking-tight text-white">BeatMusic</span>
        </div>

        <h2 className="text-xl font-extrabold text-white text-center mb-6">Sign up to start listening</h2>

        {error && (
          <div className="w-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold rounded-lg p-3.5 mb-6 text-center leading-relaxed">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          {/* Username input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-extrabold text-gray-300 uppercase tracking-wider">What should we call you?</label>
            <div className="relative flex items-center">
              <User className="absolute left-4 text-gray-400 h-5 w-5 pointer-events-none" />
              <input
                type="text"
                placeholder="Enter a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#1e1e1e] hover:bg-[#252525] focus:bg-[#252525] text-white placeholder-gray-500 rounded-lg py-3.5 pl-12 pr-4 text-sm border border-transparent focus:border-[#333] outline-none transition-all duration-200 font-semibold"
                required
              />
            </div>
          </div>

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
            <label className="text-xs font-extrabold text-gray-300 uppercase tracking-wider">Password</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 text-gray-400 h-5 w-5 pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
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
              "Sign Up"
            )}
          </button>
        </form>

        <div className="mt-8 border-t border-white/5 w-full pt-6 text-center text-sm font-semibold">
          <span className="text-gray-400 mr-1.5">Already have an account?</span>
          <Link
            to="/login"
            className="text-white hover:text-[#1db954] underline transition-colors"
          >
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
