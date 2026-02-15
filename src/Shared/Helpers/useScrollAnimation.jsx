import { useEffect } from "react";

const UseScrollAnimation = () => {
  useEffect(() => {
    // Save scroll position before reload
    const saveScrollPosition = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY);
    };

    // Restore scroll position
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem('scrollPosition');
      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
      }
    };

    // Restore scroll first
    restoreScrollPosition();

    // Small delay before starting animations
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      const observeParagraphs = () => {
        const paragraphs = document.querySelectorAll("p:not(.animate)");
        paragraphs.forEach((p) => observer.observe(p));
      };

      observeParagraphs();

      const mutationObserver = new MutationObserver(() => {
        observeParagraphs();
      });

      mutationObserver.observe(document.body, { childList: true, subtree: true });

      // Save scroll before unload
      window.addEventListener('beforeunload', saveScrollPosition);

      return () => {
        window.removeEventListener('beforeunload', saveScrollPosition);
        mutationObserver.disconnect();
        observer.disconnect();
      };
    }, 150);

    return () => clearTimeout(timeout);
  }, []);
};

export default UseScrollAnimation;