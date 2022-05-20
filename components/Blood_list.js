import { memo, Fragment } from 'react'
import Link from 'next/link'

const Blood_list = (props) => {
    return (
        <Fragment>
            <div className='blood_list_item_1_dogs_list'>
                <div className='pic'>
                    <img src={props.data.blood_list_pictures_src} />
                </div>
                <div className='title'>
                    <Link href={props.data.blood_list_items_link_1}>
                        <a>{props.data.blood_list_items_title_1}</a>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Blood_list)