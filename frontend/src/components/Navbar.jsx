import { Link } from "react-router-dom";
import { Clock, MapPin, Users, Menu, X } from "lucide-react";
import { useState } from "react";
import HeureActuelle from "./HeureActuelle";
import MeteoActuelle from "./MeteoActuelle";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            {/* Navbar mobile */}
            <div className="flex lg:hidden items-center justify-between p-4 bg-white relative z-50">
                <img src="/logo.jpeg" className="h-12 w-auto" />

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <Users size={20} className="text-primary" />
                        <p>2,847</p>
                    </div>

                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isMenuOpen ? (
                            <X
                                strokeWidth={2}
                                className="h-10 w-auto p-1 border-1 border-primary rounded-lg cursor-pointer"
                            />
                        ) : (
                            <Menu
                                strokeWidth={2}
                                className="h-10 w-auto p-1 border-1 border-primary rounded-lg cursor-pointer"
                            />
                        )}
                    </button>
                </div>
            </div>

            {/* Menu déroulant mobile */}
            {isMenuOpen && (
                <>
                    {/* Overlay pour fermer le menu */}
                    <div 
                        className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                        onClick={toggleMenu}
                    />
                    
                    {/* Contenu du menu */}
                    <div className="fixed top-[72px] left-0 right-0 bg-white shadow-xl z-40 lg:hidden max-h-[calc(100vh-72px)] overflow-y-auto">
                        <div className="flex flex-col p-5 gap-5">
                            {/* Section Heure et Météo */}
                            <div className="flex flex-col gap-3 pb-5 border-b-2 border-gray-100">
                                <h3 className="text-sm font-bold text-gray-500 uppercase">Informations</h3>
                                <div className="flex gap-3">
                                    <div className="flex items-center gap-2 bg-tertiary font-semibold px-4 py-3 rounded-lg flex-1">
                                        <Clock className="text-primary" size={18} />
                                        <HeureActuelle />
                                    </div>
                                    <div className="flex items-center gap-2 bg-tertiary px-4 py-3 rounded-lg flex-1">
                                        <MapPin className="text-primary" size={18} />
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-sm">Abidjan</span>
                                            <MeteoActuelle />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section Boutons Se connecter / S'abonner */}
                            <div className="flex flex-col gap-3 pb-5 border-b-2 border-gray-100">
                                <h3 className="text-sm font-bold text-gray-500 uppercase">Mon Compte</h3>
                                <div className="flex gap-3">
                                    <Link
                                        to="/connexion"
                                        className="bg-black hover:bg-black/80 text-white shadow-sm font-semibold px-6 py-3 rounded-full flex-1 text-center transition-colors"
                                        onClick={toggleMenu}
                                    >
                                        Se connecter
                                    </Link>
                                    <Link
                                        to="/abonnement"
                                        className="bg-primary hover:bg-primary/80 text-white shadow-sm font-semibold px-6 py-3 rounded-full flex-1 text-center transition-colors"
                                        onClick={toggleMenu}
                                    >
                                        S'abonner
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            )}
            

            <div className="hidden md:flex items-center justify-between px-10 py-6 bg-white">
                <div className="flex flex-col gap-4 mt-5">
                    <div className="flex items-center gap-2 text-lg bg-tertiary font-semibold px-4 py-2 rounded-lg self-baseline">
                        <Clock className="text-primary" />
                        <HeureActuelle />
                    </div>
                    <div className="flex items-center gap-2 bg-tertiary px-4 py-2 rounded-lg">
                        <MapPin className="text-primary" />
                        <span className="font-semibold">Abidjan</span>{" "}
                        <MeteoActuelle />
                    </div>
                </div>

                <img src="/logo.jpeg" className="h-32 w-auto" />

                <div className="flex flex-col gap-4 mt-6">
                    <div className="mx-auto flex items-center gap-2 rounded-lg mt-4">
                        <Users size={20} className="text-primary" />
                        <p className="text-sm pt-1.5">
                            Visiteurs aujourd'hui:{" "}
                            <span className="font-semibold text-primary">
                                2,847
                            </span>
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            to="/connexion"
                            className="bg-black hover:bg-black/80 text-white shadow-sm font-semibold px-6 py-2 rounded-full"
                        >
                            {/* <CircleUserRound strokeWidth={1.5}/> */}
                            Se connecter
                        </Link>
                        <div className="px-[1px] bg-black/20"></div>
                        <Link
                            to="/abonnement"
                            className="bg-primary hover:bg-primary/80 text-white shadow-sm font-semibold px-6 py-2 rounded-full"
                        >
                            S'abonner
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
