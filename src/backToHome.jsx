import { FaArrowUp } from "react-icons/fa";

export default function BackToHome() {
    const backToTop = () => {
        const scrollToTop = () => {
            const currentPosition = window.pageYOffset;
            if (currentPosition > 0) {
                window.scrollTo(0, currentPosition - currentPosition / 8);
                requestAnimationFrame(scrollToTop);
            }
        };
        requestAnimationFrame(scrollToTop);
    };

    return (
        <a
            href="#top"
            className="fixed p-2 text-blue-500 transition bg-white rounded-full shadow-md bottom-6 right-6 w-fit hover:text-blue-700 hover:bg-slate-200 scroll-smooth"
            onClick={backToTop}
        >
            <FaArrowUp className="m-auto" />
        </a>
    );
}
