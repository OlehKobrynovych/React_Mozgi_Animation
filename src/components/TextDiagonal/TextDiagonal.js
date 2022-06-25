import { useEffect, useState } from 'react';
import './TextDiagonal.css';

function TextDiagonal() {
    const [angle, setAngle] = useState((Math.atan(window.innerHeight/window.innerWidth) * 57.29577).toFixed());
    const [text, setText] = useState('FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY');

    useEffect(() => {
        window.addEventListener('resize', handleChangeAngle);
    
        return () => {
          window.removeEventListener('resize', handleChangeAngle);
        }
    }, [angle]);

    const handleChangeAngle = () => {
        let deg = (Math.atan(window.innerHeight/window.innerWidth) * 57.29577).toFixed();
        if (deg !== angle) {
            setAngle(() => deg); 
        }
    }
    
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
