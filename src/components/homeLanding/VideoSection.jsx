import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Play, Pause, X } from 'lucide-react';

const videos = [
  { id: 1, url: 'https://res.cloudinary.com/devrmpo2p/video/upload/q_auto,f_auto/v1778231750/160904_y5c6ky.mp4', title: 'Pure Power' },
  { id: 2, url: 'https://res.cloudinary.com/devrmpo2p/video/upload/q_auto,f_auto/v1778231817/160050_xptlxi.mp4', title: 'Dynamic Performance' },
  { id: 3, url: 'https://res.cloudinary.com/devrmpo2p/video/upload/q_auto,f_auto/v1778231817/160016_zo9gwj.mp4', title: 'Luxury Redefined' },
  { id: 4, url: 'https://res.cloudinary.com/devrmpo2p/video/upload/q_auto,f_auto/v1778231820/160052_pvnhxa.mp4', title: 'Urban Legend' },
];

const VideoCard = ({ video, onOpen }) => {
  return (
    <motion.div
      className="relative bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl border border-[#222] group cursor-pointer"
      whileHover={{ y: -5, borderColor: '#ff0000' }}
      transition={{ duration: 0.3 }}
      onClick={() => onOpen(video)}
    >
      <div className="relative aspect-[9/16]">
        <img
          src={video.url.replace('.mp4', '.jpg')}
          alt={video.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

        {/* Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-[#ff0000] rounded-full flex items-center justify-center text-white focus:outline-none transition-transform duration-300 transform group-hover:scale-110">
            <Play className="w-6 h-6 fill-white ml-1" />
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="text-xs text-[#ff0000] font-bold uppercase tracking-wider">Ride</span>
          <h3 className="text-white font-bold text-lg mt-1">{video.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const memoizedVideos = useMemo(() => [...videos, ...videos, ...videos], []);

  return (
    <div ref={ref} className="bg-[#000000] text-white px-4 sm:px-8 lg:px-16 pb-12 relative">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-3"
        >
          <div className="relative">
            <svg className="w-6 h-6" viewBox="0 0 100 100">
              <path
                d="M50,15 L55,45 L85,50 L55,55 L50,85 L45,55 L15,50 L45,45 Z"
                fill="#ff0000"
              />
            </svg>
          </div>
          <span className="text-[#ff0000] text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
            Visual Experience
          </span>
        </motion.div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
          Feel The Power In Action
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl text-sm sm:text-base">
          Watch our premium fleet in motion and choose the ride that matches your adrenaline.
        </p>
      </div>

      {/* Continuous Scrolling Marquee */}
      {isInView ? (
        <div className="relative overflow-hidden -mx-4 sm:-mx-8 lg:-mx-16 py-4">
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            animate={isAutoPlaying ? { x: ["0%", "-33.333%"] } : undefined}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
            style={{ width: "max-content" }}
            drag="x"
            onDragStart={() => setIsAutoPlaying(false)}
            onMouseDown={() => setIsAutoPlaying(false)}
            dragConstraints={{ left: -2400, right: 0 }}
          >
            {/* Render 3 times for seamless loop on wide screens */}
            {memoizedVideos.map((video, index) => (
              <div key={index} className="w-[260px] sm:w-[300px] flex-shrink-0">
                <VideoCard video={video} onOpen={setSelectedVideo} />
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="h-[400px] flex items-center justify-center">
          <span className="text-gray-500 text-sm">Loading experience...</span>
        </div>
      )}

      {/* Indicator */}
      <div className="flex justify-center mt-8">
        <span className="text-[#ff0000] text-xs font-bold tracking-[0.2em] uppercase opacity-70">
          Drag to Scroll
        </span>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white hover:text-[#ff0000] transition-colors z-50"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Container */}
            <motion.div
              className="relative w-full max-w-[400px] aspect-[9/16] bg-[#0a0a0a] rounded-2xl overflow-hidden shadow-2xl border border-[#333]"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={selectedVideo.url}
                className="w-full h-full object-cover"
                controls
                autoPlay
                loop
                preload="auto"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-transparent to-transparent">
                <span className="text-[#ff0000] text-xs font-bold uppercase tracking-wider">Now Playing</span>
                <h3 className="text-white font-bold text-xl mt-1">{selectedVideo.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoSection;
