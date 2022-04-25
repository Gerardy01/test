import { useState, useEffect } from 'react'
import './header.css'
import Navbar from './navbar/Navbar'
import logo from './header-assets/logo.svg'
import hamMenu from './header-assets/hammenu.svg'
import search from './header-assets/search.svg'
import fav from './header-assets/fav.svg'
import closeBtn from './header-assets/close.svg'



function Header() {

    const [searchOpen, setSearchOpen] = useState(false);
    const [overlayOpen, setOverlayOpen] = useState(false);

    const openSearchMenu = () => {
        if (!searchOpen) {
            setSearchOpen(true);
            setOverlayOpen(true);
        } else {
            setSearchOpen(false);
            setOverlayOpen(false);
        }
    }

    return (
        <div className='header'>
            <div className={overlayOpen ? 'page-overlay-visible' : 'page-overlay'} />

            <div className='top-header'>
                <div className='header-main'>
                    <div className='header-main-left'>
                        <img className='ham-btn' src={hamMenu} />
                    </div>
                    <div className='header-main-mid'>
                        <img className='logo' src={logo} />
                    </div>
                    <div className='header-main-right'>
                        <div className='header-main-right-icon-placeholder'>
                            <img className='search-icon' src={search} onClick={openSearchMenu}/>
                            <img className='fav-icon' src={fav} />
                        </div>
                    </div>
                </div>

                <Navbar />

            </div>

            <div className={searchOpen ? "search-bar search-bar-open" : "search-bar search-bar-closed"}>
                <div className="search-wrap">
                    <img className="search-icon" for="search" src={search} alt="" />
                    <input className="search-input" type="text" name="search" placeholder="Product, Brand..." />
                </div>
                <img className='search-close' src={closeBtn} onClick={openSearchMenu}/>
            </div>
        </div>
    );
}


export default Header