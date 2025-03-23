import { useState } from "react";  
import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate
import axios from "axios";  

export default function Login() {
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const navigate = useNavigate();  // ✅ Initialize navigate function

  const handleLogin = async () => {
    console.log("🔹 Sending login request with:", { email, password });  
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", 
        { email, password }, 
        { withCredentials: true }
      );

      console.log("✅ Response received:", res.data);  
      alert(res.data.message || "Login successful!");

      // ✅ Store user details in local storage (Optional)
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // After successful login:
      localStorage.setItem("userId", res.data.user._id);
      localStorage.setItem("user", JSON.stringify(res.data.user));  // store user info
      localStorage.setItem("token", res.data.token); // optionally store token too

      // ✅ Redirect user after login
      navigate("/");  // Change this to any page you want to redirect to

    } catch (err) {
      console.log("❌ Login error:", err.response?.data || err.message);  
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 mb-2 border rounded"
        value={email}  
        onChange={(e) => setEmail(e.target.value)}  
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
        value={password}  
        onChange={(e) => setPassword(e.target.value)}  
      />
      <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded">
        Login
      </button>

      {/* ✅ Add Forgot Password Link */}
      <div className="mt-4 text-center">
        <a href="/change-password" className="text-blue-500 hover:underline">
          Forgot Password? Change Here
        </a>
      </div>
    </div>
  );
}
