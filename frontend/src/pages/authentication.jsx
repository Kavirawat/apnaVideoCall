import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../contexts/AuthContext";
import { Snackbar } from "@mui/material";
import "../style/authentication.css";


const defaultTheme = createTheme();

export default function Authentication() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  let handleAuth = async () => {
    if (!rememberMe) {
      setError("Something went wrong! Please check the box to proceed.");
      return; // Login process ko yahin rok dega
    }

    try {
      if (formState === 0) {
        await handleLogin(username, password);
      }
      if (formState === 1) {
        let result = await handleRegister(name, username, password);
        setMessage(result);
        setOpen(true);
        setFormState(0);
        // Resetting states
        setUsername("");
        setPassword("");
        setName("");
        setError("");
      }
    } catch (err) {
      console.log(err);
      let message = err.response?.data?.message || "Something went wrong";
      setError(message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div className="auth-container">
        <Box className="auth-card">
          <Avatar
            sx={{ m: "auto", bgcolor: "secondary.main", width: 56, height: 56 }}
          >
            <LockOutlinedIcon fontSize="large" />
          </Avatar>

          <h2 style={{ marginTop: "15px", color: "#333" }}>
            {formState === 0 ? "Welcome Back" : "Create Account"}
          </h2>

          <div className="auth-toggle-buttons">
            <Button
              variant={formState === 0 ? "contained" : "outlined"}
              onClick={() => {
                setFormState(0);
                setError("");
              }}
            >
              Sign In
            </Button>
            <Button
              variant={formState === 1 ? "contained" : "outlined"}
              onClick={() => {
                setFormState(1);
                setError("");
              }}
            >
              Sign Up
            </Button>
          </div>

          <Box component="form" noValidate>
            {formState === 1 && (
              <TextField
                margin="normal"
                required
                fullWidth
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="error-text">{error}</p>}

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                mt: 1,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    color="primary"
                  />
                }
                label="Remember me"
                sx={{
                  color: "#555", 
                  "& .MuiTypography-root": { fontSize: "0.9rem" }, 
                }}
              />
            </Box>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1, py: 1.5, fontSize: "1rem" }}
              onClick={handleAuth}
            >
              {formState === 0 ? "Login" : "Register"}
            </Button>
          </Box>
        </Box>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        message={message}
        onClose={() => setOpen(false)}
      />
    </ThemeProvider>
  );
}
