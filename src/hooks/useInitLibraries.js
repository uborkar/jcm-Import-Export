import { useEffect } from 'react';

const useInitLibraries = () => {
  useEffect(() => {
    // Initialize only on client side
    if (typeof window !== 'undefined') {
      // Give some time for all scripts to load
      setTimeout(() => {
        // Initialize WOW.js
        if (typeof window.WOW !== 'undefined') {
          try {
            new window.WOW().init();
          } catch (error) {
            console.log('WOW.js initialization error:', error);
          }
        }

        // Initialize Counter-Up
        if (typeof window.jQuery !== 'undefined' && typeof window.jQuery.fn.counterUp !== 'undefined') {
          try {
            window.jQuery('[data-toggle="counter-up"]').counterUp({
              delay: 10,
              time: 2000
            });
          } catch (error) {
            console.log('CounterUp initialization error:', error);
          }
        }

        // Initialize Owl Carousel
        if (typeof window.jQuery !== 'undefined' && typeof window.jQuery.fn.owlCarousel !== 'undefined') {
          try {
            window.jQuery('.owl-carousel').owlCarousel({
              items: 1,
              loop: true,
              nav: true,
              dots: true,
              autoplay: true,
              autoplayTimeout: 3000,
              autoplayHoverPause: true
            });
          } catch (error) {
            console.log('Owl Carousel initialization error:', error);
          }
        }

        // Initialize Lightbox
        if (typeof window.lightbox !== 'undefined') {
          try {
            window.lightbox.init();
          } catch (error) {
            console.log('Lightbox initialization error:', error);
          }
        }

        // Initialize Bootstrap components
        if (typeof window.bootstrap !== 'undefined') {
          try {
            // Initialize tooltips
            const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function (tooltipTriggerEl) {
              return new window.bootstrap.Tooltip(tooltipTriggerEl);
            });
            
            // Initialize popovers
            const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
            popoverTriggerList.map(function (popoverTriggerEl) {
              return new window.bootstrap.Popover(popoverTriggerEl);
            });
          } catch (error) {
            console.log('Bootstrap components initialization error:', error);
          }
        }
      }, 100);
    }
  }, []);
};

export default useInitLibraries;