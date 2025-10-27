import { Link } from "react-router-dom";
import { Clock, MapPin, Users, House } from "lucide-react";
import { useState, useRef } from "react";
import Chaud from "../components/Chaud";
import Froid from "../components/Froid";
import Rechauffe from "../components/Rechauffe";
import HeureActuelle from "../components/HeureActuelle";
import MeteoActuelle from "../components/MeteoActuelle";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import RadioPlayer from "../components/RadioPlayer";
import TopPublicity from "../components/TopPublicity";

function AccueilPage() {
    const [currentRadio, setCurrentRadio] = useState(null);
    const [isRadioPlayerVisible, setIsRadioPlayerVisible] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [videoProgress, setVideoProgress] = useState(0);
    const [showVolumeIcon, setShowVolumeIcon] = useState(false);
    const videoRef = useRef(null);
    const volumeIconTimeout = useRef(null);

    const handleRadioSelect = (radio) => {
        setCurrentRadio(radio);
        setIsRadioPlayerVisible(true);
    };

    const handleCloseRadioPlayer = () => {
        setIsRadioPlayerVisible(false);
        setCurrentRadio(null);
    };

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
        <div>
            <Navbar />
            <ScrollToTop />
            <TopPublicity />

            <div className="flex items-center bg-tertiary overflow-x-auto lg:overflow-visible">
                {/* Zone icônes à gauche */}
                <div className="flex items-center lg:pl-4 mr-4 shrink-0">
                    <div className="relative">
                        <img
                            src="/home.png"
                            className="h-12.5 w-12.5 p-3.5 lg:h-5 lg:w-5 border-r-1 border-primary/30 lg:border-none cursor-pointer hover:text-primary duration-125"
                        />
                        <div className="lg:hidden h-1 w-full bg-secondary absolute top-0"></div>
                    </div>

                    <img
                        src="/video.png"
                        className="h-12.5 w-12.5 p-3.5 lg:h-5 lg:w-5 border-r-1 border-primary/30 lg:border-none cursor-pointer hover:text-primary duration-125"
                    />
                    <img
                        src="/diffuser.png"
                        className="h-12.5 w-12.5 p-3.5 lg:h-5 lg:w-5 lg:hidden border-r-1 border-primary/30 lg:border-none cursor-pointer hover:text-primary duration-125"
                    />
                </div>

                {/* Liens du menu */}
                <div className="flex items-center whitespace-nowrap py-4 lg:py-3 gap-6 text-xs lg:text-sm font-semibold mx-auto">
                    <Link className="hover:text-primary duration-125">
                        Âme en détresse, ici
                    </Link>
                    <Link className="hover:text-primary duration-125">
                        Votre Faire-part, ici !
                    </Link>
                    <Link className="hover:text-primary duration-125">
                        Allô diasporas ?!
                    </Link>
                    <Link className="hover:text-primary duration-125">
                        Coach étudiants
                    </Link>
                    <Link className="hover:text-primary duration-125">
                        Echos concours
                    </Link>
                    <Link className="hover:text-primary duration-125">
                        Avis et communiqués
                    </Link>
                    <Link className="hover:text-primary duration-125">
                        Ma CMU
                    </Link>
                    <Link className="hover:text-primary duration-125">
                        Dico « Nouchi »
                    </Link>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 py-8 bg-tertiary mt-2 mb-6 w-full lg:my-12 lg:w-[80%] mx-auto">
                <img src="/logo_1.jpg" className="h-14 rounded-full" />
            </div>


            <div className="px-4 lg:px-10 flex justify-between gap-6 items-baseline">
                <div className="flex-1">
                    <p className="hidden lg:block text-2xl font-bold mb-5">
                        Découvrez l'actualité par température
                    </p>
                    <p className="lg:hidden text-2xl font-bold mb-5">
                        De l'actualité la plus chaude à la plus froide
                    </p>
                    <div className="flex flex-col gap-6 mb-12 lg:mb-0">
                        <Chaud />
                        <Froid />
                        <Rechauffe />
                    </div>

                    {/* Section Vidéos Populaires */}
                    <div className="py-16 px-10 hidden lg:block">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                                    Vidéos Populaires
                                </h2>
                                <p className="text-lg text-gray-600">
                                    GSPM, événements et campagnes de
                                    sensibilisation
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {/* Vidéo 1 - Grand Débat National */}
                                {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="bg-blue-600 text-white px-4 py-2 rounded mb-2">
                                            <span className="text-sm font-semibold">Total impressions 17.6K</span>
                                        </div>
                                        <div className="text-blue-800 text-sm">Average CTR 1.3%</div>
                                        <div className="text-blue-800 text-sm">Average position 25.2</div>
                                    </div>
                                </div>
                                <div className="absolute top-3 left-3">
                                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">GSPM</span>
                                </div>
                                <div className="absolute bottom-3 right-3">
                                    <span className="bg-black text-white px-2 py-1 rounded text-xs font-semibold">45:20</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Grand Débat National - Épisode 12</h3>
                                <p className="text-gray-600 text-sm mb-4">Discussion sur l'avenir de l'agriculture ivoirienne</p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                            </svg>
                                            12.5K
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                                            </svg>
                                            890
                                        </span>
                                    </div>
                                    <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                                        </svg>
                                        Partager
                                    </button>
                                </div>
                            </div>
                        </div> */}

                                {/* Vidéo 2 - Festival des Arts */}
                                {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <div className="w-full h-48 bg-gradient-to-br from-red-100 to-orange-200 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-red-800 text-lg font-bold">🎤</div>
                                        <div className="text-red-800 text-sm mt-2">Festival des Arts</div>
                                    </div>
                                </div>
                                <div className="absolute top-3 left-3">
                                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">ÉVÉNEMENTS</span>
                                </div>
                                <div className="absolute bottom-3 right-3">
                                    <span className="bg-black text-white px-2 py-1 rounded text-xs font-semibold">15:30</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Festival des Arts d'Abidjan 2024</h3>
                                <p className="text-gray-600 text-sm mb-4">Highlights de la cérémonie d'ouverture</p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                            </svg>
                                            8.2K
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                                            </svg>
                                            450
                                        </span>
                                    </div>
                                    <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                                        </svg>
                                        Partager
                                    </button>
                                </div>
                            </div>
                        </div> */}

                                {/* Vidéo 3 - Sensibilisation Sécurité Routière */}
                                {/* <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative">
                                <div className="w-full h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-yellow-800 text-lg font-bold">🚗</div>
                                        <div className="text-yellow-800 text-sm mt-2">Sécurité Routière</div>
                                    </div>
                                </div>
                                <div className="absolute top-3 left-3">
                                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">SOS</span>
                                </div>
                                <div className="absolute bottom-3 right-3">
                                    <span className="bg-black text-white px-2 py-1 rounded text-xs font-semibold">8:45</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-2">Sensibilisation Sécurité Routière</h3>
                                <p className="text-gray-600 text-sm mb-4">Campagne de prévention des accidents</p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                            </svg>
                                            15.7K
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                                            </svg>
                                            1.2K
                                        </span>
                                    </div>
                                    <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
                                        </svg>
                                        Partager
                                    </button>
                                </div>
                            </div>
                        </div> */}

                                <div className="bg-white relative rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <p className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold z-20">
                                        communiqué
                                    </p>

                                    {/* Vidéo avec contrôle du son au clic */}
                                    <div
                                        className="relative cursor-pointer"
                                        onClick={handleVideoClick}
                                    >
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
                                            Le candidat Touré Malick Ulrich
                                            dépose officiellement sa candidature
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
                            </div>

                            {/* Bouton Voir toutes les vidéos */}
                            <div className="text-center">
                                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Voir toutes les vidéos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Sidebar onRadioSelect={handleRadioSelect} />
            </div>

            <Footer />

            {/* Lecteur radio */}
            <RadioPlayer
                radio={currentRadio}
                isVisible={isRadioPlayerVisible}
                onClose={handleCloseRadioPlayer}
            />
        </div>
    );
}

export default AccueilPage;
