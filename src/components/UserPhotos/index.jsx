import React from "react";
import { Typography, Paper, Divider } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

export default function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  // Không có ảnh
  if (!photos || photos.length === 0) {
    return <Typography variant="h6">No photos found for this user.</Typography>;
  }

  return (
    <div className="photos-container">
      {photos.map((photo) => (
        <Paper key={photo._id} className="photo-card">
          {/* Ngày đăng */}
          <Typography variant="caption" className="photo-date">
            Posted on: {new Date(photo.date_time).toLocaleString("vi-VN")}
          </Typography>

          {/* Ảnh */}
          <img
            src={`/images/${photo.file_name}`}
            alt={photo.file_name}
            className="photo-img"
          />

          {/* Tiêu đề comment */}
          <Typography variant="h6" className="comment-title">
            Comments
          </Typography>

          <Divider className="divider" />

          {/* Danh sách comment */}
          {photo.comments && photo.comments.length > 0 ? (
            photo.comments.map((comment) => (
              <div key={comment._id} className="comment-box">
                {/* User + time */}
                <Typography variant="subtitle2">
                  <Link
                    to={`/users/${comment.user._id}`}
                    className="comment-user"
                  >
                    {comment.user.first_name} {comment.user.last_name}
                  </Link>

                  <span className="comment-date">
                    {new Date(comment.date_time).toLocaleString("vi-VN")}
                  </span>
                </Typography>

                {/* Nội dung */}
                <Typography variant="body2" className="comment-text">
                  {comment.comment}
                </Typography>
              </div>
            ))
          ) : (
            <Typography variant="body2" className="no-comment">
              No comments yet.
            </Typography>
          )}
        </Paper>
      ))}
    </div>
  );
}
