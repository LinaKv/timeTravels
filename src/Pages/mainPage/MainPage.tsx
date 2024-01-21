import React from 'react';
import './mainPage.scss';
import Lines from '../../components/background/Lines';
import Header from '../../components/header/Header';
import MainComponent from '../../components/mainComponent/MainComponent';

function MainPage() {
    return (
        <div className="mainPageWrapper">
            <Lines />
            <div className="mainPage">
                <Header header="Исторические даты" />
                <MainComponent />
            </div>
        </div>
    );
}

export default MainPage;
