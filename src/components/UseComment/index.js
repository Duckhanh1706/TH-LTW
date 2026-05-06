import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

export default function UserComments() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchModel(`/photosOfUser/${userId}`).then(setPhotos);
  }, [userId]);

  const comments = [];

  photos.forEach((p) => {
    p.comments?.forEach((c) => {
      if (c.user._id === userId) {
        comments.push({
          photoId: p._id,
          file: p.file_name,
          ...c,
        });
      }
    });
  });

  return (
    <div>
      <h2>User Comments</h2>

      {comments.map((c) => (
        <div key={c._id} style={{ marginBottom: 20 }}>
          <Link to={`/photos/${c.photoId}`}>
            <img src={`/images/${c.file}`} width="120" alt="thumb" />
          </Link>

          <p>{c.comment}</p>
        </div>
      ))}
    </div>
  );
}
