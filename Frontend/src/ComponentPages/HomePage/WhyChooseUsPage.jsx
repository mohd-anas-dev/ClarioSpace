// import React, { useEffect, useRef } from "react";
// import "../../ComponentStyles/HomePageStyle.css/WhyChooseUs.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const WhyChooseUsPage = () => {
//   const containerRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     const element = textRef.current;
//     const words = element.innerText.split(" ");
//     element.innerHTML = words
//       .map(
//         (word) =>
//           `<span class="word" style="opacity:0.5; display:inline-block; margin:6px;">${word}</span>`
//       )
//       .join(" ");

//     const ctx = gsap.context(() => {
//       gsap.to(".word", {
//         opacity: 1,
//         stagger: 1,
//         ease: "power1.inOut",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 80%",
//           end: "top 20%",     
//           scrub: true,       
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="WhyChoosePage">
//       <div className="WhyChoosePageContainer">
//         <div
//           ref={containerRef}
//           style={{
//             position: "relative",
//             minHeight: "200px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <p
//             ref={textRef}
//             className="myTextForThis"
//           >
//             At ClarioSpace, we offer an all-in-one platform where students and researchers can organize, share, and collaborate effortlessly."
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUsPage;


// {/* <VariableProximity
//   label={"At ClarioSpace, we offer an all-in-one platform where students and researchers can organize, share, and collaborate effortlessly."}
//   className={'variable-proximity-demo'}
//   fromFontVariationSettings="'wght' 400, 'opsz' 9"
//   toFontVariationSettings="'wght' 1000, 'opsz' 40"
//   containerRef={containerRef}
//   radius={100}
//   falloff='linear'
// /> */}







import React, { useEffect, useRef } from "react";
import "../../ComponentStyles/HomePageStyle.css/WhyChooseUs.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsPage = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    const container = containerRef.current;
    
    if (!element || !container) return;

    const initAnimation = () => {
      // Kill any existing ScrollTriggers for this element
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });

      // Split text into words and wrap them
      const words = element.innerText.split(" ");
      element.innerHTML = words
        .map(
          (word) =>
            `<span class="word" style="opacity:0.5; display:inline-block; margin:6px;">${word}</span>`
        )
        .join(" ");

      // Create GSAP context for proper cleanup
      const ctx = gsap.context(() => {
        gsap.to(".word", {
          opacity: 1,
          stagger: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            refreshPriority: -1,
            onRefresh: () => {
              // Ensure words are properly reset on refresh
              gsap.set(".word", { opacity: 0.5 });
            }
          },
        });
      }, container);

      return ctx;
    };

    // Initialize with delay to ensure DOM is ready
    let ctx;
    const timer = setTimeout(() => {
      ctx = initAnimation();
    }, 100);

    // Additional initialization after layout settles
    const rafTimer = requestAnimationFrame(() => {
      setTimeout(() => {
        if (ctx) ctx.revert();
        ctx = initAnimation();
      }, 200);
    });

    // Handle window load event for deployed sites
    const handleLoad = () => {
      setTimeout(() => {
        if (ctx) ctx.revert();
        ctx = initAnimation();
      }, 100);
    };

    // Only add load listener if page hasn't loaded yet
    if (document.readyState === 'loading') {
      window.addEventListener('load', handleLoad);
    } else {
      // Page already loaded, just refresh ScrollTrigger
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    }

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafTimer);
      window.removeEventListener('load', handleLoad);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div className="WhyChoosePage">
      <div className="WhyChoosePageContainer">
        <div
          ref={containerRef}
          style={{
            position: "relative",
            minHeight: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            ref={textRef}
            className="myTextForThis"
          >
            At ClarioSpace, we offer an all-in-one platform where students and researchers can organize, share, and collaborate effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsPage;

{/* <VariableProximity
  label={"At ClarioSpace, we offer an all-in-one platform where students and researchers can organize, share, and collaborate effortlessly."}
  className={'variable-proximity-demo'}
  fromFontVariationSettings="'wght' 400, 'opsz' 9"
  toFontVariationSettings="'wght' 1000, 'opsz' 40"
  containerRef={containerRef}
  radius={100}
  falloff='linear'
/> */}