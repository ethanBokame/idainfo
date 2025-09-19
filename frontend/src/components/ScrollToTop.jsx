import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

function ScrollToTop() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 w-12 h-12 bg-primary hover:bg-primary/80 hover:cursor-pointer text-white rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 z-50 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            aria-label="Retour en haut"
        >
            <ArrowUp size={24} />
        </button>
    );
}

export default ScrollToTop;