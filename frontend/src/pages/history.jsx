import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

function History() {
  const { getHistoryOfUser } = useContext(AuthContext);

  const [meetings, setMeetings] = useState([]);

  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        console.log("History Data:", history);
        setMeetings(history);
      } catch (err) {
        console.error("Fetch Error:", err);
      }
    };
    fetchHistory();
  }, []);

  let formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const yaer = date.getFullYear();

    return `${day}/${month}/${yaer}`;
  };

  return (
    <div>
      <div
        style={{
          borderBottom: "1px solid black",
          backgroundColor: "lightgray",
          fontSize: "20px",
        }}
      >
        <IconButton
          onClick={() => {
            routeTo("/home");
          }}
        >
          <HomeIcon />
        </IconButton>
      </div>

      {meetings.length !== 0 ? (
        meetings.map((e, index) => {
          return (
            <Card
              variant="outlined"
              key={e.id || index}
              sx={{ margin: "10px" }}
            >
              <CardContent>
                <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
                  Meeting Record
                </Typography>
                <Typography variant="h5" component="div">
                  Code: {e.meeting_code || e.meetingCode}
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  Date:{formatDate(e.date)}
                </Typography>
              </CardContent>
            </Card>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default History;
