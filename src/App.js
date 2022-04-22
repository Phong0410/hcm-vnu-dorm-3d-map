import React from 'react';
import { useState } from 'react';

import './App.scss';

import Header from './components/HeaderComponent/Header.js'
import Navigation from './components/NavigationComponent/Navigation.js';
import MapView from './components/MapViewComponent/MapView.js'


function App() {

    const AxBuilding = [
        {
            name: 'Tòa AH',
            url: 'https://phong0410.github.io/AH-dorm-3D-map/'
        },
        {
            name: 'Tòa AG',
            url: ''
        }
    ]

    const ABuildings = [
        {
            name: 'Tòa A1',
            url: ''
        },
        {
            name: 'Tòa A2',
            url: ''
        },
        {
            name: 'Tòa A3',
            url: ''
        },
        {
            name: 'Tòa A4',
            url: ''
        },
        {
            name: 'Tòa A5',
            url: ''
        },
        {
            name: 'Tòa A6',
            url: ''
        },
        {
            name: 'Tòa A7',
            url: ''
        },
        {
            name: 'Tòa A8',
            url: ''
        },
        {
            name: 'Tòa A9',
            url: ''
        },
        {
            name: 'Tòa A10',
            url: ''
        }
    ]
    const BBuildings = [
        {
            name: 'Tòa B1',
            url: ''
        },
        {
            name: 'Tòa B2',
            url: ''
        },
        {
            name: 'Tòa B3',
            url: ''
        },
        {
            name: 'Tòa B4',
            url: ''
        },
        {
            name: 'Tòa B5',
            url: ''
        },
        {
            name: 'Tòa B6',
            url: ''
        },
        {
            name: 'Tòa B7',
            url: ''
        },
        {
            name: 'Tòa B8',
            url: ''
        },
        {
            name: 'Tòa B9',
            url: ''
        },
        {
            name: 'Tòa B10',
            url: ''
        }
    ]

    const [location, setLocation] = useState(undefined)


    return (
        <div className="App">
            <div className='wrapper'>
                <Header></Header>
                <div className="navbar">
                    <Navigation
                        dataHeading='Khu A mở rộng'
                        dataBuildings={AxBuilding}
                        location={location}
                        pushData={MapView.pullData}
                        setLocation={setLocation}
                    >
                    </Navigation>
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