import { useEffect, useState } from "react";

function MeteoActuelle() {
    const [meteo, setMeteo] = useState({
        temp: null,
        condition: "Chargement...",
    });

    useEffect(() => {
        // Exemple d'API météo gratuite (Open-Meteo)
        // Coordonnées Abidjan: lat=5.348, lon=-4.027
        fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=5.348&longitude=-4.027&current_weather=true"
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.current_weather) {
                    const temp = Math.round(data.current_weather.temperature);
                    // Simple mapping condition
                    let condition = "";
                    switch (data.current_weather.weathercode) {
                        case 0:
                            condition = "Ensoleillé";
                            break;
                        case 1:
                        case 2:
                        case 3:
                            condition = "Partiellement nuageux";
                            break;
                        case 45:
                        case 48:
                            condition = "Brumeux";
                            break;
                        case 51:
                        case 53:
                        case 55:
                        case 61:
                        case 63:
                        case 65:
                        case 80:
                        case 81:
                        case 82:
                            condition = "Pluvieux";
                            break;
                        default:
                            condition = "Variable";
                    }
                    setMeteo({ temp, condition });
                }
            });
    }, []);

    return (
        <span className="text-sm">
            {meteo.temp !== null
                ? `${meteo.temp}°C • ${meteo.condition}`
                : meteo.condition}
        </span>
    );
}

export default MeteoActuelle;
