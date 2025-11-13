import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export const useGsapHero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const clouds = gsap.utils.toArray<HTMLElement>(".cloud");

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

  // Hero Right
  useGSAP(() => {
    setTimeout(() => {
      gsap.from("#heroRight", {
        x: 700,
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: "power2.out",
      });

      gsap.fromTo(
        "#heroRight",
        { x: 0, scale: 1 },
        {
          scrollTrigger: {
            trigger: "#heroRight",
            start: "top top",
            end: `${isMobile ? "bottom+=200": "bottom"} center`,
            scrub: true,
            markers: false,
          },
          x: 700,
          scale: 0.6,
          ease: "none",
        }
      );

      ScrollTrigger.refresh();
    }, 10);
  }, []);

  // Hero Left
  useGSAP(() => {
    setTimeout(() => {
      // Entry: slide in from left
      gsap.fromTo(
        "#heroLeft",
        { x: -700, opacity: 0, scale: 0.6 },
        {
          scrollTrigger: {
            trigger: "#heroLeft",
            start: `${isMobile ? "bottom+=50" : "top"} bottom`,
            end: `top 40%`,
            scrub: true,
            markers: false,
          },
          x: 0,
          opacity: 1,
          scale: 1,
        }
      );

      // Scroll effect: slide back left while scaling down
      gsap.fromTo(
        "#heroLeft",
        { x: 0, scale: 1 },
        {
          scrollTrigger: {
            trigger: "#heroLeft",
            start: "top top",
            end: "bottom top",
            scrub: true,
            markers: false,
          },
          x: -700,
          scale: 0.6,
          ease: "none",
        }
      );

      ScrollTrigger.refresh();
    }, 10);
  }, []);
};
