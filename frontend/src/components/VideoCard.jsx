import { useState, useRef } from "react";

function VideoCard() {
    const [isMuted, setIsMuted] = useState(true);
    const [videoProgress, setVideoProgress] = useState(0);
    const [showVolumeIcon, setShowVolumeIcon] = useState(false);
    const videoRef = useRef(null);
    const volumeIconTimeout = useRef(null);


    const handleVideoClick = () => {
        if (videoRef.current) {
            setIsMuted(!isMuted);
            videoRef.current.muted = !isMuted;

            // Afficher l'icône de son
            setShowVolumeIcon(true);

            // Masquer l'icône après 2 secondes
            if (volumeIconTimeout.current) {
                clearTimeout(volumeIconTimeout.current);
            }
            volumeIconTimeout.current = setTimeout(() => {
                setShowVolumeIcon(false);
            }, 2000);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const progress =
                (videoRef.current.currentTime / videoRef.current.duration) *
                100;
            setVideoProgress(progress);
        }
    };

    const handleProgressChange = (e) => {
        if (videoRef.current) {
            const newTime = (e.target.value / 100) * videoRef.current.duration;
            videoRef.current.currentTime = newTime;
            setVideoProgress(e.target.value);
        }
    };
    return (
        <div className="bg-white relative lg:rounded-lg lg:shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <p className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold z-20">
                communiqué
            </p>

            {/* Vidéo avec contrôle du son au clic */}
            <div className="relative cursor-pointer" onClick={handleVideoClick}>
                <video
                    ref={videoRef}
                    src="/video_test.mp4"
                    autoPlay
                    muted={isMuted}
                    loop
                    className="w-full h-full object-cover"
                    onTimeUpdate={handleTimeUpdate}
                />

                {/* Icône de son avec animation - apparaît seulement au clic */}
                <div
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-black/70 p-4 rounded-full transition-all duration-300 ${
                        showVolumeIcon
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-50 pointer-events-none"
                    }`}
                >
                    {isMuted ? (
                        <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </div>
            </div>

            {/* Textes et gradient */}
            <div className="p-3 z-10 absolute bottom-2 left-0 right-0 pointer-events-none">
                <p className="text-lg font-bold text-white">
                    Présidentielle du Rédis
                </p>
                <p className="text-white text-sm">
                    Le candidat Touré Malick Ulrich dépose officiellement sa
                    candidature
                </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>

            {/* Jauge de progression - collée au bas sans padding */}
            <div className="absolute bottom-[-7px] left-0 right-0 z-20">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={videoProgress}
                    onChange={handleProgressChange}
                    className="w-full h-1.5 appearance-none cursor-pointer"
                    style={{
                        background: `linear-gradient(to right, #2563eb 0%, #2563eb ${videoProgress}%, #4b5563 ${videoProgress}%, #4b5563 100%)`,
                    }}
                />
            </div>
        </div>
    );
}

export default VideoCard;
