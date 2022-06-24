import { useEffect, useState } from 'react';
import './TextDiagonal.css';

function TextDiagonal() {

    const [angle, setAngle] = useState(null);

    const [text, setText] = useState('FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY')

    useEffect(() => {
         let interval = setInterval(() => {
            setAngle(() => Math.atan(window.innerHeight/window.innerWidth) * 57.29577) 
        }, 100);
    
        return () => clearInterval(interval);
      }, []);

    return (
        <div className="text-diagonal" style={{transform: `rotate(-${angle}deg) translate(0%, -50%)`}}>

            <div className="text-diagonal__top">
                <div  className="text-diagonal__text">{text}</div>
                <div className="text-diagonal__text">{text}</div>
            </div>
            
            <div className="text-diagonal__bottom">
                <div  className="text-diagonal__text">{text}</div>
                <div className="text-diagonal__text">{text}</div>
            </div>

        </div>
    );
}

export default TextDiagonal;
