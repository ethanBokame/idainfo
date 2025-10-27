import { Link } from "react-router-dom";

function InfoCard({ props, hrColor }) {
    return (
        <Link className="lg:flex lg:flex-col lg:h-[340px]  gap-4 bg-white/20 backdrop-blur-sm py-3 lg:p-3 rounded-xl hover:cursor-pointer transform transition-all duration-300 hover:scale-105">
            <img src={props.image} className="rounded-lg float-right lg:float-none h-20 lg:h-auto" />
            <div className="space-y-1 lg:space-y-0">
                <img
                    src="/logo_1.jpg"
                    className="float-left rounded-full h-5 w-5 mr-1"
                />
                <p className="font-semibold text-black">{props.title}</p>
                <p className="text-sm text-black">{props.body}</p>
                <p className="text-black text-[12px] hidden lg:block lg:mt-3.5">
                    Il y a {props.time}
                </p>

                <div
                    className="lg:hidden h-0.5 mt-3"
                    style={{ backgroundColor: hrColor }}
                ></div>
            </div>
        </Link>
    );
}

export default InfoCard;
