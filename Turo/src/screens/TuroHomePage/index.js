import './turo.css'
import { CgMenu } from 'react-icons/cg'
import { CgProfile } from 'react-icons/cg';
import Date from '../../components/Date';
import Time from '../../components/Time';
import Slider from '../../components/Slider';
/* ant design */

function TuroHomePage() {


    const turoImage = 'https://logovectorseek.com/wp-content/uploads/2020/04/turo-logo-vector.png'
    const homeImage1 = "https://resources.turo.com/f/81934/480x422/6bef080322/hp_ny_480x422_2.jpg"

    return (
        <div className="App">
            <header className="App-header">

                <div className='container'>

                    {/*first header*/}

                    <div className='header1'>
                        <a href='' className='first-a'>Turo has launched in New York! Tap to explore cars.</a>
                    </div>

                    {/*second header */}

                    <div className='header2'>
                        <div>
                            <a href=''>
                                <img src={turoImage} height={60} width={100} className='turoimage' />
                            </a>
                        </div>

                        <div className='information'>
                            <div>
                                <a href='' className='host'>Become a host</a>
                            </div>
                            <div className='menu'>
                                <div><CgMenu style={{ fontSize: 25 }} /></div>
                                <div><CgProfile style={{ fontSize: 25 }} /></div>

                            </div>
                        </div>

                    </div>

                    {/*home image and search tab */}

                    <div className='home-image-div'>

                        <div className='search-item'>
                            <div className='search1'>
                                <div className='where'>Where</div>

                                <input placeholder='City, airport, address or hotel' className='input1' />

                            </div>
                            <div className='search2'>
                                <div className='form'>
                                    <div className='from-heading'>From</div>
                                    <div className='date_time'>
                                        <Date></Date>
                                        <Time></Time>
                                    </div>
                                </div>
                                <div className='until'>
                                <div className='from-heading'>Until</div>
                                    <div className='date_time'>
                                        <Date></Date>
                                        <Time></Time>
                                    </div>
                                </div>
                            </div>
                            <div className='search3'>
                                <button type='submit' className='search_button'>
                                <svg  width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="searchIconLabel" class="seo-pages-1iuz9hb" role="img" version="1.1"><path d="M20.75 21.52a.62.62 0 0 1-.44-.18l-6.11-6.11a.627.627 0 0 1-.18-.45c0-.17.07-.33.19-.45l.08-.07c2.51-2.51 2.51-6.61-.01-9.12-2.52-2.52-6.62-2.52-9.13 0-2.52 2.52-2.52 6.62 0 9.13a6.471 6.471 0 0 0 6.29 1.66c.34-.09.68.1.77.44.09.33-.1.68-.44.77-2.67.74-5.55-.02-7.51-1.98-3-3.01-3-7.9 0-10.9s7.9-3.01 10.9 0c2.88 2.88 3 7.5.35 10.52l5.68 5.68c.24.24.24.64 0 .88a.62.62 0 0 1-.44.18Z" fill="white"></path></svg>
                                </button>
                                <p className='search3-p'>Search for cars</p>
                            </div>
                           

                        </div>

                    </div>

                    {/*heading */}
                    <div>
                        <p className='first-hea'>Find your drive</p>
                    </div>
                    <div className='seacond'>
                        <h1 className='seacond-hea'>Explore the world's largest carsharing marketplace</h1>
                    </div>

                    {/*Slider */}
                    <div>
                      <Slider></Slider>
                    </div>

                </div>

            </header>
        </div>
    );

}
export default TuroHomePage;
