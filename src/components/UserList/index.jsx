import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function UserList() {
  const users = models.userListModel();
  const location = useLocation();

  return (
    <div className="user-list-container">
      <Typography variant="h6" className="user-list-title">
        Users
      </Typography>

      <List component="nav">
        {users.map((user) => {
          const isActive = location.pathname === `/users/${user._id}`;

          return (
            <div key={user._id}>
              <ListItem
                button
                component={Link}
                to={`/users/${user._id}`}
                className={isActive ? "active-user" : ""}
              >
                <ListItemText
                  primary={`${user.first_name} ${user.last_name}`}
                  secondary={user.location}
                />
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </List>
    </div>
  );
}

export default UserList;
