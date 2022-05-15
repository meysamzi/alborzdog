import { memo, Fragment } from 'react'
import Link from 'next/link'

import UseWindowSize from './Responsive_check'

const Dogs_offer_2 = (props) => {
    const size = UseWindowSize()
    return (
        <Fragment>
            <div className={size.width <= 500 ? 'second_offer_picture_1' + ' ' + props.data.responsive_first_item_display : 'second_offer_picture_1' + ' ' + props.data.active_grid_class}>
                <Link href={props.data.href}>
                    <a><img src={props.data.src} alt={props.data.alt} /></a>
                </Link>
            </div>
        </Fragment>
    )
}

export default memo(Dogs_offer_2)