import React from 'react'
import Heart from '../../assets/Heart.svg'

const Products = ({ item, toggle }) => {

    console.log(toggle);


    return (
        <div className={`${!toggle ? "toggle-product" : "single-product"}`}>
            {/* <div className='productCardImg'> */}
            <div className='item-image'>
                <img src={item.image} alt={item.title} className='item' />
            </div>
            {/* </div> */}
            <div className='item-details'>
                <div className='wishlist'>
                    <img src={Heart} alt='wishlist' />
                </div>
                <h4>{item.title.length <= 30 ? item.title : item.title.slice(0, 28) + "..."}</h4>
                <p>{item.description.slice(0, 80) + "..."}</p>
                <p style={{ fontWeight: 600 }}>${item.price}</p>
                <p>{item.category}</p>
                <p>Rating: {item.rating.rate}</p>

            </div>
        </div>
    )
}

export default Products