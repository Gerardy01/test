import { useState, useEffect } from 'react'

import './header.css'

import Navbar from './navbar/Navbar'
import Favourite from './favourite/Favourite'

import logo from './header-assets/logo.svg'
import hamMenu from './header-assets/hammenu.svg'
import searchBtn from './header-assets/search.svg'
import fav from './header-assets/fav.svg'
import closeBtn from './header-assets/close.svg'



function Header() {

    const [searchOpen, setSearchOpen] = useState(false);
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [favOpen, setFavOpen] = useState(false);

    const [overlayOpen, setOverlayOpen] = useState(false);
    const [fullOverlay, setFullOverlay] = useState(false);

    const openSearchMenu = () => {
        if (!searchOpen) {
            setSearchOpen(true);
            setOverlayOpen(true);
        } else {
            setSearchOpen(false);
            setOverlayOpen(false);
        }
    }

    const openNavBar = () => {
        if (!navBarOpen) {
            setNavBarOpen(true);
            setOverlayOpen(false);
            setSearchOpen(false);
        } else {
            setNavBarOpen(false);
        }
    }

    const openFav = () => {
        if (!favOpen) {
            setFavOpen(true);
            setFullOverlay(true);

            setSearchOpen(false);
            setOverlayOpen(false)
        } else {
            setFavOpen(false);
            setFullOverlay(false);
        }
    }

    return (
        <div className='header'>
            <div className={overlayOpen ? 'page-overlay-visible' : 'page-overlay'} />
            <div className={fullOverlay ? "full-overlay-visible" : "full-overlay"} />

            <div className='top-header'>
                <div className='header-main'>
                    <div className='header-main-left'>
                        <img className='ham-btn' src={navBarOpen ? closeBtn : hamMenu} onClick={openNavBar}/>
                    </div>
                    <div className='header-main-mid'>
                        <img className='logo' src={logo} />
                    </div>
                    <div className='header-main-right'>
                        <div className={navBarOpen ? 'header-main-right-icon-placeholder-normal' : 'header-main-right-icon-placeholder-none'}>
                            <img className='search-icon' src={searchBtn} onClick={openSearchMenu}/>
                            <img className='fav-icon' src={fav} onClick={openFav} />
                        </div>
                    </div>
                </div>

                <Navbar theNavBarOpen = {navBarOpen}/>
            </div>

            <div className={searchOpen ? "search-bar search-bar-open" : "search-bar search-bar-closed"}>
                <div className="search-wrap">
                    <img className="search-icon" for="search" src={searchBtn} alt="" />
                    <input className="search-input" type="text" name="search" placeholder="Product, Brand..." />
                </div>
                <img className='search-close' src={closeBtn} onClick={openSearchMenu}/>
            </div>

            <Favourite theFavOpen = {favOpen} openFav={openFav} />

        </div>
    );
}


export default Header