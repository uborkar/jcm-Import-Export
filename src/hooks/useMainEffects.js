import { useEffect } from 'react';

const useMainEffects = () => {
  useEffect(() => {
    // Sticky Navbar
    const handleScroll = () => {
      const navbar = document.querySelector(".sticky-top");
      if (navbar) {
        if (window.scrollY > 200) {
          navbar.classList.add("shadow-sm");
          navbar.style.top = "0px";
        } else {
          navbar.classList.remove("shadow-sm");
          navbar.style.top = "-200px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Facts counter
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
      let countTo = parseInt(counter.innerText, 10);
      let count = 0;
      const increment = Math.ceil(countTo / 200);
      const updateCounter = () => {
        count += increment;
        if (count >= countTo) {
          counter.innerText = countTo;
        } else {
          counter.innerText = count;
          requestAnimationFrame(updateCounter);
        }
      };
      updateCounter();
    });

    // Back to top button
    const backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
      const handleBackToTopScroll = () => {
        if (window.scrollY > 300) {
          backToTop.style.display = "block";
          backToTop.style.opacity = "1";
          backToTop.style.transition = "opacity 0.5s ease";
        } else {
          backToTop.style.opacity = "0";
          setTimeout(() => (backToTop.style.display = "none"), 500);
        }
      };

      window.addEventListener("scroll", handleBackToTopScroll);

      backToTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      return () => {
        window.removeEventListener("scroll", handleBackToTopScroll);
      };
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useMainEffects;