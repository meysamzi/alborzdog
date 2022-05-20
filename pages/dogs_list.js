import { useEffect, Fragment } from 'react';
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Blood_list from '../components/Blood_list';
import Footer from '../components/Footer'

import * as obj from '../components/Js_functions'

import { blood_list } from '../data/data'

function Dogs_list() {
    useEffect(() => {
        return () => {
            obj.responsive_nav_close_btn_function_clean_up()
            obj.first_nav_dropdown_container_nezhadha_remove()
        }
    }, []);
    return (
        <Fragment>
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="هر آنچه نیاز دارید با بهترین قیمت و کیفیت میتوانید از فروشگاه البرز داگ بخرید." />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="فروشگاه سگ,خرید سگ,لیست نژادهای سگ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>لیست نژادهای سگ</title>
                <link rel="icon" href="/images/alborz_dog_logo_favi_icon.PNG" />
            </Head>
            {
                /* Navbar */
            }
            <Navbar />
            {
                /* Dogs list picture header */
            }
            <div className='dogs_list_header_picture'></div>
            {
                /* Dogs list picture header */
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
    )
}

export default Dogs_list