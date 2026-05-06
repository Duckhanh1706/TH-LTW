import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
import "./styles.css";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchModel("/user/list").then(setUsers);
  }, []);

  return (
    <div className="user-list-container">
      <Typography className="user-list-title">Users</Typography>

      <List>
        {users.map((u) => {
          const isActive = location.pathname === `/users/${u._id}`;

          return (
            <ListItem
              key={u._id}
              component={Link}
              to={`/users/${u._id}`}
              className={isActive ? "active-user" : ""}
            >
              <ListItemText primary={`${u.first_name} ${u.last_name}`} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
