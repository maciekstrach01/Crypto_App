import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons'; // To jest ikona Bitcoina


const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
           {/* <FaCoins className='icon3' /> */}
           <FontAwesomeIcon icon={faBitcoin} className="icon" />
                <h1> <span className='style'>Cryptocurrency Analysis </span></h1>
            </div>
        </Link>
    )
}

export default Navbar