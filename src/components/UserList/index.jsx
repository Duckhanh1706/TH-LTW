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
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemText
                primary={
                  <div className="user-row">
                    {/* NAME */}
                    <span className="user-name">
                      {u.first_name} {u.last_name}
                    </span>

                    {/* BADGES */}
                    <span className="badges">
                      {/* PHOTO */}
                      <span className="badge green">
                        <span className="icon">📷</span>
                        <span className="num">{u.photoCount ?? 0}</span>
                      </span>

                      {/* COMMENT (CLICKABLE) */}
                      <Link
                        to={`/user-comments/${u._id}`}
                        className="badge red"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="icon">💬</span>
                        <span className="num">{u.commentCount ?? 0}</span>
                      </Link>
                    </span>
                  </div>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
