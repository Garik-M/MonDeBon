import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useGsapHero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const smaller = useMediaQuery({ maxWidth: 600 });
  const small = useMediaQuery({ maxWidth: 500 });
  const animationsInitialized = useRef(false);

  // Cloud parallax effect
  useGSAP(() => {
    const clouds = gsap.utils.toArray<HTMLElement>(".cloud");

    if (clouds.length === 0) return;

    const factors = clouds.map(() => ({
      x: gsap.utils.random(-40, 40),
      y: gsap.utils.random(-35, 35),
      speed: gsap.utils.random(0.5, 1),
    }));

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      clouds.forEach((cloud, i) => {
        const { x: fx, y: fy, speed } = factors[i];
        gsap.to(cloud, {
          x: x * fx * 3,
          y: y * fy * 3,
          duration: speed + 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Hero animations with proper element checking
  useEffect(() => {
    if (animationsInitialized.current) return;

    const initAnimations = () => {
      const heroRight = document.getElementById("heroRight");
      const heroLeft = document.getElementById("heroLeft");


      if (!heroRight || !heroLeft) {
        // Retry after a short delay if elements aren't ready
        setTimeout(initAnimations, 50);
        return;
      }

      animationsInitialized.current = true;

      // Clear any existing ScrollTriggers
      ScrollTrigger.getAll().forEach((trigger) => {
        if (
          trigger.vars.trigger === heroRight ||
          trigger.vars.trigger === heroLeft
        ) {
          trigger.kill();
        }
      });

      // Set initial states
      gsap.set([heroRight, heroLeft], {
        clearProps: "all", // Clear any existing transforms
      });

      gsap.set(heroRight, { x: 700, opacity: 0, scale: 0.6 });
      gsap.set(heroLeft, { x: -700, opacity: 0, scale: 0.6 });

      // Initial entrance animations
      const tl = gsap.timeline({ delay: 1 }); // Increased delay to ensure page is loaded

      tl.to(heroRight, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      }).to(
        heroLeft,
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1.2",
      );

      // Wait for entrance animation to complete before setting up scroll triggers
      tl.call(() => {
        // Scroll-triggered animations for heroRight
        ScrollTrigger.create({
          trigger: heroRight,
          start: "top top",
          end: isMobile ? "bottom+=200 top" : "bottom top",
          scrub: 1,
          markers: false,
          animation: gsap.fromTo(
            heroRight,
            { x: 0, scale: 1, opacity: 1 },
            { x: 700, scale: 0.6, opacity: 0.3, ease: "none" },
          ),
        });

        // Scroll-triggered animations for heroLeft
        ScrollTrigger.create({
          trigger: heroLeft,
          start: small ? "-300px top" : smaller ? "-100px top" : "top top",
          end: "bottom top",
          scrub: 1,
          markers: false,
          animation: gsap.fromTo(
            heroLeft,
            { x: 0, scale: 1, opacity: 1 },
            { x: -700, scale: 0.6, opacity: 0.3, ease: "none" },
          ),
        });

        ScrollTrigger.refresh();
      });
    };

    // Start initialization after a delay to ensure DOM is ready
    const timeoutId = setTimeout(initAnimations, 500);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach((trigger) => {
        const triggerElement = trigger.vars.trigger as Element;
        if (
          triggerElement?.id === "heroRight" ||
          triggerElement?.id === "heroLeft"
        ) {
          trigger.kill();
        }
      });
    };
  }, [isMobile, smaller, small]);

  // Refresh ScrollTrigger when media queries change
  useEffect(() => {
    if (animationsInitialized.current) {
      ScrollTrigger.refresh();
    }
  }, [isMobile, smaller, small]);
};
