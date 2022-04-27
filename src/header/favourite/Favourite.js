import './favourite.css'
import closeBtn from './../header-assets/close.svg'
import favImg from './../header-assets/fav-img.png'
import arrow from './../header-assets/arrow.svg'


function Favourite(props) {
    return(
        <div className={props.theFavOpen ? "favourite-open" : "favourite-closed"}>
            <div className='fav-overlay' onClick={props.openFav} />

            <div className='fav-main'>
                <div className='fav-header'>
                    <span className='fav-title'>FAVOURITE</span>
                    <img className='fav-close-btn' src={closeBtn} onClick={props.openFav} />
                </div>

                <div className='fav-content'>
                    <ul className='fav-item-holder'>

                        <li className='fav-item'>
                            <div className='fav-img-holder'>
                                <img className='fav-item-img' src={favImg}/>
                            </div>
                            <div className='fav-item-body'>
                                <div className='fav-item-info'>
                                    <p className='fav-item-title'>Louis Vuitton a</p>
                                    <p className='fav-item-status'>PRE-ORDER</p>
                                </div>
                                <div className='purchase-sign-holder'>
                                    <span>Purchase</span>
                                    <img className='purchase-sign-arrow' src={arrow} />
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default Favourite