import React from 'react';

import './Navigation.scss'

import { useState, useEffect } from 'react'

function Navigation({ dataHeading, dataBuildings, pushData, location, setLocation }) {
    const [buildingIndex, setBuildingIndex] = useState(undefined)
    const [buildingName, setBuildingName] = useState(undefined)

    useEffect(() => {
        const activeItem = document.querySelector('.active-item')
        if (activeItem)
            activeItem.style.top = buildingIndex * 40 + 'px'
        if (buildingName)
            document.title = `3D Map - ${buildingName}`
    }, [buildingIndex, buildingName])


    return (
        <>
            <h2
                onClick={() => {
                    setLocation(dataHeading)
                    setBuildingIndex(undefined)
                }}
                className={`nav-heading ${location === dataHeading && 'active'}`}
            >{dataHeading}</h2>
            {location === dataHeading &&
                (<ul className="nav-list">
                    {dataBuildings.map((building, index) =>
                    (<li
                        key={index}
                        className={`nav-item ${buildingIndex === index && 'active'}`}
                        onClick={() => {
                            setBuildingIndex(index)
                            setBuildingName(building.name)
                            pushData(building.url)
                        }}
                    >
                        <button>{building.name}</button>
                    </li>))}
                    {buildingIndex === undefined || (location && <div className='active-item'></div>)}
                </ul>)
            }
        </>
    )
}

export default Navigation