import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1> Get Exclusive Offers On Your Email </h1>
            <p> Subscribe to our newsletter and get the latest updates about our products, promotions and more!</p>
            <div>
                <input type="email" placeholder='your email id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
