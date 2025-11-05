import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const useGsapHero = () => {

  useGSAP(() => {
    const clouds = gsap.utils.toArray<HTMLElement>(".cloud");

    const factors = clouds.map(() => ({
      x: gsap.utils.random(-40, 40),
      y: gsap.utils.random(-35, 35),
      speed: gsap.utils.random(0.6, 1),
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

  useGSAP(() => {
    gsap.from("#hero1", {
      x: 700,
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#hero1",
      {
        x: 0,
        scale: 1,
      },
      {
        scrollTrigger: {
          trigger: "#hero1",
          start: "500 500",
          end: "500 300",
          scrub: true,
          markers: false,
        },
        force3D: true,
        scale: 0.6,
        x: 700,
        ease: "none",
      }
    );
  }, []);

  useGSAP(() => {
    gsap.from("#hero2", {
      scrollTrigger: {
        trigger: "#hero2",
        start: "entry 75%",
        end: "bottom 90%",
        scrub: true,
        markers: false,
      },
      x: -700,
      opacity: 0,
      scale: 0.6,
      ease: "power2.out",
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#hero2",
      {
        x: 0,
        scale: 1,
      },
      {
        scrollTrigger: {
          trigger: "#hero2",
          start: "500 500",
          end: "500 300",
          scrub: true,
          markers: false,
        },
        force3D: true,
        scale: 0.6,
        x: -700,
        ease: "none",
      }
    );
  }, []);
};
