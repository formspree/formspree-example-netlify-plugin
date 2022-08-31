import React from "react";

export default function () {
  return (
    <>
      <div style={{ padding: "75% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/745169858?h=7772cbeed8"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  );
}
