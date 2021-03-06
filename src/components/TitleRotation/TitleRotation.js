import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import './TitleRotation.css';

function TitleRotation() {
    const calc = (x, y, rect) => [                    
        -(y - rect.top - rect.height / 2) / 25,
        (x - rect.left - rect.width / 2) / 35,
        1.4
    ];

    const trans = (x, y) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`;

    const ref = useRef(null);
    const [xys, set] = useState([0, 0]);

    const config = useState({
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: false,
        precision: 0.01,
        velocity: 0,
        easing: (t) => t
    });

    const props = useSpring({ xys, config });
  
    return (
        <div 
            className="title-rotation" 
            ref={ref} 
            onMouseMove={(e) => {
                const rect = ref.current.getBoundingClientRect();
                set(calc(e.clientX, e.clientY, rect));
            }}
        >
            <animated.div
                style={{ transform: props.xys.to(trans) }}
            >
                <h1 className="title-rotation__title">FULL-CYCLE<br/>EVENT AGENCY</h1>
            </animated.div>
        </div>
    );
}

export default TitleRotation;
