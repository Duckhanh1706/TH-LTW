import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
import "./styles.css";

export default function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchModel(`/photosOfUser/${userId}`).then(setPhotos);
  }, [userId]);

  return (
    <div className="photos-container">
      {photos.map((p) => (
        <div key={p._id} className="photo-card">
          <img
            src={`/images/${p.file_name}`}
            className="photo-img"
            alt="photo"
          />

          <div className="photo-date">
            {new Date(p.date_time).toLocaleString("vi-VN")}
          </div>

          <div className="comment-title">Comments</div>

          <div className="divider" />

          {p.comments && p.comments.length > 0 ? (
            p.comments.map((c) => (
              <div key={c._id} className="comment-box">
                <Link to={`/users/${c.user._id}`} className="comment-user">
                  {c.user.first_name} {c.user.last_name}
                </Link>

                <span className="comment-date">
                  {new Date(c.date_time).toLocaleString("vi-VN")}
                </span>

                <div className="comment-text">{c.comment}</div>
              </div>
            ))
          ) : (
            <div className="no-comment">No comments</div>
          )}
        </div>
      ))}
    </div>
  );
}
