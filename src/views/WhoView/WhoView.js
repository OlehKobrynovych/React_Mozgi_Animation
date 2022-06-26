import LayoutTransitionLeft from '../../components/Layouts/LayoutTransitionLeft/LayoutTransitionLeft';
import './WhoView.css';

function WhoView() {
    return (
        <main className="who-view">
            <LayoutTransitionLeft>
                <div className="who-view__title">Who?</div>
            </LayoutTransitionLeft>
        </main>
    );
}

export default WhoView;
