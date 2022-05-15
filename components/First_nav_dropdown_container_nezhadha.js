import { memo, Fragment } from 'react'
import Link from 'next/link'

const First_nav_dropdown_container_nezhadha = (props) => {
    return (
        <Fragment>
            <div className={props.data.first_nav_dropdown_container_nezhadha_titles + ' ' + props.data.first_item_remove_grid + ' ' + props.data.first_item_display}>
                <Link href={props.data.href}>
                    <a>{props.data.href_content}</a>
                </Link>
            </div>
            <div className={props.data.first_nav_dropdown_container_nezhadha_titles_content + ' ' + props.data.active_grid}>
                <div className='first_nav_dropdown_container_nezhadha_content_content_1'>
                    <p>{props.data.first_nav_dropdown_container_nezhadha_content_content_1}</p>
                </div>
                <div className='first_nav_dropdown_container_nezhadha_content_content_2'>
                    <p>{props.data.first_nav_dropdown_container_nezhadha_content_content_2}</p>
                </div>
                <div className='first_nav_dropdown_container_nezhadha_content_content_3'>
                    <p>{props.data.first_nav_dropdown_container_nezhadha_content_content_3}</p>
                </div>
                <div className='first_nav_dropdown_container_nezhadha_content_content_4'>
                    <p>{props.data.first_nav_dropdown_container_nezhadha_content_content_4}</p>
                </div>
                <div className='first_nav_dropdown_container_nezhadha_content_content_5'>
                    <p>{props.data.first_nav_dropdown_container_nezhadha_content_content_5}</p>
                </div>
                <div className='first_nav_dropdown_container_nezhadha_content_content_6'>
                    <p>{props.data.first_nav_dropdown_container_nezhadha_content_content_6}</p>
                </div>
                <div className='first_nav_dropdown_container_nezhadha_content_content_7'>
                    <p>{props.data.first_nav_dropdown_container_nezhadha_content_content_7}</p>
                </div>
                <div className={props.data.first_nav_dropdown_container_nezhadha_pic_1}></div>
                <div className={props.data.first_nav_dropdown_container_nezhadha_pic_2}></div>
                <div className={props.data.first_nav_dropdown_container_nezhadha_pic_3}></div>
            </div>
        </Fragment>
    )
}

export default memo(First_nav_dropdown_container_nezhadha)