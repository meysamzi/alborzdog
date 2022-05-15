import { memo, Fragment } from 'react'
import UseWindowSize from './Responsive_check'

const Second_carousel = (props) => {
    const size = UseWindowSize()
    return (
        <Fragment>
            <div className={size.width <= 500 ? props.data.responsive_first_item_display + ' ' + 'second_carousel_items' : props.data.active_grid_class + ' ' + 'second_carousel_items'}>
                <div className='second_carousel_item_1_picture'></div>
                <div className='second_carousel_item_1_title'>
                    <p>{props.data.second_carousel_item_1_title}</p>
                </div>
                <div className='second_carousel_item_1_discount_cover'>
                    <div className='second_carousel_item_1_discount_cover_number'>
                        <p>{props.data.second_carousel_item_1_discount_cover_number}</p>
                    </div>
                </div>
                <div className='second_carousel_item_1_discount_number'>
                    <p>{props.data.second_carousel_item_1_discount_number}</p>
                </div>
                <div className='second_carousel_item_1_number'>
                    <p>{props.data.second_carousel_item_1_number}</p>
                </div>
                <div className='second_carousel_item_1_clock_icon'>
                    <i class="far fa-clock"></i>
                </div>
                <div className='second_carousel_item_1_clock_timer'>
                    <p>{props.data.second_carousel_item_1_clock_timer}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Second_carousel)