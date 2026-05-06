import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import UserPhotos from "./components/UserPhotos";
import UserComments from "./components/UseComment";

const App = () => {
  return (
    <Router>
      <TopBar />

      <div className="main-topbar-buffer" />

      <div className="app-body">
        {/* SIDEBAR */}
        <div className="sidebar">
          <UserList />
        </div>

        {/* MAIN CONTENT */}
        <div className="content">
          <Routes>
            <Route path="/users/:userId" element={<UserDetail />} />
            <Route path="/photos/:userId" element={<UserPhotos />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user-comments/:userId" element={<UserComments />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
