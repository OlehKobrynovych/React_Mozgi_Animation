import LayoutTransitionTop from "../../components/Layouts/LayoutTransitionTop/LayoutTransitionTop";
import TitleRotation from "../../components/TitleRotation/TitleRotation";
import TextDiagonal from "../../components/TextDiagonal/TextDiagonal";
import BtnRotation from "../../components/BtnRotation/BtnRotation";

import './HomeView.css';

function HomeView() {
    return (
        <main className="home-view">
            <LayoutTransitionTop>
                <TextDiagonal />

                <div className="home-view__circle-btn">
                    <BtnRotation />
                </div>

                <TitleRotation />
            </LayoutTransitionTop>
        </main>
    );
}

export default HomeView;
