import React, { useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi';
import { gender, occasion, work, fabric, segment, suitable, materials, Pattern } from '../support/Data';

const Filter = () => {
    const [toggle, setToggle] = useState({ gender: false, occasion: false, work: false, fabric: false, segment: false, suitable: false, materials: false, Pattern: false })
    return (
        <>
            <input type='checkbox' />
            <label className='customize'>Customizble</label>

            <div>
                <div onClick={() => setToggle({ ...toggle, gender: !toggle.gender })}>
                    <div className='filter-content'>
                        <span>IDEAL FOR</span>
                        <HiOutlineChevronDown />
                        <span >All</span>

                    </div>

                </div>
                {toggle.gender && <div>
                    <button className='clear-btn'>Unselect all</button>
                    {gender.map((gender, index) => {
                        return <div className='filter-checkbox' key={index}>
                            <input type='checkbox' />
                            <label className='filter-label'>{gender}</label>
                        </div>
                    })}
                </div>}
                <div onClick={() => setToggle({ ...toggle, occasion: !toggle.occasion })}>
                    <div className='filter-content'>
                        <span>occasion</span>
                        <HiOutlineChevronDown />
                        <span >All</span>

                    </div>

                </div>
                {toggle.occasion && <div>
                    <button className='clear-btn'>Unselect all</button>
                    {occasion.map((occasion, index) => {
                        return <div className='filter-checkbox' key={index}>
                            <input type='checkbox' />
                            <label>{occasion}</label>
                        </div>
                    })}
                </div>
                }

                <div onClick={() => setToggle({ ...toggle, work: !toggle.work })}>
                    <div className='filter-content'>
                        <span>Work</span>
                        <HiOutlineChevronDown />
                        <span>All</span>
                    </div>

                </div>
                {toggle.work && <div>
                    <button className='clear-btn'>Unselect all</button>
                    {work.map((work, index) => {
                        return <div className='filter-checkbox' key={index}>
                            <input type='checkbox' />
                            <label>{work}</label>
                        </div>
                    })}
                </div>
                }

                <div onClick={() => setToggle({ ...toggle, fabric: !toggle.fabric })}>
                    <div className='filter-content'>
                        <span>fabric</span>
                        <HiOutlineChevronDown />
                        <span >All</span>
                    </div>
                </div>

                {toggle.fabric && <div>
                    <button className='clear-btn'>Unselect all</button>
                    {fabric.map((fabric, index) => {
                        return <div className='filter-checkbox' key={index}>
                            <input type='checkbox' />
                            <label>{fabric}</label>
                        </div>
                    })}
                </div>
                }

                <div onClick={() => setToggle({ ...toggle, segment: !toggle.segment })}>
                    <div className='filter-content'>
                        <span>segment</span>
                        <HiOutlineChevronDown />
                        <span >All</span>
                    </div>
                </div>

                {toggle.segment && <div>
                    <button className='clear-btn'>Unselect all</button>
                    {segment.map((segment, index) => {
                        return <div className='filter-checkbox' key={index}>
                            <input type='checkbox' />
                            <label>{segment}</label>
                        </div>
                    })}
                </div>
                }

                <div onClick={() => setToggle({ ...toggle, suitable: !toggle.suitable })} >
                    <div className='filter-content'>
                        <span>suitable for</span>
                        <HiOutlineChevronDown />
                        <span >All</span>
                    </div>
                </div>
                {toggle.suitable && <div>
                    <button className='clear-btn'>Unselect all</button>
                    {suitable.map((suitable, index) => {
                        return <div className='filter-checkbox' key={index}>
                            <input type='checkbox' />
                            <label>{suitable}</label>
                        </div>
                    })}
                </div>
                }

                <div onClick={() => setToggle({ ...toggle, materials: !toggle.materials })}>
                    <div className='filter-content'>
                        <span>Row materials</span>
                        <HiOutlineChevronDown />
                        <span >All</span>
                    </div>
                </div>

                {toggle.materials && <div>
                    <button className='clear-btn'>Unselect all</button>
                    {materials.map((material, index) => {
                        return <div className='filter-checkbox' key={index}>
                            <input type='checkbox' />
                            <label>{material}</label>
                        </div>
                    })}
                </div>
                }

                <div onClick={() => setToggle({ ...toggle, Pattern: !toggle.Pattern })}>
                    <div className='filter-content'>
                        <span>Pattern</span>
                        <HiOutlineChevronDown />
                        <span >All</span>
                    </div>
                </div>
                {toggle.Pattern && <div>
                    <button className='clear-btn'>Unselect all</button>
                    {Pattern.map((Pattern, index) => {
                        return <div className='filter-checkbox' key={index}>
                            <input type='checkbox' />
                            <label>{Pattern}</label>
                        </div>
                    })}
                </div>
                }

            </div>
        </>
    )
}

export default Filter