import { memo, Fragment } from 'react'
import Link from 'next/link'

const First_carousels_1_item_1 = (props) => {
    return (
        <Fragment>
            <div className={'first_carousels_1_item_1_pictures' + ' ' + (props.data.active == 'active' ? props.data.active : '')}>
                <Link href={props.data.href}>
                    <a><img src={props.data.src} alt={props.data.alt} /></a>
                </Link>
            </div>
        </Fragment>
    )
}

export default memo(First_carousels_1_item_1)