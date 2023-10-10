import React from 'react'
import artist from '../../Images/artist.jpg'
import check from '../../Images/check.png'
import { FaEllipsisH, FaHeadphones, FaCheck } from 'react-icons/fa'

function Banner() {
    <div className="Banner">
        <img src={artist} alt="artist" className='bannerImg'/>

        <div className='content'>
            <div className='breadCrump'>
                <p>
                    Home <span>/Ramex</span>
                </p>
                <i>
                    <FaEllipsisH/>
                </i>
            </div>

            <div className='artist'>
                <div className="left">
                    <div className='name'>
                        <h2>Ramex</h2>
                        <img src={check} alt="check"/>
                    </div>

                    <p>
                        <i>
                            <FaHeadphones/>
                        </i>

                        9,633,5000 <span>Monthly Listeners</span>
                    </p>
                </div>

                <div className='right'>
                    <a herf="#">Play</a>
                    <a href="#">
                        <i>
                            <FaCheck/>
                        </i>
                        Follwing
                    </a>
                </div>
            </div>
        </div>

        <div className='bottom'></div>
    </div>
}

export { Banner }