"use client";
import React, { useState } from "react";
import { CldVideoPlayer } from "next-cloudinary";
import { saveAs } from "file-saver";

const VideoCard = ({ asset }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { public_id, display_name } = asset;
  const [retries, setRetries] = useState(0);
  const [errorOccurred, setErrorOccurred] = useState(false);

  const downloadVideoOGVideo = () => {
    const vidSrc = asset.url;
    saveAs(vidSrc, display_name);
  };

  return (
    <article className="card">
      <div className="title-container">
        <h4>
          <span className="emoji">▶</span>
          {""}
        </h4>
        <h4>⫶</h4>
      </div>
      {isLoading && <p>Loading</p>}
      <div
        className="video-container"
        style={{ visibility: isLoading ? "hidden" : "visible" }}
      >
        <CldVideoPlayer
          src={public_id}
          id={`${public_id}-${Math.random()}`}
          height={"300"}
          width={"300"}
          alt={display_name}
          transformation={{
            width: 300,
            height: 300,
            crop: "fill",
            gravity: "auto",
          }}
        />
      </div>
      <div className="controls-container">
        <div className="control-container">
          <button onClick={downloadVideoOGVideo}>🡣 download original</button>
        </div>
      </div>
    </article>
  );
};

export default VideoCard;
