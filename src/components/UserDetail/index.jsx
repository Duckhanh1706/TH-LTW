import { Typography, Paper, Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

export default function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) return <Typography>User not found</Typography>;

  return (
    <Paper className="user-detail-container">
      <Typography variant="h4" className="user-name">
        {user.first_name} {user.last_name}
      </Typography>

      <Typography variant="h6" className="user-occupation">
        {user.occupation}
      </Typography>

      <Typography variant="body1" className="user-location">
        {user.location}
      </Typography>

      <Typography variant="body2" className="user-description">
        {user.description}
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to={`/photos/${userId}`}
        className="view-photo-btn"
      >
        View Photos
      </Button>
    </Paper>
  );
}
