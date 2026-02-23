import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // अगर URL में # (hash) है
        if (hash) {
            // थोड़ा इंतज़ार करो ताकि पेज लोड हो जाए (Lazy Loading के लिए)
            const timer = setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            }, 500);

            return () => clearTimeout(timer);
        }
        // अगर # नहीं है, तो सबसे ऊपर स्क्रॉल करो (नया पेज खुलने पर)
        else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToAnchor;
