import { useState, useEffect } from "react"

function UseWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined
    });
    useEffect(() => {
        if (typeof window !== "undefined") {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth
                });
            }
            window.addEventListener("resize", handleResize)
            handleResize()
            return () => {
                window.removeEventListener("resize", handleResize)
            }
        }
    }, []);
    return windowSize
}

export default UseWindowSize