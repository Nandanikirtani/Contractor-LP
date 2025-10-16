import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  { name: "Admin", color: "linear-gradient(135deg, #ff6ec4, #7873f5)" },
  { name: "Manager", color: "linear-gradient(135deg, #7873f5, #4ade80)" },
  { name: "User", color: "linear-gradient(135deg, #4ade80, #ff6ec4)" },
];

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${mode === "login" ? "Logged in" : "Signed up"} as ${selectedRole.name}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle at top left, #1a1a2e 0%, #16213e 40%, #0f3460 100%)",
        fontFamily: "Poppins, sans-serif",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Animated background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(270deg, #ff6ec4, #7873f5, #4ade80, #ff6ec4)",
          backgroundSize: "800% 800%",
          animation: "gradientMove 12s ease infinite",
          opacity: 0.15,
          zIndex: 0,
        }}
      ></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          display: "flex",
          width: "950px",
          height: "550px",
          background: "rgba(255, 255, 255, 0.08)",
          borderRadius: "25px",
          backdropFilter: "blur(15px)",
          overflow: "hidden",
          zIndex: 1,
          boxShadow: "0 0 40px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* LEFT PANEL */}
        <motion.div
          key={selectedRole.name}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            flex: 1.1,
            background: selectedRole.color,
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "3rem",
            textAlign: "center",
            position: "relative",
          }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem", fontWeight: "700" }}>
            {mode === "login" ? "Welcome Back" : "Join Shiven Infotech"}
          </h1>
          <p style={{ fontSize: "0.95rem", opacity: 0.9, marginBottom: "2rem" }}>
            {mode === "login"
              ? "Empowering your construction business with smart solutions."
              : "Create your role-based account and start your digital journey with us."}
          </p>

          {/* Role selector */}
          <div style={{ display: "flex", gap: "0.6rem", justifyContent: "center" }}>
            {roles.map((role) => (
              <button
                key={role.name}
                onClick={() => setSelectedRole(role)}
                style={{
                  background:
                    selectedRole.name === role.name
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(255,255,255,0.3)",
                  color: selectedRole.name === role.name ? "#000" : "#fff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "0.6rem 1.2rem",
                  cursor: "pointer",
                  fontWeight: "600",
                  transition: "0.3s",
                }}
              >
                {role.name}
              </button>
            ))}
          </div>

          <p style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
            {mode === "login" ? "Don’t have an account?" : "Already registered?"}{" "}
            <span
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                fontWeight: "600",
              }}
            >
              {mode === "login" ? "Sign Up" : "Login"}
            </span>
          </p>
        </motion.div>

        {/* RIGHT FORM PANEL */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "3rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, #ff6ec4, #7873f5, #4ade80)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {mode === "login" ? "Sign In" : "Create Account"}
          </h2>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
            {mode === "signup" && (
              <input
                type="text"
                placeholder="Full Name"
                required
                style={inputStyle}
              />
            )}

            {/* Remember me visible */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "0.9rem",
                color: "#ddd",
              }}
            >
              <label style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <input
                  type="checkbox"
                  style={{ accentColor: "#7873f5", transform: "scale(1.1)" }}
                />{" "}
                Remember me
              </label>
              {mode === "login" && (
                <a href="#" style={{ color: "#4ade80", textDecoration: "none" }}>
                  Forgot password?
                </a>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              style={{
                background: selectedRole.color,
                border: "none",
                color: "#fff",
                fontWeight: "600",
                borderRadius: "10px",
                padding: "0.8rem",
                cursor: "pointer",
                fontSize: "1rem",
                marginTop: "1rem",
              }}
            >
              {mode === "login" ? "Sign In" : "Sign Up"}
            </motion.button>
          </form>

          <p style={{ textAlign: "center", margin: "1.5rem 0", color: "#ccc" }}>
            or continue with
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <button style={socialBtn}>Google</button>
          </div>
        </div>
      </motion.div>

      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
}

const inputStyle = {
  padding: "0.8rem",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.3)",
  outline: "none",
  fontSize: "0.95rem",
  background: "rgba(255,255,255,0.05)",
  color: "#fff",
};

const socialBtn = {
  flex: 1,
  padding: "0.6rem",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.3)",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "600",
  backdropFilter: "blur(5px)",
};
