import { useEffect, useState } from "react";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const currentScroll = window.innerHeight + window.scrollY;
    setIsVisible(currentScroll >= scrollHeight - 400);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 rounded-lg bg-blue-500 p-3 text-white shadow-md transition-all duration-300 hover:bg-blue-600"
        >
          Go to Top
        </button>
      )}
    </>
  );
};

export default GoToTopButton;
