import { useEffect, useState } from "react";

function useTheme() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return { theme, setTheme, isMounted }
}

export default useTheme