import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
import { Button } from "@mui/material";
import "./styles.css";

export default function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchModel(`/user/${userId}`).then(setUser);
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="user-detail-container">
      <h2 className="user-name">
        {user.first_name} {user.last_name}
      </h2>

      <p className="user-occupation">{user.occupation}</p>
      <p className="user-location">{user.location}</p>
      <p className="user-description">{user.description}</p>

      <Button
        variant="contained"
        component={Link}
        to={`/photos/${userId}`}
        sx={{ marginTop: 2 }}
      >
        View Photos
      </Button>
    </div>
  );
}
