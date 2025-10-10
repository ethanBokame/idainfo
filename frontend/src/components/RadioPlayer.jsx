import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, X } from "lucide-react";

function RadioPlayer({ radio, isVisible, onClose }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.7);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
        setIsMuted(newVolume === 0);
    };

    const toggleMute = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.volume = volume;
                setIsMuted(false);
            } else {
                audioRef.current.volume = 0;
                setIsMuted(true);
            }
        }
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
    };

    if (!isVisible || !radio) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 radio-player bg-gradient-to-r from-gray-800 via-gray-900 to-black border-t border-gray-700">
            <div className="max-w-4xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                    {/* Bouton de fermeture */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={20} className="hover:cursor-pointer" />
                    </button>
                    {/* Logo de la radio */}
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-white p-2">
                            <img 
                                src={radio.logo} 
                                alt={radio.name}
                                className="w-full h-full object-cover rounded"
                            />
                        </div>
                        
                        {/* Nom de la radio et indicateur d'ondes */}
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1 items-end h-6">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-1 bg-white rounded-full transition-all duration-300 ${
                                            isPlaying ? 'radio-wave' : ''
                                        }`}
                                        style={{
                                            height: isPlaying 
                                                ? `${Math.random() * 16 + 8}px` 
                                                : '8px',
                                            animationDelay: `${i * 0.1}s`
                                        }}
                                    />
                                ))}
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg">{radio.name}</h3>
                                <p className="text-gray-300 text-sm">{radio.frequency}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contrôles centraux */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={togglePlay}
                            className="bg-white text-gray-900 rounded-full p-3 hover:bg-gray-200 transition-colors"
                        >
                            {isPlaying ? <Pause size={24} className="hover:cursor-pointer text-black fill-black" /> : <Play size={24} className="hover:cursor-pointer text-black fill-black" />}
                        </button>
                    </div>

                    {/* Contrôle du volume */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleMute}
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                        <div className="flex items-center gap-2">
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={isMuted ? 0 : volume}
                                onChange={handleVolumeChange}
                                className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                                style={{'--volume': `${(isMuted ? 0 : volume) * 100}%`}}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Élément audio caché */}
            <audio
                ref={audioRef}
                src={radio.streamUrl}
                onEnded={handleAudioEnded}
                onError={(e) => {
                    console.error("Erreur de lecture audio:", e);
                    setIsPlaying(false);
                }}
                preload="none"
            />
        </div>
    );
}

export default RadioPlayer;
