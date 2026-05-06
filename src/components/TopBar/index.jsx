import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, matchPath } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
import "./styles.css";

function TopBar() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  const userMatch = matchPath({ path: "/users/:userId" }, location.pathname);

  const photoMatch = matchPath({ path: "/photos/:userId" }, location.pathname);

  const userId = userMatch?.params.userId || photoMatch?.params.userId;

  useEffect(() => {
    if (!userId) return;

    fetchModel(`/user/${userId}`)
      .then(setUser)
      .catch(() => setUser(null));
  }, [userId]);

  let context = "";

  if (user) {
    context = location.pathname.startsWith("/photos/")
      ? `Photos of ${user.first_name} ${user.last_name}`
      : `${user.first_name} ${user.last_name}`;
  }

  return (
    <AppBar className="topbar-appBar" position="fixed">
      <Toolbar className="topbar-toolbar">
        <Typography variant="h6" className="topbar-left">
          Nguyen Duc Khanh
        </Typography>

        <Typography variant="h6" className="topbar-right">
          {context}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
