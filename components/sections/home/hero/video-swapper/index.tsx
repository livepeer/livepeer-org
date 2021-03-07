/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRef, useState, useCallback, useEffect } from "react";

type Props = {
  sources: string[];
  videoLabel: string;
  onChange: () => void;
};

const VideoSwapper = ({ videoLabel, sources, onChange }: Props) => {
  const videosRef = useRef([]);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;
    setIsInitialized(true);
    videosRef.current[currentVideo].play();
  }, [currentVideo, isInitialized]);

  const onVideoEnded = useCallback(
    (i) => {
      if (!videosRef.current) return;
      const newCurrentVideo = i + 1 < videosRef.current.length ? i + 1 : 0;
      videosRef.current[newCurrentVideo].play();
      setCurrentVideo(newCurrentVideo);
      onChange();
    },
    [videosRef, onChange]
  );

  return (
    <div
      sx={{
        position: "relative",
        width: ["60vw", "25vw"],
        height: ["33vw", "14vw"],
      }}>
      <span
        sx={{
          position: "absolute",
          left: 3,
          top: 3,
          zIndex: "101",
        }}>
        <p
          sx={{
            fontSize: 0,
            backgroundColor: "rgba(191, 12, 12, 0.8)",
            color: "background",
            borderRadius: "2px",
            variant: "layout.flexCenter",
            fontWeight: 700,
            px: 2,
            height: "20px",
            textTransform: "uppercase",
          }}>
          <span
            sx={{
              width: "5px",
              height: "5px",
              borderRadius: "full",
              backgroundColor: "background",
              mr: 1,
            }}
          />
          LIVE
        </p>
      </span>
      <div>
        {sources.map((source, i) => (
          <video
            onEnded={() => {
              onVideoEnded(i);
            }}
            key={`video-swapper-item-${i}`}
            ref={(el) => (videosRef.current[i] = el)}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              objectFit: "cover",
              height: "100%",
              width: "100%",
              opacity: i === currentVideo ? 1 : 0,
              transition: "opacity 1s ease-out",
            }}
            src={source}
            muted
            playsInline
          />
        ))}
      </div>
    </div>
  );
};

export default VideoSwapper;
