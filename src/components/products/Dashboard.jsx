import React, { useEffect, useState } from 'react'
import { RiArrowLeftSLine } from "react-icons/ri";
import Products from './Products';
import Filter from './Filter';

const Dashboard = () => {

    const [productData, setProductData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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

    return (
        <div className='dashboard'>
            <div className='dashboard-menu'>
                <div>
                    <span>{productData ? productData.length : 0} items</span>
                    <span className='dashboard-toggle'><RiArrowLeftSLine />Hide Filters</span>
                </div>
                <div> Recommended</div>
            </div>
            <div className='dashboard-content'>
                <div className='dashboard-filters'>
                    <Filter />
                </div>
                <div className='dashboard-products'>
                    {loading ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>Error: {error}</div>
                    ) : productData.length === 0 ? (
                        <div>No products available</div>
                    ) : (
                        productData.map((item, index) => <Products item={item} key={index} />)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dashboard