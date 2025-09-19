import { Link } from "react-router-dom";

function InfoCard({ props }) {
    return (
        <Link className="flex flex-col h-[340px] gap-4 bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:cursor-pointer transform transition-all duration-300 hover:scale-105">
            <img
                src={props.image}
                className="rounded-lg"
            />
            <div>
                <img
                    src="/logo_1.jpg"
                    className="float-left rounded-full h-5 w-5 mr-1"
                />
                <p className="font-semibold text-black">
                    {props.title}
                </p>
                <p className="text-sm text-black">
                    {props.body}
                </p>
                <p className="text-black text-[12px] mt-3.5">Il y a {props.time}</p>
            </div>
        </Link>
    );
}

export default InfoCard;
