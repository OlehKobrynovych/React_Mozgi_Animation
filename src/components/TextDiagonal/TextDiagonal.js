import { useState } from 'react';
import './TextDiagonal.css';

function TextDiagonal() {

    const [text, setText] = useState('FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY')

    // useEffect(() => {
    
    //     let interval = setInterval(() => {
    //         setTimer(timer => timer + 1)
    //         setText(() => )
    //         setText(text[text.length - 1] + text.substring(0, text.length - 1)) 
    //         setText(value => value[value.length - 1] + value.substring(0, value.length - 1)) 
    //     }, 800);
    
    //     return () => clearInterval(interval);
    //   }, [text]);

    return (
        <div className="text-diagonal">

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
