import { useState, useEffect } from 'react';
import './navbar.css'
import NavMenu from './Navmenu';



function Navbar(props) {

    const [lastItem, setLastItem] = useState(0);

    useEffect(() => {
        if(props.theNavBarOpen == false) {
            setLastItem(0);
        }
    },[props.theNavBarOpen]);

    return(
        <div className={props.theNavBarOpen ? "navbar-open" : "navbar-closed"}>
            <ul className='nav-menu-holder'>
                <NavMenu title={"NEW"} keys={1} setLastItem = {setLastItem}
                theLastItem = {lastItem}>
                    <li className='nav-menu-item'><a href=''>Bag</a></li>
                    <li className='nav-menu-item'><a href=''>Wallet</a></li>
                    <li className='nav-menu-item'><a href=''>Watch</a></li>
                    <li className='nav-menu-item'><a href=''>Shoes</a></li>
                </NavMenu>
                <NavMenu title={"MEN"} keys={2} setLastItem = {setLastItem}
                theLastItem = {lastItem}>
                    <li className='nav-menu-item'><a href=''>Item</a></li>
                    <li className='nav-menu-item'><a href=''>Item</a></li>
                    <li className='nav-menu-item'><a href=''>Item</a></li>
                    <li className='nav-menu-item'><a href=''>Item</a></li>
                </NavMenu>
                <NavMenu title={"WOMEN"} keys={3} setLastItem = {setLastItem}
                theLastItem = {lastItem}> 
                    <li className='nav-menu-item'><a href=''>Item</a></li>
                    <li className='nav-menu-item'><a href=''>Item</a></li>
                    <li className='nav-menu-item'><a href=''>Item</a></li>
                    <li className='nav-menu-item'><a href=''>Item</a></li>
                </NavMenu>

                <li className='nav-menu'><a href=''>TESTIMONY</a></li>
                <li className='nav-menu'><a href=''>LIVE</a></li>
            </ul>
        </div>
    );
}



export default Navbar