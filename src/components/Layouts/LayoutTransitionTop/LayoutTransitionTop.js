import { useRef, useEffect } from "react";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";

import './LayoutTransitionTop.css';

function LayoutTransitionTop({children}) {
    let screen = useRef(null);
    let body = useRef(null);
  
    useEffect(() => {                    
        let tl = new TimelineMax();

        tl.to(screen, {
            duration: 1.2,
            height: "100%",
            ease: Power3.easeInOut,
        });

        tl.to(screen, {
            duration: 1,
            top: "100%",
            ease: Power3.easeInOut,
            delay: 0.3,
        });

        tl.set(screen, { left: "-100%" });

        TweenMax.to(body, .3, {css: {
            opacity: "1",
            pointerEvents: "auto",
            ease: Power4.easeInOut
        }}).delay(2);

        return () => {
            TweenMax.to(body, 1, {css: {
            opacity: "0",
            pointerEvents: 'none'
            }});
        }
    });

    return (
        <>
            <div className="layout-transition-top">
                <div className="layout-transition-top__screen" ref={(el) => (screen = el)}></div>
            </div>
            <div data-barba="container">
                <div ref={(el) => (body = el)} className="layout-transition-top__head">
                    {children}
                </div>
            </div>
        </>
    );
}

export default LayoutTransitionTop;
