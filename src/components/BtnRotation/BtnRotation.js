import CircleBtn from '../../assets/images/CircleBtn.svg';
import './BtnRotation.css';

function BtnRotation() {
    return (
        <div className="btn-rotation">
            <div className="btn-rotation__body">
                <div className="btn-rotation__center"></div>
                <img className="btn-rotation__svg" src={CircleBtn} alt='Circle'/>
            </div>
        </div>
    );
}

export default BtnRotation;
