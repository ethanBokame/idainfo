import { Link } from "react-router-dom";
import { Clock, MapPin, Users } from "lucide-react";
import Chaud from "../components/Chaud";
import Froid from "../components/Froid";
import Rechauffe from "../components/Rechauffe";
import HeureActuelle from "../components/HeureActuelle";
import MeteoActuelle from "../components/MeteoActuelle";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function AccueilPage() {
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

                <div className="w-1/4 rounded-lg overflow-hidden text-center shadow-md">
                    <div className="relative flex items-center justify-center gap-3 text-lg font-bold bg-primary text-white px-4 py-4">
                        <img src="/rire_2.png" className="w-7 h-7" />
                        <p className="z-10">La pensée de l'humoriste</p>
                        <img
                            src="/rire_emoji.png"
                            className="absolute right-[-30px] w-18 opacity-50"
                        />
                    </div>
                    <div className="flex flex-col gap-4 px-4 py-8 bg-white">
                        <p className="text-lg">
                            « Ce n’est pas une passe mais un penalty que Gbagbo
                            a donné à Alassane. »
                        </p>
                        <i className="text-primary/85 hover:underline hover:cursor-pointer">
                            Adama Dahico
                        </i>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AccueilPage;
