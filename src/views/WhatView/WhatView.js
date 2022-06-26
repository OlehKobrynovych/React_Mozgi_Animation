import LayoutTransitionLeft from "../../components/Layouts/LayoutTransitionLeft/LayoutTransitionLeft";
import './WhatView.css';

function WhatView() {
    return (
        <main className="what-view">
            <LayoutTransitionLeft>
                <div className="what-view__title">What?</div>
            </LayoutTransitionLeft>
        </main>
    );
}

export default WhatView;
