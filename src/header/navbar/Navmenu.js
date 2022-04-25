import { useState, useEffect } from 'react';
import arrow from './../header-assets/arrow.svg'


function NavMenu(props) {

    const [navMenuItemOpen, setNavMenuItemOpen] = useState(false);

    const openMenuItem = () => {
        if (!navMenuItemOpen) {
            setNavMenuItemOpen(true);
            props.setLastItem(props.keys);
        } else {
            setNavMenuItemOpen(false);
            props.setLastItem(0);
        }
    }

    useEffect(() => {
        if (props.theLastItem != props.keys) {
            setNavMenuItemOpen(false);
        }
    }, [props.theLastItem]);

    return(
        <li className="nav-menu">
            <div className="nav-menu-header" onClick={openMenuItem}>
                <span className='nav-menu-title'>{props.title}</span>
                <img className={navMenuItemOpen ? "nav-menu-header-arrow-rotate" : "nav-menu-header-arrow-normal"} src={arrow}/>
            </div>

            <ul className={navMenuItemOpen ? "nav-menu-item-holder-open" : "nav-menu-item-holder-closed"}>
                {props.children}
            </ul>
        </li>
    );
}



export default NavMenu