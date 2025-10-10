import { Link } from "react-router-dom";
import { Clock, MapPin, Users } from "lucide-react";
import { useState } from "react";
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
            <div className="bg-[#ab4c1d]/90 shadow-sm py-0.5"></div>
            <div className="bg-primary pb-2 pt-1.5 overflow-hidden relative">
                <div className="whitespace-nowrap animate-marquee flex gap-6 text-white">
                    <p>Publicité</p>
                    <p>Publicité</p>
                    <p>Publicité</p>
                    <p>Publicité</p>
                    <p>Publicité</p>
                    <p>Publicité</p>
                    <p>Publicité</p>
                    <p>Publicité</p>
                    <p>Publicité</p>
                    <p>Publicité</p>
                    <p>Publicité</p>
                    <p>Publicité</p>
                    <p>Publicité</p>
                    <p>Publicité</p>
                    <p>Publicité</p>
                    <p>Publicité</p>
                </div>
            </div>
            <div className="flex items-center justify-center bg-tertiary text-sm font-semibold">
                <Link className="py-3 px-4 hover:text-primary duration-125">
                    Âme en détresse, ici
                </Link>
                <Link className="py-3 px-4 hover:text-primary duration-125">
                    Votre Faire-part, ici !
                </Link>
                <Link className="py-3 px-4 hover:text-primary duration-125">
                    Allô diasporas ?!
                </Link>
                <Link className="py-3 px-4 hover:text-primary duration-125">
                    Coach étudiants{" "}
                </Link>
                <Link className="py-3 px-4 hover:text-primary duration-125">
                    Echos concours
                </Link>
                <Link className="py-3 px-4 hover:text-primary duration-125">
                    Avis et communiqués
                </Link>
                <Link className="py-3 px-4 hover:text-primary duration-125">
                    Ma CMU
                </Link>
                <Link className="py-3 px-4 hover:text-primary duration-125">
                    Dico « Nouchi »
                </Link>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 py-8 bg-tertiary my-12 w-[80%] mx-auto">
                <img src="/logo_1.jpg" className="h-14 rounded-full" />
            </div>

            <div className="px-10 flex justify-between gap-6 items-baseline">
                <div className="flex-1">
                    <p className="text-2xl font-bold mb-5">
                        Découvrez l'actualité par température
                    </p>
                    <div className="flex flex-col gap-6">
                        <Chaud />
                        <Froid />
                        <Rechauffe />
                    </div>

                    <div></div>
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
