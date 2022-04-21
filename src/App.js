import React from 'react';
import { useState } from 'react';

import './App.scss';

import Header from './components/HeaderComponent/Header.js'
import Navigation from './components/NavigationComponent/Navigation.js';
import MapView from './components/MapViewComponent/MapView.js'


function App() {

    const ABuildings = [
        {
            name: 'Tòa AH',
            url: 'https://phong0410.github.io/AH-dorm-3D-map/'
        },
        {
            name: 'Tòa AG',
            url: ''
        }
    ]
    const BBuildings = [
        {
            name: 'Tòa BH',
            url: ''
        },
        {
            name: 'Tòa BG',
            url: ''
        }
    ]

    const [location, setLocation] = useState('undefined')


    return (
        <div className="App">
            <div className='wrapper'>
                <Header></Header>
                <div className="navbar">
                    <Navigation
                        dataHeading="Khu A"
                        dataBuildings={ABuildings}
                        location={location}
                        pushData={MapView.pullData}
                        setLocation={setLocation}
                    >
                    </Navigation>
                    <Navigation
                        dataHeading="Khu B"
                        dataBuildings={BBuildings}
                        location={location}
                        pushData={MapView.pullData}
                        setLocation={setLocation}
                    ></Navigation>
                </div>
                <div className="map">
                    <MapView></MapView>
                </div>
            </div>
        </div>
    )
}

export default App;