import LayoutTransitionLeft from "../../components/Layouts/LayoutTransitionLeft/LayoutTransitionLeft";
import './WhatView.css';

function WhatView() {
    return (
        <div className="what-view">
            <LayoutTransitionLeft>
                <div className="what-view__title">What?</div>
            </LayoutTransitionLeft>
        </div>
    );
}

export default WhatView;
