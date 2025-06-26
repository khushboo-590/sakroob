import React, { useEffect, useState } from 'react';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-5 right-5 size-10 rounded-full bg-[#112D49] border border-white flex items-center justify-center cursor-pointer
        z-10 transition-transform duration-200 ease-linear hover:scale-110" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
            </svg>
        </button>
    );
};

export default BackToTop;
