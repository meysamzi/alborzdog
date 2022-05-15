import { memo, Fragment } from 'react'
import Link from 'next/link'

import First_nav_dropdown_container_nezhadha from './First_nav_dropdown_container_nezhadha'

import * as obj from './Js_functions'

import * as data from '../data/data'

const Navbar = () => {
    return (
        <Fragment>
            {
                /* First nav */
            }
            <div className='header_nav_container' onMouseEnter={obj.first_nav_dropdown_container_nezhadha_remove}>
                <div className='header_nav_contact_us'>
                    <p>تماس : 09359580206</p>
                </div>
                <div className='header_nav_address'>
                    <p>آدرس:کردان-بلوار مولانا-خیابن نصر-باشگاه البرزداگ</p>
                </div>
                <div className='header_nav_social_title'>
                    <p>شبکه های اجتماعی</p>
                </div>
                <div className='header_nav_social_container'>
                    <div className='header_nav_social_instagram'>
                        <i class="fab fa-instagram-square"></i>
                    </div>
                    <div className='header_nav_social_telegram'>
                        <i class="fab fa-telegram"></i>
                    </div>
                </div>
            </div>
            {
                /* First nav */
            }
            {
                /* Responsive nav */
            }
            <div className='responsive_nav_container'>
                <div className='responsive_nav_logo'>
                    <Link href='/'>
                        <a><img src='/images/alborz_dog_logo.PNG' /></a>
                    </Link>
                </div>
                <div className='responsive_nav_close_btn' onClick={obj.responsive_nav_close_btn_function}>
                    <i>&#x2716;</i>
                </div>
                <div className='responsive_nav_underline'></div>
                <div className='responsive_nav_blood_all'>
                    <Link href='/dogs_list'>
                        <a>لیست کل نژادها</a>
                    </Link>
                </div>
                <div className='responsive_nav_products'>
                    <Link href='/'>
                        <a>سته بندی کل کالاها</a>
                    </Link>
                </div>
                <div className='responsive_nav_store'>
                    <Link href='/'>
                        <a>فروشگاه لوازم جانبی سگ</a>
                    </Link>
                </div>
                <div className='responsive_nav_contact_us'>
                    <Link href='/'>
                        <a>تماس با ما</a>
                    </Link>
                </div>
            </div>
            {
                /* Responsive nav */
            }
            {
                /* First nav */
            }
            <nav>
                <div className='first_nav' onMouseEnter={obj.first_nav_dropdown_container_nezhadha_remove}>
                    <div className='first_nav_responsive_grip_icon' onClick={obj.responsive_nav_container_onclick_1}>
                        <i class="fas fa-grip-horizontal"></i>
                    </div>
                    <div className='first_nav_dropdown_title' onMouseEnter={obj.first_nav_dropdown_container_function}>
                        <p>دسته بندی کالاها</p>
                    </div>
                    <div className='first_nav_dropdown_nezhadha_title'>
                        <i class="fas fa-caret-down"></i>
                        <p onMouseEnter={obj.first_nav_dropdown_container_nezhadha}>نژادها</p>
                    </div>
                    <div className='first_nav_icon_3_title'>
                        <Link href='/dogs_list'>
                            <a>لیست کل نژادها</a>
                        </Link>
                    </div>
                    <div className='first_nav_icon_4_title'>
                        <p>فروشگاه لوازم جانبی سگ(در حال راه اندازی)</p>
                    </div>
                    <div className='first_nav_icon_5_title'>
                        <Link href='/contact_us'>
                            <a>تماس با ما</a>
                        </Link>
                    </div>
                    <div className='first_nav_logo'>
                        <Link href='/'>
                            <a>Alborz Dog</a>
                        </Link>
                    </div>
                </div>
            </nav>

            <div className='first_nav_dropdown_container_nezhadha'>
                <div className='first_nav_dropdown_container_nezhadha_items_title_1'>
                    <p>نژاد بزرگ</p>
                </div>
                <div className='first_nav_dropdown_container_nezhadha_items_title_2'>
                    <p>نژاد کوچک</p>
                </div>
                <div className='first_nav_dropdown_container_nezhadha_items_title_3'>
                    <p>نژاد بزرگ</p>
                </div>
                {data.first_nav_dropdown_container_nezhadha.map(first_nav_dropdown_container_nezhadha => <First_nav_dropdown_container_nezhadha data={first_nav_dropdown_container_nezhadha} />)}
            </div>
            {
                /* First nav */
            }
        </Fragment>
    )
}

export default memo(Navbar)