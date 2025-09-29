import { Link } from "react-router-dom";
import { Clock, MapPin, Users } from "lucide-react";
import HeureActuelle from "./HeureActuelle";
import MeteoActuelle from "./MeteoActuelle";

function Navbar() {
    return (
        <div className="flex items-center justify-between px-10 py-6 bg-white">
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
                    <p className="text-sm pt-1.5">Visiteurs aujourd'hui: <span className="font-semibold text-primary">2,847</span></p>
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
    );
}

export default Navbar;
