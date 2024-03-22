import React, { useEffect, useState } from 'react'
import { RiArrowLeftSLine } from "react-icons/ri";
import Products from './Products';
import Filter from './Filter';
import { HiOutlineChevronDown } from 'react-icons/hi';

const Dashboard = () => {

    const [productData, setProductData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [toggle, setToggle] = useState(false);
    const [toggleReco, setToggleReco] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch('https://fakestoreapi.com/products');

            if (res.ok) {
                const data = await res.json();
                setProductData(data);
                setLoading(false)
            }
            else {
                const errorData = await res.json();
                setError(errorData);
                setLoading(false)
            }
        }

        fetchData();
    }, [])

    const handleListItemClick = (event) => {
        const value = event.target.textContent;
        console.log('Clicked item value:', value);
    };

    return (
        <div className='dashboard'>
            <div className='dashboard-menu'>
                <div>
                    <span>{productData ? productData.length : 0} items</span>
                    <span className='show-hide' onClick={() => setToggle(!toggle)} ><RiArrowLeftSLine />{toggle ? "Hide Filters" : "Show filters"}</span>
                </div>
                <div onClick={() => { setToggleReco(!toggleReco) }}> Recommended <HiOutlineChevronDown /></div>
                {toggleReco && <div className='recommendation'>
                    <ul>
                        <li onClick={handleListItemClick} >Recommended</li>
                        <li onClick={handleListItemClick} >Newest First</li>
                        <li onClick={handleListItemClick} >Popular</li>
                        <li onClick={handleListItemClick} >Price: high to low</li>
                        <li onClick={handleListItemClick} >Price: low to high</li>
                    </ul>
                </div>}
            </div>
            <div className='dashboard-content'>
                {toggle && <div className='dashboard-filters'>
                    <Filter />
                </div>}
                <div className={`dashboard-products ${!toggle ? "dashboard-toggle" : "dashboard-notoggle"}`} >
                    {loading ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>Error: {error}</div>
                    ) : productData.length === 0 ? (
                        <div>No products available</div>
                    ) : (
                        productData.map((item, index) => <Products item={item} key={index} toggle={toggle} />)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dashboard