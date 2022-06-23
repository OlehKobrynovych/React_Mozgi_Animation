import './BtnRotation.css';

function BtnRotation() {

    return (
        <div className="btn-rotation">
            <div className="btn-rotation__body">
                <div className="btn-rotation__center"></div>

                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 400 400">
                    <defs>
                        <path d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0" id="txt-path"></path>
                    </defs>

                    <text fill="#D54E02" fontSize="25.5" fontFamily="Helvetica Neue" fontWeight="600">
                        <textPath className="btn-rotation__text" startOffset="0" xlinkHref="#txt-path">showreel showreel showreel</textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
}

export default BtnRotation;
