import { memo, Fragment } from 'react'
import Link from 'next/link'
const Footer = () => {
    return (
        <Fragment>
            <div className='footer_container'>
                <div className='footer_social_container'>
                    <div className='footer_social_title'>
                        <p>آدرس ما در شبکه های اجتماعی</p>
                    </div>
                    <div className='footer_social_icons_container'>
                        <div className='footer_social_icons_telegram'>
                            <i class="fab fa-telegram"></i>
                        </div>
                        <div className='footer_social_icons_whatsapp'>
                            <i class="fab fa-whatsapp-square"></i>
                        </div>
                        <div className='footer_social_icons_instagram'>
                            <i class="fab fa-instagram-square"></i>
                        </div>
                        <div className='footer_social_icons_twitter'>
                            <i class="fab fa-twitter-square"></i>
                        </div>
                    </div>
                </div>
                <div className='footer_main_container'>
                    <div className='footer_main_company_title'>
                        <p>درباره البرز داگ</p>
                    </div>
                    <div className='footer_main_company_content'>
                        <p>مجموعه البرز با جمع آوری لیست کاملی از نژادهای سگ آماده خدمت رسانی به مشتریان عزیز میباشد.</p>
                    </div>
                    <div className='footer_main_short_links_1_title'>
                        <p>نژادهای محبوب</p>
                    </div>
                    <div className='footer_main_short_links_1_item_1'>
                        <Link href='/sibriyan_haski'>
                            <a><h1>سیبرین هاسکی</h1></a>
                        </Link>
                    </div>
                    <div className='footer_main_short_links_1_item_2'>
                        <Link href='/pamranin'>
                            <a><h1>پامرانین</h1></a>
                        </Link>
                    </div>
                    <div className='footer_main_short_links_1_item_3'>
                        <Link href='/pug'>
                            <a><h1>پااگ</h1></a>
                        </Link>
                    </div>
                    <div className='footer_main_short_links_2_title'>
                        <p>نژادهای محبوب</p>
                    </div>
                    <div className='footer_main_short_links_2_item_1'>
                        <Link href='/rotwiler'>
                            <a><h1>روتوایلر</h1></a>
                        </Link>
                    </div>
                    <div className='footer_main_short_links_2_item_2'>
                        <Link href='/golden_retriever'>
                            <a><h1>گلدن رتریور</h1></a>
                        </Link>
                    </div>
                    <div className='footer_main_short_links_2_item_3'>
                        <Link href='/beagle'>
                            <a><h1>بیگل</h1></a>
                        </Link>
                    </div>
                    <div className='footer_main_short_links_3_title'>
                        <p>تماس با ما</p>
                    </div>
                    <div className='footer_main_short_links_3_items_container'>
                        <div className='footer_main_short_links_3_items_item_1_icon'>
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div className='footer_main_short_links_3_items_item_1_content'>
                            <p>alborzdog@gmail.com</p>
                        </div>
                        <div className='footer_main_short_links_3_items_item_2_icon'>
                            <i class="fas fa-phone"></i>
                        </div>
                        <div className='footer_main_short_links_3_items_item_2_content'>
                            <p>09359580206</p>
                        </div>
                    </div>
                </div>
                <div className='footer_copy_right_container'>
                    <p>تمامی حقوق سایت متعلق به البرز داگ میباشد.</p>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Footer)