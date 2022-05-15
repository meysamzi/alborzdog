import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact_us() {
    // useEffect(() => {
    //     obj.scroll_up_function()
    //     return () => {
    //         obj.responsive_nav_close_btn_function_clean_up()
    //         obj.first_nav_dropdown_container_nezhadha_remove()
    //     }
    // });
    return (
        <>
            <Head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="هر آنچه نیاز دارید با بهترین قیمت و کیفیت میتوانید از فروشگاه البرز داگ بخرید." />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="فروشگاه سگ,خرید سگ,آدرس البرز داگ" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>آدرس فروشگاه خرید و فروش سگ البرزداگ(alborzdog)</title>
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
                /*
                Contact_us_body
                */
            }
            <div className='contact_us_body_container'>
                <div className='contact_us_body_item'>
                    <div className='contact_us_body_item_title_1'>
                        <p>تماس با ما</p>
                    </div>
                    <div className='contact_us_body_item_title_1_content'>
                        <p>
                            فروشگاه البرز داگ به صورت شبانه روزی آماده پاسخگویی شما مشتریان میباشد.
                        </p>
                    </div>
                    <div className='contact_us_body_item_location_logo'>
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div className='contact_us_body_item_location_title'>
                        <p>کرج - محمدشهر</p>
                    </div>
                    <div className='contact_us_body_item_phone_logo'>
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div className='contact_us_body_item_phone_title'>
                        <p>09359580206</p>
                    </div>
                    <div className='contact_us_body_item_social_media_logo'>
                        <i class="fas fa-hashtag"></i>
                    </div>
                    <div className='contact_us_body_item_social_media_instagram'>
                        <i class="fab fa-instagram"></i>
                    </div>
                    <div className='contact_us_body_item_social_media_telegram'>
                        <i class="fab fa-telegram"></i>
                    </div>
                    <div className='contact_us_body_item_email_logo'>
                        <i class="fas fa-mail-bulk"></i>
                    </div>
                    <div className='contact_us_body_item_email_title'>
                        <p>alborzdog@gmail.com</p>
                    </div>
                </div>
            </div>
            {
                /*
                Contact_us_body
                */
            }
            {
                /*
                Contact_us_map
                */
            }
            <div className='contact_us_map_container'>
                <div className='contact_us_map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51811.935066294056!2d50.872277552921226!3d35.744759339749656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8d95e3780e8bfb%3A0xa63f135aa95148a4!2sMohammad%20Shahr%2C%20Alborz%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1634759442160!5m2!1sen!2s" allowFullScreen='' loading="lazy"></iframe>
                </div>
                <div className='contact_us_map_address_container'>
                    <div className='contact_us_map_address_logo'>
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div className='contact_us_map_address_title'>
                        <p>آدرس پانسیون</p>
                    </div>
                    <div className='contact_us_map_address_content'>
                        <p>البرز-محمدشهر-جنب آتش نشانی</p>
                    </div>
                </div>
                <div className='contact_us_map_phone_container'>
                    <div className='contact_us_map_address_logo'>
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div className='contact_us_map_address_title'>
                        <p>شماره تماس</p>
                    </div>
                    <div className='contact_us_map_address_content'>
                        <p>09359580206</p>
                    </div>
                </div>
                <div className='contact_us_map_email_container'>
                    <div className='contact_us_map_address_logo'>
                        <i class="fas fa-mail-bulk"></i>
                    </div>
                    <div className='contact_us_map_address_title'>
                        <p>ایمیل</p>
                    </div>
                    <div className='contact_us_map_address_content'>
                        <p>alborzdog@gmail.com</p>
                    </div>
                </div>
            </div>
            {
                /* Contact_us_map
                */
            }
            {
                /* Footer */
            }
            <Footer />
            {
                /* Footer */
            }
        </>
    )
}

export default Contact_us