import React from 'react';
import '../styles/searchbar.css';
import logo from '../assets/images/logo-searchbar.png';
import flag from '../assets/images/flag-searchbar.jpg';
// import cart from '../assets/images/cart-searchbar.jpg';


export default function SearchBar() {
    return (
        <div className='search-bar'>
            <ul className='search-bar-list'>
                <li className='search-bar--item'>
                    <a href='/' className='searchbar-logo ' >
                        <img src={logo} alt='logo' />
                    </a>
                </li>
                <li className='search-bar--item'>
                    <a href="/" className='location' style={{height: '100%',display: 'flex', flexDirection: 'row', alignItems: 'center', color: '#fff', padding: '0 8px'}}>
                        <i className = 'ti-location-pin' style={{fontSize: '20px', paddingRight: '4px', paddingTop: '4px'}}>
                        </i>
                        <p style = {{display: 'flex', flexDirection: 'column', padding: '6px 4px 2px', margin: '0'}}>
                            <span style={{fontSize: '12px'}}>Deliver to</span>
                            <span style={{fontSize: '14px', fontWeight: 'bold'}}>Vietnam</span>
                        </p>                        
                    </a>
                </li>
                <li className='search-bar--item' style={{padding: '8px 24px'}}>
                    <form>
                        <div className='search-bar--input' style={{display: 'flex', border: '1px solid #cdcdcd',borderRadius: '4px 4px',}}>

                        <div className='search-bar-input--select'>
                            <select style={{
                            height: '40px',
                            width: '52px',
                            fontSize: '14px',
                            paddingLeft: '6px',
                            border: 'none',
                            borderRight: '#cdcdcd 1px solid',
                            borderRadius: '4px 0px 0px 4px',
                        }}>
                                <option value='All'>All</option>
                                
                            </select>
                        </div>
                        <input type='text'  style={{width: '1100px', border: 'none' }} />
                        <span className='go-search' style={{width: '45px'}}>
                            <i className='ti-search' style={{
                                                                position: 'absolute', 
                                                                padding: '8px 12px', 
                                                                backgroundColor: '#febd69',
                                                                fontSize: `20px`,
                                                                fontWeight: 'bold',
                                                                width: '45px',
                                                                height: '40px',
                                                                }} />
                            <input  type='submit' value='go' style={{width: '45px', height: '40px'}} />
                        </span>
                        </div>
                    </form>

                </li>
                <li className='search-bar--item' >
                    <a className = "change-language" href="/" style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'row',
                                                                    padding: '16px 10px 8px'

                }}>
                        <span >
                            <img src={flag} alt='flag' style={{
                                width: '24px',
                                height: '18px',
                                fitObject: 'center'
                            }}/>
                        </span>
                        <span style={{padding: '14px 6px'}}>
                            <div style={{
                                width: '10px',
                                height: '6px',
                                backgroundColor: 'gray',
                                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                            }}></div>
                        </span>
                    </a>
                </li>
                <li className='search-bar--item'>
                    <a className='sign-in' href="/" style={{display:'flex', flexDirection: 'column', padding: ' 10px'}}>
                        <span style={{fontSize:'12px'}}>
                            Hello, Sign in
                        </span>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <span style={{fontSize: '14px', fontWeight: 'bold', }}>
                                {`Account & Lists`}
                            </span>
                            <div style={{
                                marginTop: '8px',
                                marginLeft: '4px',
                                width: '10px',
                                height: '6px',
                                backgroundColor: 'gray',
                                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                            }}></div>
                        </div>
                    </a>
                </li>
                <li className='search-bar--item'>
                    <a className = "returns-orders" href="/" style={{display: 'flex', flexDirection: 'column', padding: '10px 10px'}}>
                        <span style={{fontSize: '12px'}}>
                            Returns
                        </span>
                        <span style={{fontSize: '14px', fontWeight: 'bold'}}>
                            {"& Orders"}
                        </span>
                    </a>
                </li>
                <li className='search-bar--item'>
                    <a className = "cart" href="/" style={{display: 'flex', flexDirection: 'row', padding: '2px 10px '}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span style={{color: 'coral', fontWeight: 'bold', textAlign:'center', position:'absolute', width: '30px'}}>
                                    {'0'}
                            </span>
                            <span style={{marginTop: '12px', paddingTop: '2px'}}>
                                <i className='ti-shopping-cart' style={{fontSize: '32px', color: '#fff'}}/>
                            </span>
                        </div>
                        <span style={{fontWeight: 'bold', padding: '20px 6px 10px'}}>
                            {'Cart'}
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
