import { useState } from "react";
import axios from "axios";

export default function ChangePassword() {
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleChangePassword = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/change-password", {
                email,
                oldPassword,
                newPassword
            });

            alert(res.data.message);
        } catch (err) {
            alert(err.response?.data?.message || "Password change failed");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Change Password</h2>
            <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-2 border rounded"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Old Password"
                className="w-full p-2 mb-2 border rounded"
                onChange={(e) => setOldPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="New Password"
                className="w-full p-2 mb-4 border rounded"
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleChangePassword} className="w-full bg-blue-500 text-white p-2 rounded">
                Change Password
            </button>
        </div>
    );
}
