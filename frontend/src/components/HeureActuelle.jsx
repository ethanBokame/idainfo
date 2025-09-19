import { useEffect, useState } from "react";

function HeureActuelle() {
    const [heure, setHeure] = useState("");

    useEffect(() => {
        function updateHeure() {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, "0");
            const m = String(now.getMinutes()).padStart(2, "0");
            const s = String(now.getSeconds()).padStart(2, "0");
            setHeure(`${h}:${m}:${s}`);
        }
        updateHeure();
        const interval = setInterval(updateHeure, 1000);
        return () => clearInterval(interval);
    }, []);

    return <span>{heure}</span>;
}

export default HeureActuelle;
