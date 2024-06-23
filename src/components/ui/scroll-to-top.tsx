"use client"

import { useEffect, useState } from "react"

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // if the user scrolls down, show the button
            window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
        }
        // listen for scroll events
        window.addEventListener("scroll", toggleVisibility)

        // clear the listener on component unmount
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    // handles the animation when scrolling to the top
    const scrollToTop = () => {
        isVisible &&
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
    }

    return (
        <button
            className={`fixed bottom-4 right-4 rounded-full shadow bg-greenSavia p-2 outline-none transition-opacity duration-200 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
            onClick={scrollToTop}
        >
            <svg viewBox="0 0 48 48" width="32" height="32px" xmlns="http://www.w3.org/2000/svg">
                <path id="scrolltop-bg" d="M0 0h48v48h-48z" fill="none"></path>
                <path id="scrolltop-arrow" d="M14.83 30.83l9.17-9.17 9.17 9.17 2.83-2.83-12-12-12 12z" fill="#002938"></path>
            </svg>
        </button>
    )
}

export default ScrollToTopButton