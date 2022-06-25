import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";

import './WhatPage.css';

function WhatPage() {
    let screen = useRef(null);
    let body = useRef(null);

    useEffect(() => {
        let tl = new TimelineMax();

        tl.to(screen, {
            duration: 1.2,
            width: "100%",
            left: "0%",
            ease: Power3.easeInOut,
        });

        tl.to(screen, {
            duration: 1,
            left: "100%",
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
    }, []);

    return (
        <div className="what-page">
            <div className="load-container">
                <div className="load-screen" ref={(el) => (screen = el)}></div>
            </div>
            <div data-barba="container">
                <div ref={(el) => (body = el)} className="load-head">
                    <div className="what-page__title">What?</div>
                </div>
            </div>
        </div>
    );
}

export default WhatPage;
