import LayoutTransitionLeft from '../../components/Layouts/LayoutTransitionLeft/LayoutTransitionLeft';
import './WhereView.css';

function WhereView() {
    return (
        <div className="where-view">
            <LayoutTransitionLeft>
                <div className="where-view__title">Where?</div>
            </LayoutTransitionLeft>
        </div>
    );
}

export default WhereView;
