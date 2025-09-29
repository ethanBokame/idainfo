import { MapPin, Phone, Mail, Download, Users, Heart } from "lucide-react";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section principale avec 4 colonnes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Colonne Contact */}
                    <div className="space-y-4">
                        <h3 className="text-primary font-bold text-lg">Contact</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <MapPin className="text-primary" size={20} />
                                <span className="text-sm">Abidjan, Côte d'Ivoire</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-primary" size={20} />
                                <span className="text-sm">+225 07 XX XX XX XX</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-primary" size={20} />
                                <span className="text-sm">contact@proximite-ci.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Colonne Navigation */}
                    <div className="space-y-4">
                        <h3 className="text-primary font-bold text-lg">Navigation</h3>
                        <div className="space-y-2">
                            <a href="/" className="block text-sm hover:text-primary transition-colors">Accueil</a>
                            <a href="/chaud" className="block text-sm hover:text-primary transition-colors">C'est chaud</a>
                            <a href="/froid" className="block text-sm hover:text-primary transition-colors">C'est froid</a>
                            <a href="/rechauffe" className="block text-sm hover:text-primary transition-colors">C'est réchauffé</a>
                            <a href="/forum" className="block text-sm hover:text-primary transition-colors">Forum</a>
                            <a href="/sos" className="block text-sm hover:text-primary transition-colors">SOS Urgence</a>
                        </div>
                    </div>

                    {/* Colonne Services */}
                    <div className="space-y-4">
                        <h3 className="text-primary font-bold text-lg">Services</h3>
                        <div className="space-y-2">
                            <a href="/dictionnaire" className="block text-sm hover:text-primary transition-colors">Dictionnaire Nouchi</a>
                            <a href="/radios" className="block text-sm hover:text-primary transition-colors">Radios en direct</a>
                            <a href="/videos" className="block text-sm hover:text-primary transition-colors">Vidéos GSPM</a>
                            <a href="/avis" className="block text-sm hover:text-primary transition-colors">Avis & Communiqués</a>
                        </div>
                    </div>

                    {/* Colonne Application */}
                    <div className="space-y-4">
                        <h3 className="text-primary font-bold text-lg">Application</h3>
                        <div className="space-y-4">
                            {/* Bouton de téléchargement */}
                            <button className="bg-primary hover:bg-primary/80 text-white rounded-lg px-4 py-3 w-full transition-colors">
                                <div className="flex items-center gap-3">
                                    <Download strokeWidth={2.5} size={20} />
                                    <div className="text-left">
                                        <div className="font-bold">Télécharger</div>
                                        <div className="text-xs">App mobile</div>
                                    </div>
                                </div>
                            </button>

                            {/* Section Communauté active */}
                            <div className="bg-gray-800 rounded-lg px-4 py-3">
                                <div className="flex items-center gap-3 mb-2">
                                    <Users strokeWidth={2.5} className="text-primary" size={20} />
                                    <span className="text-sm font-medium">Communauté active</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm">Visiteurs aujourd'hui: </span>
                                    <span className="text-primary font-bold">2,847</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section inférieure avec copyright et liens légaux */}
                <div className="border-t border-gray-700 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <div className="text-sm text-gray-300">
                            © {new Date().getFullYear()} Notre quotidien au peigne fin et notre lendemain meilleur !
                        </div>

                        {/* Message de développement */}
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                            Site conçu par <a href="https://www.linkedin.com/in/abdoulaye-diallo-962622259/" className="text-primary hover:text-primary/80 transition-colors font-semibold underline">Ethan Bokamé</a>
                        </div>

                        {/* Liens légaux */}
                        {/* <div className="flex gap-6 text-sm">
                            <a href="/mentions" className="text-gray-300 hover:text-primary transition-colors">
                                Mentions légales
                            </a>
                            <a href="/confidentialite" className="text-gray-300 hover:text-primary transition-colors">
                                Politique de confidentialité
                            </a>
                            <a href="/cgu" className="text-gray-300 hover:text-primary transition-colors">
                                CGU
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
