import { memo, Fragment } from 'react'
import UseWindowSize from './Responsive_check'

const Third_caoursel_offer = (props) => {
    const size = UseWindowSize()
    return (
        <Fragment>
            <div className={size.width <= 500 ? 'third_carousel_item_2_items_js' + ' ' + props.data.responsive_first_item_display : 'third_carousel_item_2_items_js' + ' ' + props.data.active_grid_class}>
                <div className='third_carousel_item_2_title_1'>
                    <p>{props.data.third_carousel_item_2_title_1}</p>
                </div>
                <div className='third_carousel_item_2_underline_1'></div>
                <div className='third_carousel_item_2_picture_1'></div>
                <div className='third_carousel_item_2_content_1'>
                    <p>{props.data.third_carousel_item_2_content_1}</p>
                </div>
                <div className='third_carousel_item_2_discount_cover'>
                    <div className='third_carousel_item_2_discount_cover_number'>
                        <p>{props.data.third_carousel_item_2_discount_cover_number}</p>
                    </div>
                </div>
                <div className='third_carousel_item_2_discount_number'>
                    <p>{props.data.third_carousel_item_2_price}</p>
                </div>
                <div className='third_carousel_item_2_price'>
                    <p>{props.data.third_carousel_item_2_price}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Third_caoursel_offer)