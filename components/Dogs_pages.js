import { memo, useEffect, Fragment } from 'react';

import Head from 'next/head'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Ranking from './Ranking'
import Blood_list from './Blood_list'
import Dog_attitude from './Dog_attitude'
import Dog_order_contact from './Dog_order_contact'
import Dog_keeping from './Dog_keeping'
import Dog_shape from './Dog_shape'
import Dog_history from './Dog_history'
import Dog_introduction from './Dog_introduction'
import First_pictures from './First_pictures'

import * as obj from '../components/Js_functions'

import { blood_list } from '../data/data'

const Dogs_pages = (props) => {
    useEffect(() => {
        obj.scroll_up_function()
        return () => {
            obj.responsive_nav_close_btn_function_clean_up()
            obj.first_nav_dropdown_container_nezhadha_remove()
        }
    });
    return (
        <Fragment>
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="هر آنچه نیاز دارید با بهترین قیمت و کیفیت میتوانید از فروشگاه البرز داگ بخرید." />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content={props.data.head_content_1} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{props.data.head_title}</title>
                <link rel="icon" href="/images/alborz_dog_logo_favi_icon.PNG" />
            </Head>
            <Navbar />
            {
                /* first pictures */
            }
            <div className='first_pictures_container'>
                <First_pictures props={props} />
                <div className='first_pictures_next_container' onClick={obj.first_pictures_next_container}>
                    <span>&#9001;</span>
                </div>
                <div className='first_pictures_prev_container' onClick={obj.first_pictures_prev_container}>
                    <span>&#9002;</span>
                </div>
            </div>
            {
                /* first pictures */
            }
            {
                /* Dog introduction */
            }
            <Dog_introduction props={props} />
            {
                /* Dog introduction */
            }
            {
                /* dog attitude */
            }
            <Dog_attitude props={props} />
            {
                /* dog attitude */
            }
            {
                /* Dog order contact */
            }
            <Dog_order_contact props={props} />
            {
                /* Dog order contact */
            }
            {
                /* Ranking */
            }
            <Ranking />
            {
                /* Ranking */
            }
            {
                /* Keeping */
            }
            <Dog_keeping props={props} />
            {
                /* Keeping */
            }
            {
                /* Shape */
            }
            <Dog_shape props={props} />
            {
                /* Shape */
            }
            {
                /* History */
            }
            <Dog_history props={props} />
            {
                /* History */
            }
            {
                /* Blood list */
            }
            <div className='blood_list_container_dogs_list'>
                {blood_list.map(blood_list => <Blood_list data={blood_list} />)}
            </div>
            {
                /* Blood list */
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

export default memo(Dogs_pages)