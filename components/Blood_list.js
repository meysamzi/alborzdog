import { memo, Fragment } from 'react'
import Link from 'next/link'

const Blood_list = (props) => {
    return (
        <Fragment>
            <div className='blood_list_item_1_dogs_list'>
                <div className={props.data.blood_list_item_1_picture}></div>
                <div className='blood_list_items_title_1'>
                    <Link href={props.data.blood_list_items_link_1}>
                        <a>{props.data.blood_list_items_title_1}</a>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Blood_list)