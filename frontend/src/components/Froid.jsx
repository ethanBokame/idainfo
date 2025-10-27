import InfoCard from "./InfoCard";

function Froid() {

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
        <div className="flex flex-col gap-5 lg:bg-gradient-to-br from-[#2080DF] to-accent-orange/30 lg:text-white rounded-2xl lg:p-6 lg:shadow-lg">
            <div className="hidden lg:flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <img
                        src="https://fonts.gstatic.com/s/e/notoemoji/latest/2744_fe0f/512.gif"
                        className="w-8 h-8"
                    />
                </div>
                <div>
                    <p className="font-bold text-xl">C'est froid</p>
                    <p>Des sujets moins chauds, mais toujours présents dans les débats</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 gap-4">
                {Infos.map((info, index) => (
                    <InfoCard key={index} props={info} hrColor="#2080DF" />
                ))}
            </div>
        </div>
    );
}

export default Froid;
