import InfoCard from "./InfoCard";

function Rechauffe() {

    const Infos = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjaxSop0Iy3pZSVmtUrp0fKLGDjT4el0TjQ&s",
            title: "Nouvelle loi sur l'emploi des jeunes",
            body: "Adoptée hier à l’Assemblée nationale, la nouvelle loi sur l’emploi des jeunes vise à favoriser l’insertion professionnelle des diplômés et...",
            time: "2 heures"
        },
                {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjaxSop0Iy3pZSVmtUrp0fKLGDjT4el0TjQ&s",
            title: "Nouvelle loi sur l'emploi des jeunes",
            body: "Adoptée hier à l’Assemblée nationale, la nouvelle loi sur l’emploi des jeunes vise à favoriser l’insertion professionnelle des diplômés et...",
            time: "2 heures"
        }
    ]

    return (
        <div className="flex flex-col gap-5 lg:bg-gradient-to-br from-[#2EB88A] to-accent-orange/30 lg:text-white rounded-2xl lg:p-6 lg:shadow-lg">
            <div className="hidden lg:flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <img
                        src="https://fonts.gstatic.com/s/e/notoemoji/latest/2615/512.gif"
                        className="w-8 h-8"
                    />
                </div>
                <div>
                    <p className="font-bold text-xl">C'est réchauffé</p>
                    <p>
                        Des sujets qui refont surface et continuent de faire
                        débat
                    </p>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 gap-4">
                {Infos.map((info, index) => (
                    <InfoCard key={index} props={info} hrColor="#2EB88A" />
                ))}
            </div>
        </div>
    );
}

export default Rechauffe;
