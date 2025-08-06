import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-black text-white z-50 relative">
      <div className="w-full">
        <video
          className="w-full h-auto max-h-[90vh] object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src="/Assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
