import { Volume2, Play, Pause, AudioLines } from "lucide-react";
import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Sidebar({ onRadioSelect }) {
    // Données des radios disponibles
    const radios = [
        {
            id: 1,
            name: "Radio Albayane",
            frequency: "95.7 FM",
            logo: "/radio_1.jpg",
            streamUrl: "https://stream.zeno.fm/seb77kna90duv" // URL d'exemple
        },
        {
            id: 2,
            name: "Radio Espoir",
            frequency: "103.5 FM",
            logo: "/radio_2.png",
            streamUrl: "https://zeno.fm/radio/radio-espoir-102-8-fm" // URL d'exemple
        }
    ];

    const handleRadioClick = (radio) => {
        if (onRadioSelect) {
            onRadioSelect(radio);
        }
    };

    return (
        <div className="w-1/4 hidden lg:flex flex-col gap-6">
            {/* Section Pensée de l'humoriste */}
            <div className="rounded-lg overflow-hidden text-center shadow-lg">
                <div className="relative flex items-center justify-center gap-3 text-lg font-bold bg-primary text-white px-4 py-4">
                    <img src="/rire_2.png" className="w-7 h-7" />
                    <p className="z-10">La pensée de l'humoriste</p>
                    <img
                        src="/rire_emoji.png"
                        className="absolute right-[-30px] w-18 opacity-50"
                    />
                </div>
                <div className="flex flex-col gap-4 px-4 py-8 bg-white">
                    <p className="text-lg leading-relaxed">
                        « Ce n'est pas une passe mais un penalty que Gbagbo a
                        donné à Alassane. »
                    </p>
                    <i className="text-primary/85 hover:underline hover:cursor-pointer transition-colors">
                        Adama Dahico
                    </i>
                </div>
            </div>

            {/* <div className="flex items-center justify-center mt-2 border-4 border-secondary rounded-full p-2">
                <p className="text-xl font-bold">Station radi</p>
                <img src="/cd2.png" className="h-4 ml-[0.5px] mt-[-2px] animate-spin" />
            </div> */}

            <div className="relative flex items-center justify-center gap-3 text-lg font-bold bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800 text-white px-4 py-4 rounded-full overflow-hidden mt-6">
                    <div className="flex items-center gap-2">
                    <p className="z-10">Station radio</p>
                    <AudioLines size={25} strokeWidth={2.5} />
                    </div>
                    

                    <img
                        src="/cd4.png"
                        className="absolute left-[-5px] w-17 opacity-50 animate-spin-custom"
                    />
                </div>
            

            <DotLottieReact src="/radio.lottie" loop autoplay className="h-20 mx-auto my-[-10px]" />

            {/* Section Radio en direct */}
            {radios.map((radio) => (
                <div 
                    key={radio.id}
                    className="rounded-lg shadow-lg p-5 flex gap-2 bg-[radial-gradient(circle_at_top_left,_#3a3a3a,_#1e1e1e)] hover:bg-[radial-gradient(circle_at_top_left,_#4a4a4a,_#2e2e2e)] transition-colors cursor-pointer"
                    onClick={() => handleRadioClick(radio)}
                >
                    <img src={radio.logo} className="w-20 h-20 rounded-lg" />

                    <div className="flex flex-col justify-between">
                        <p className="text-white text-xl font-bold">
                            {radio.name}
                        </p>
                        <Play
                            className="bg-white cursor-pointer text-[radial-gradient(circle_at_top_left,_#3a3a3a,_#1e1e1e)] rounded-full p-2 fill-current hover:bg-gray-200 transition-colors"
                            size={36}
                        />
                    </div>
                </div>
            ))}

            {/* Espace publicitaire */}

            <div className="flex items-center justify-center bg-tertiary w-full h-[300px] mt-6">
                <img src="/logo_1.jpg" className="h-14 rounded-full" />
            </div>

            {/* <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white">
                <div className="bg-secondary text-white px-4 py-3 flex items-center gap-3">
                    <Volume2 size={20} />
                    <span className="font-semibold">Radio en direct</span>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-3 mb-4">
                        <button
                            onClick={toggleAudio}
                            className="bg-primary hover:bg-primary/80 text-white rounded-full p-2 transition-colors"
                        >
                            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                        </button>
                        <div className="flex-1">
                            <p className="font-medium text-sm">Radio Proximité</p>
                            <p className="text-xs text-gray-600">En direct</p>
                        </div>
                    </div>
                    <audio 
                        controls 
                        className="w-full"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    >
                        <source
                            src="https://stream.zeno.fm/seb77kna90duv"
                            type="audio/mpeg"
                        />
                        Votre navigateur ne supporte pas la lecture audio.
                    </audio>
                </div>
            </div> */}

            {/* Section Météo rapide */}
            {/* <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white">
                <div className="bg-tertiary px-4 py-3">
                    <h3 className="font-semibold text-gray-800">Météo Abidjan</h3>
                </div>
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                                <span className="text-2xl">☀️</span>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">28°C</p>
                                <p className="text-sm text-gray-600">Ensoleillé</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 text-sm text-gray-600">
                        <p>Humidité: 75%</p>
                        <p>Vent: 12 km/h</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Sidebar;
