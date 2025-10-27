import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import TopPublicity from "../components/TopPublicity";
import VideoCard from "../components/VideoCard";
import Footer from "../components/Footer";

function VideoPage() {
    return (
        <div>
            <Navbar />
            <ScrollToTop />
            <TopPublicity />

            <div className="flex items-center bg-tertiary overflow-x-auto lg:overflow-visible">
                {/* Zone icônes à gauche */}
                <div className="flex items-center lg:pl-4 mr-4 shrink-0">
                    <Link to="/">
                        <img
                            src="/home.png"
                            className="h-12.5 w-12.5 p-3.5 lg:h-5 lg:w-5 border-r-1 border-primary/30 lg:border-none cursor-pointer hover:text-primary duration-125"
                        />
                    </Link>

                    <Link to="/video">
                        <div className="relative">
                            <img
                                src="/video.png"
                                className="h-12.5 w-12.5 p-3.5 lg:h-5 lg:w-5 border-r-1 border-primary/30 lg:border-none cursor-pointer hover:text-primary duration-125"
                            />
                            <div className="lg:hidden h-1 w-full bg-secondary absolute top-0"></div>
                        </div>
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

            <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-8 lg:my-12 lg:px-10">
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>

            <Footer />
        </div>
    );
}

export default VideoPage;
