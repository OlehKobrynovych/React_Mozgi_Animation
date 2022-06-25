import LayoutTransitionTop from "../../components/Layouts/LayoutTransitionTop/LayoutTransitionTop";
import TitleRotation from "../../components/TitleRotation/TitleRotation";
import TextDiagonal from "../../components/TextDiagonal/TextDiagonal";
import BtnRotation from "../../components/BtnRotation/BtnRotation";

import './HomeView.css';

function HomeView() {
    return (
        <div className="home-view" data-barba="container">
            <LayoutTransitionTop>
                <TextDiagonal />

                <BtnRotation />
                
                <TitleRotation />
            </LayoutTransitionTop>
        </div>
    );
}

export default HomeView;
