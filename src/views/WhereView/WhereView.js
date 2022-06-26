import LayoutTransitionLeft from '../../components/Layouts/LayoutTransitionLeft/LayoutTransitionLeft';
import './WhereView.css';

function WhereView() {
    return (
        <main className="where-view">
            <LayoutTransitionLeft>
                <div className="where-view__title">Where?</div>
            </LayoutTransitionLeft>
        </main>
    );
}

export default WhereView;
