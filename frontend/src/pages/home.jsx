import { useNavigate } from "react-router-dom";
import withAuth from "../utils/withAuth";
import { useState } from "react";
import "../App.css";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);

  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <div className="bodyColor">
      <div className="navbar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            onClick={() => {
              navigate("/");
            }}
            src="../public/zoom.png"
            style={{ width: "70px", height: "auto", padding: "5px" }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => {
              navigate("/history");
            }}
          >
            <RestoreIcon style={{ color: "black", fontWeight: "bold" }} />
            <p style={{ color: "black", fontWeight: "bold" }}>History </p>
          </IconButton>

          <Button
            style={{ color: "black", fontWeight: "bold" }}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <div>
            <h2>Providing Quality Video Call Just Like Quality Education</h2>

            <div
              className="textField"
              style={{ display: "flex", gap: "10px", marginTop: "30px" }}
            >
              <TextField
                onChange={(e) => setMeetingCode(e.target.value)}
                id="outlined-basic"
                label="Meeting Code"
                variant="outlined"
                sx={{
                  py: 1.9,
                  "& .MuiOutlinedInput-root": {
                    background: "#bf6600",
                    color: "#000000",
                    "& fieldset": {
                      borderColor: "#000000",
                      border: "none",
                    },
                    "&:hover fieldset": {
                      borderColor: "#000000",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#000000",
                      fontWeight: "bold",
                      border: "none",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#000000",
                    fontSize: "1.3rem",
                    padding: "8px 0",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#000000",
                  },
                  "& input": {
                    fontSize: "1.2rem",
                    width: "20rem",
                  },
                }}
              />

              <Button
                onClick={handleJoinVideoCall}
                variant="contained"
                sx={{
                  py: 1.8,
                  textTransform: "none",
                  fontWeight: "bold",
                  backgroundColor: "#bf6600",
                  color: "black",
                  height: "58px",
                  fontSize: "1.3rem",
                  padding: "0 50px",
                  marginTop: "15px",
                  "&:hover": { backgroundColor: "#bf6600" },
                }}
              >
                Join
              </Button>
            </div>
          </div>
        </div>
        <div className="rightPanel">
          <img src="/logo3.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default withAuth(HomeComponent);
