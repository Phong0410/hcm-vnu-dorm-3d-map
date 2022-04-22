import React from 'react';

import './Navigation.scss'

import { useState, useEffect } from 'react'

function Navigation({ dataHeading, dataBuildings, pushData, location, setLocation }) {

    // state lưu thông tin (index, name) tòa nhà đang được chọn
    const [buildingIndex, setBuildingIndex] = useState(undefined)
    const [buildingName, setBuildingName] = useState(undefined)

    // thay đổi vị trí highlight và đổi title trang web
    useEffect(() => {
        const activeItem = document.querySelector('.active-item')
        if (activeItem)
            activeItem.style.top = buildingIndex * 40 + 'px'
        if (buildingName)
            document.title = `3D Map - ${buildingName}`

        // cuộn trang lên đầu
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [buildingIndex, buildingName])

    // khi click vào heading thì hiện danh sách tòa nhà, click lần 2 ẩn đi
    const dataHeadingClickHandle = (dataHeading) => {
        if (location === dataHeading)
            setLocation(undefined)
        else
            setLocation(dataHeading)
    }


    return (
        <>
            <h2
                onClick={() => {
                    dataHeadingClickHandle(dataHeading)
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
                            pushData(building.url) // building.url được truyền vào pushData -> setMapUrl của MapView component
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