import React, { useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi';
import { gender, occasion, work, fabric, segment, suitable, materials, Pattern } from '../support/Data';

const Filter = () => {
    const [toggle, setToggle] = useState({ gender: false, occasion: false, work: false, fabric: false, segment: false, suitable: false, materials: false, Pattern: false })
    return (
        <div>
            <input type='checkbox' />
            <label>Customizble</label>

            <div>
                <div onClick={() => setToggle({ ...toggle, gender: !toggle.gender })}>
                    <div>
                        <span>IDEAL FOR</span>
                        <HiOutlineChevronDown style={{ float: 'right' }} />
                        <span style={{ display: 'block' }}>All</span>

                    </div>

                </div>
                {toggle.gender && <div>
                    <button>Unselect all</button>
                    {gender.map((gender) => {
                        return <div>
                            <input type='checkbox' />
                            <label>{gender}</label>
                        </div>
                    })}
                </div>}
                <div onClick={() => setToggle({ ...toggle, occasion: !toggle.occasion })}>
                    <div>
                        <span>occasion</span>
                        <HiOutlineChevronDown style={{ float: 'right' }} />
                        <span style={{ display: 'block' }}>All</span>

                    </div>

                </div>
                {toggle.occasion && <div>
                    <button>Unselect all</button>
                    {occasion.map((occasion) => {
                        return <div>
                            <input type='checkbox' />
                            <label>{occasion}</label>
                        </div>
                    })}
                </div>
                }

                <div onClick={() => setToggle({ ...toggle, work: !toggle.work })}>
                    <div>
                        <span>Work</span>
                        <HiOutlineChevronDown style={{ float: 'right' }} />
                        <span style={{ display: 'block' }}>All</span>
                    </div>

                </div>
                {toggle.work && <div>
                    <button>Unselect all</button>
                    {work.map((work) => {
                        return <div>
                            <input type='checkbox' />
                            <label>{work}</label>
                        </div>
                    })}
                </div>
                }

                <div onClick={() => setToggle({ ...toggle, fabric: !toggle.fabric })}>
                    <div>
                        <span>fabric</span>
                        <HiOutlineChevronDown style={{ float: 'right' }} />
                        <span style={{ display: 'block' }}>All</span>
                    </div>


                </div>

                {toggle.fabric && <div>
                    <button>Unselect all</button>
                    {fabric.map((fabric) => {
                        return <div>
                            <input type='checkbox' />
                            <label>{fabric}</label>
                        </div>
                    })}
                </div>
                }

                <div onClick={() => setToggle({ ...toggle, segment: !toggle.segment })}>
                    <div>
                        <span>segment</span>
                        <HiOutlineChevronDown style={{ float: 'right' }} />
                        <span style={{ display: 'block' }}>All</span>
                    </div>


                </div>

                {toggle.segment && <div>
                    <button>Unselect all</button>
                    {segment.map((segment) => {
                        return <div>
                            <input type='checkbox' />
                            <label>{segment}</label>
                        </div>
                    })}
                </div>
                }

                <div onClick={() => setToggle({ ...toggle, suitable: !toggle.suitable })} >
                    <div>
                        <span>suitable for</span>
                        <HiOutlineChevronDown style={{ float: 'right' }} />
                        <span style={{ display: 'block' }}>All</span>
                    </div>


                </div>
                {toggle.suitable && <div>
                    <button>Unselect all</button>
                    {suitable.map((suitable) => {
                        return <div>
                            <input type='checkbox' />
                            <label>{suitable}</label>
                        </div>
                    })}
                </div>
                }

                <div onClick={() => setToggle({ ...toggle, materials: !toggle.materials })}>
                    <div>
                        <span>Row materials</span>
                        <HiOutlineChevronDown style={{ float: 'right' }} />
                        <span style={{ display: 'block' }}>All</span>
                    </div>


                </div>
                {toggle.materials && <div>
                    <button>Unselect all</button>
                    {materials.map((material) => {
                        return <div>
                            <input type='checkbox' />
                            <label>{material}</label>
                        </div>
                    })}
                </div>
                }

                <div onClick={() => setToggle({ ...toggle, Pattern: !toggle.Pattern })}>
                    <div>
                        <span>Pattern</span>
                        <HiOutlineChevronDown style={{ float: 'right' }} />
                        <span style={{ display: 'block' }}>All</span>
                    </div>


                </div>
                {toggle.Pattern && <div>
                    <button>Unselect all</button>
                    {Pattern.map((Pattern) => {
                        return <div>
                            <input type='checkbox' />
                            <label>{Pattern}</label>
                        </div>
                    })}
                </div>
                }

            </div>
        </div>
    )
}

export default Filter