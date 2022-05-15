import { useEffect, Fragment } from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import First_carousels_1_item_1 from '../components/First_carousels_1_item_1'
import First_carousels_1_item_2 from '../components/First_carousels_1_item_2'
import First_carousels_1_item_3 from '../components/First_carousels_1_item_3'
import Second_carousel from '../components/Second_carousel'
import Third_caoursel from '../components/Third_carousel'
import Third_caoursel_offer from '../components/Third_carousel_offer'
import Dogs_introduction from '../components/Dogs_introduction'
import Dogs_offer_2 from '../components/Dogs_offer_2'
import Customers_feedback from '../components/Customers_feedback'
import Footer from '../components/Footer'

import * as data from '../data/data'

import * as obj from '../components/Js_functions'

function Home() {
    useEffect(() => {
        obj.scroll_up_function()
        var first = setInterval(obj.first_carousels_1_item_2_auto, 2000)
        var first_2 = setInterval(obj.first_carousels_1_item_3_auto, 4000)
        var first_3 = setInterval(obj.third_carousel_item_2_items_js_index_auto, 3000)
        var first_4 = setInterval(obj.fourth_carousel_item_2_items_js_index_auto, 4000)
        var first_6 = setInterval(obj.sixth_carousel_item_2_items_js_index_auto, 4000)
        return () => {
            clearInterval(first)
            clearInterval(first_2)
            clearInterval(first_3)
            clearInterval(first_4)
            clearInterval(first_6)
            obj.responsive_nav_close_btn_function_clean_up()
            obj.first_nav_dropdown_container_nezhadha_remove()
        }
    }, [])
    return (
        <Fragment>
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="هر آنچه نیاز دارید با بهترین قیمت و کیفیت میتوانید از فروشگاه البرز داگ بخرید." />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="فروشگاه سگ,خرید سگ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>فروشگاه خرید و فروش سگ البرز داگ(alborz dog)</title>
                <link rel="icon" href="/images/alborz_dog_logo_favi_icon.PNG" />
            </Head>
            {
                /* Navbar */
            }
            <Navbar />
            {
                /* Navbar */
            }
            {
                /* First carousel */
            }
            <div className='first_carousels_1' onMouseEnter={obj.first_nav_dropdown_container_nezhadha_remove}>
                <div className='first_carousels_1_item_1'>
                    {data.first_carousels_1_item_1.map(first_carousels_1_item_1 => <First_carousels_1_item_1 data={first_carousels_1_item_1} />)}
                    <span className='first_carousels_1_item_1_next' onClick={obj.first_carousels_1_item_1_next}>&#9001;</span>
                    <span className='first_carousels_1_item_1_prev' onClick={obj.first_carousels_1_item_1_prev}>&#9002;</span>
                </div>
                <div className='first_carousels_1_item_2'>
                    {data.first_carousels_1_item_2.map(first_carousels_1_item_2 => <First_carousels_1_item_2 data={first_carousels_1_item_2} />)}
                </div>
                <div className='first_carousels_1_item_3'>
                    {data.first_carousels_1_item_3.map(first_carousels_1_item_3 => <First_carousels_1_item_3 data={first_carousels_1_item_3} />)}
                </div>
            </div>
            {
                /* First carousel */
            }
            {
                /* Second carousel */
            }
            <div className='second_carousel_container'>
                <div className='second_carousel_container_for_items'>
                    <div className='second_carousel_incredible_offer_picture'></div>
                    {data.second_carousel.map(second_carousel => <Second_carousel data={second_carousel} />)}
                </div>
                <div className='second_carousel_next_cover' onClick={obj.second_carousel_next_cover}>
                    <span className='second_carousel_next_button'>&#9001;</span>
                </div>
                <div className='second_carousel_prev_cover' onClick={obj.second_carousel_prev_cover}>
                    <span className='second_carousel_prev_button'>&#9002;</span>
                </div>
            </div>
            {
                /* Second carousel */
            }
            {
                /* Third carousel */
            }
            <div className='third_carousel_container'>
                <div className='third_carousel_item_1_container'>
                    <div className='third_carousel_item_1_title_1'>
                        <p>{data.third_caoursel[0].third_carousel_item_1_title_1}</p>
                    </div>
                    <div className='third_carousel_item_1_title_2'>
                        <p>{data.third_caoursel[0].third_carousel_item_1_title_2}</p>
                    </div>
                    {data.third_caoursel.map(third_caoursel => <Third_caoursel data={third_caoursel} />)}
                </div>
                <div className='third_carousel_item_2_container'>
                    {data.third_caoursel_offer.map(third_caoursel_offer => <Third_caoursel_offer data={third_caoursel_offer} />)}
                </div>
                <div className="third_carousel_item_1_item_1_next_cover" onClick={obj.third_carousel_item_1_item_1_next_cover}>
                    <span className='third_carousel_item_1_item_1_next_button'>&#9001;</span>
                </div>
                <div className='third_carousel_item_1_item_1_prev_cover' onClick={obj.third_carousel_item_1_item_1_prev_cover}>
                    <span className='third_carousel_item_1_item_1_prev_button'>&#9002;</span>
                </div>
            </div>
            {
                /* Third carousel */
            }
            {
                /* Second offer */
            }
            <div className='second_offer_container'>
                {data.dogs_offer_2.map(dogs_offer_2 => <Dogs_offer_2 data={dogs_offer_2} />)}
            </div>
            {
                /* Second offer */
            }
            {
                /* dog Introduction */
            }
            <div className='dogs_introduction_container'>
                <div className='dogs_introduction_title'>
                    <h1>معرفی کل نژادهای سگ</h1>
                </div>
                {data.dogs_introduction.map(dogs_introduction => <Dogs_introduction data={dogs_introduction} />)}
            </div>
            {
                /* dog Introduction */
            }
            {
                /* third offer */
            }
            <div className='second_offer_container'>
                {data.dogs_offer_2.map(dogs_offer_2 => <Dogs_offer_2 data={dogs_offer_2} />)}
            </div>
            {
                /* third offer */
            }
            {
                /* customers feedback */
            }
            <div className='customers_feedback_container'>
                <div className='customers_feedback_title'>
                    <h1>نظرات مشتریان البرز داگ</h1>
                </div>
                {data.customers_feedback.map(customers_feedback => <Customers_feedback data={customers_feedback} />)}
            </div>
            {
                /* customers feedback */
            }
            {
                /* Footer */
            }
            <Footer />
            {
                /* Footer */
            }
        </Fragment>
    );
}

export default Home
