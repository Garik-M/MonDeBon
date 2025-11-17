// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import styles from "@components/About/About.module.scss";

// gsap.registerPlugin(ScrollTrigger);

// export const useGsapScrollList = () => {
//   useGSAP(() => {
//     const container = document.querySelector("#About");
//     const textBlocksContainer = document.querySelector(
//       `.${styles.textBlocks}`
//     ) as HTMLDivElement | null;
//     const blocks = gsap.utils.toArray(`.${styles.textBlock}`) as HTMLDivElement[];

//     if (!container || !textBlocksContainer || blocks.length === 0) return;

//     ScrollTrigger.getAll().forEach((t) => t.kill());

//     const positions = blocks.map((block) => {
//       const blockRect = block.getBoundingClientRect();
//       const containerRect = textBlocksContainer.getBoundingClientRect();
//       const blockCenterInContainer = block.offsetLeft + blockRect.width / 2;
//       const containerLeftInViewport = containerRect.left;
//       const viewportCenter = window.innerWidth / 2;

//       return blockCenterInContainer + containerLeftInViewport - viewportCenter;
//     });

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: () => `+=${textBlocksContainer.scrollWidth - window.innerWidth + window.innerHeight}`,
//         scrub: 1.2,
//         pin: true,
//         anticipatePin: 1,
//         markers: false,
//         invalidateOnRefresh: true,
//       },
//     });

//     positions.forEach((pos, i) => {
//       const prev = i === 0 ? 0 : positions[i - 1];
//       const distance = Math.abs(pos - prev);
//       const duration = Math.max(distance / 500, 0.3);

//       tl.to(textBlocksContainer, {
//         x: -pos,
//         duration,
//         ease: "power2.inOut",
//       });

//       if (i < positions.length - 1) tl.to({}, { duration: 0.3 });
//     });

//     // const imgs = textBlocksContainer.querySelectorAll("img");
//     // if (imgs.length) {
//     //   Promise.all(
//     //     Array.from(imgs).map(
//     //       (img) =>
//     //         new Promise<void>((resolve) => {
//     //           if (img.complete) resolve();
//     //           else {
//     //             img.addEventListener("load", () => resolve(), { once: true });
//     //             img.addEventListener("error", () => resolve(), { once: true });
//     //           }
//     //         })
//     //     )
//     //   ).then(() => ScrollTrigger.refresh());
//     // } else {
//     //   ScrollTrigger.refresh();
//     // }

//     return () => {
//       tl.kill();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);
// };
