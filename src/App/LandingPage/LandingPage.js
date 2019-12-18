import React from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Cards from '../Cards/Cards';
import './styles.css'

const LandingPage = (props) => {
    return (
        <div className="main-con">
            <div className="map">
            </div>
            <div className="components-con">
                <Header />
                <Search />
                <Cards />
            </div>
        </div>
    )
}

const Map = (props) => {
    return (
        <div>

        </div>
    )
}

export default LandingPage;