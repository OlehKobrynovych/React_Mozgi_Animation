import LayoutTransitionLeft from '../../components/Layouts/LayoutTransitionLeft/LayoutTransitionLeft';
import './WhoView.css';

function WhoView() {
    return (
        <div className="who-view">
            <LayoutTransitionLeft>
                <div className="who-view__title">Who?</div>
            </LayoutTransitionLeft>
        </div>
    );
}

export default WhoView;
