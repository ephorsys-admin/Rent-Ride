import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X } from 'lucide-react';

const videos = [
  { id: 1, url: 'https://res.cloudinary.com/devrmpo2p/video/upload/v1778231750/160904_y5c6ky.mp4', title: 'Pure Power' },
  { id: 2, url: 'https://res.cloudinary.com/devrmpo2p/video/upload/v1778231817/160050_xptlxi.mp4', title: 'Dynamic Performance' },
  { id: 3, url: 'https://res.cloudinary.com/devrmpo2p/video/upload/v1778231817/160016_zo9gwj.mp4', title: 'Luxury Redefined' },
  { id: 4, url: 'https://res.cloudinary.com/devrmpo2p/video/upload/v1778231820/160052_pvnhxa.mp4', title: 'Urban Legend' },
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
        <video
          src={video.url}
          className="w-full h-full object-cover"
          muted
          playsInline
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

  return (
    <div className="bg-[#000000] text-white px-4 sm:px-8 lg:px-16 pb-12 relative">
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onOpen={setSelectedVideo} />
        ))}
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
