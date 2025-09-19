import InfoCard from "./InfoCard";

function Chaud() {

    const Infos = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjaxSop0Iy3pZSVmtUrp0fKLGDjT4el0TjQ&s",
            title: "Nouvelle loi sur l'emploi des jeunes",
            body: "Adoptée hier à l’Assemblée nationale, la nouvelle loi sur l’emploi des jeunes vise à favoriser l’insertion professionnelle des diplômés et...",
            time: "2 heures"
        }
    ]
    return (
        <div className="flex flex-col gap-5 bg-gradient-to-br from-[#EE5C2B] to-accent-orange/30 text-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <img
                        src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif"
                        className="w-8 h-8"
                    />
                </div>
                <div>
                    <p className="font-bold text-xl">C'est chaud</p>
                    <p>L'actualité brûlante qui fait parler</p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                {Infos.map((info, index) => (
                    <InfoCard key={index} props={info} />
                ))}
            </div>
        </div>
    );
}

export default Chaud;
