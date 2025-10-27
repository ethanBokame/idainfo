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
import VideoCard from "../components/VideoCard";

function AccueilPage() {
    const [currentRadio, setCurrentRadio] = useState(null);
    const [isRadioPlayerVisible, setIsRadioPlayerVisible] = useState(false);


    const handleRadioSelect = (radio) => {
        setCurrentRadio(radio);
        setIsRadioPlayerVisible(true);
    };

    const handleCloseRadioPlayer = () => {
        setIsRadioPlayerVisible(false);
        setCurrentRadio(null);
    };







    return (
        <div>
            <Navbar />
            <ScrollToTop />
            <TopPublicity />

            <div className="flex items-center bg-tertiary overflow-x-auto lg:overflow-visible">
                {/* Zone icônes à gauche */}
                <div className="flex items-center lg:pl-4 mr-4 shrink-0">
                    <Link to="/">
                    <div className="relative">
                        <img
                            src="/home.png"
                            className="h-12.5 w-12.5 p-3.5 lg:h-5 lg:w-5 border-r-1 border-primary/30 lg:border-none cursor-pointer hover:text-primary duration-125"
                        />
                        <div className="lg:hidden h-1 w-full bg-secondary absolute top-0"></div>
                    </div>
                    </Link>

                    <Link to="/video">
                        <img
                            src="/video.png"
                            className="h-12.5 w-12.5 p-3.5 lg:h-5 lg:w-5 border-r-1 border-primary/30 lg:border-none cursor-pointer hover:text-primary duration-125"
                        />
                    </Link>
                    <Link to="/radio">
                        <img
                            src="/diffuser.png"
                            className="h-12.5 w-12.5 p-3.5 lg:h-5 lg:w-5 lg:hidden border-r-1 border-primary/30 lg:border-none cursor-pointer hover:text-primary duration-125"
                        />
                    </Link>
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
                                <VideoCard />
                                <VideoCard />
                                <VideoCard />
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
