import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Gdy zmieni się ścieżka, przewiń do góry
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Komponent nie renderuje nic w UI
}

export default ScrollToTop;
