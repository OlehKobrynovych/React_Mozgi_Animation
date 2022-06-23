import React from "react";
// import { NavLink } from "react-router-dom";
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";
import { useRef, useEffect } from "react";

import './Home.css';


function Home() {
  let screen = useRef(null);
  let body = useRef(null);
  useEffect(() => {
    var tl = new TimelineMax();
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
    <div className="home">
      <div className="load-container">
        <div className="load-screen1" ref={(el) => (screen = el)}>
        </div>
      </div>
      <div data-barba="container" >
        <div ref={(el) => (body = el)} className="load-head" >
          <div className="home__title">Welcome to Home!!!</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
