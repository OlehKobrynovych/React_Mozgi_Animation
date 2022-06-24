import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";

import './Home.css';
import TextDiagonal from "../TextDiagonal/TextDiagonal";
import BtnRotation from "../BtnRotation/BtnRotation";

import { useRef, useEffect } from "react";
import TitleRotation from "../TitleRotation/TitleRotation";

function Home() {

    let screen = useRef(null);
    let body = useRef(null);
  
    useEffect(() => {                      // TODO: route louder
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
        <div className="home" >

            <div className="load-container">
                <div className="load-screen1" ref={(el) => (screen = el)}>
                </div>
            </div>

            <div data-barba="container" >
                <div ref={(el) => (body = el)} className="load-head" >

                    <TextDiagonal />

                    <BtnRotation />
                    
                    <TitleRotation />
                
                </div>
            </div>
            
        </div>
    );
}

export default Home;
