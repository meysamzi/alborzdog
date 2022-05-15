import { memo, Fragment } from 'react'
import UseWindowSize from './Responsive_check'

const Third_caoursel = (props) => {
    const size = UseWindowSize()
    return (
        <Fragment>
            <div className={size.width <= 500 ? 'third_carousel_items' + ' ' + props.data.responsive_first_item_display : props.data.active_grid_class + ' ' + 'third_carousel_items'}>
                <div className='third_carousel_item_1_item_1_picture'></div>
                <div className='third_carousel_item_1_item_1_content'>
                    <p>{props.data.third_carousel_item_1_item_1_content}</p>
                </div>
                <div className='third_carousel_item_1_item_1_price_cover'>
                    <div className='third_carousel_item_1_item_1_price_cover_discount'>
                        <p>{props.data.third_carousel_item_1_item_1_price_cover_discount}</p>
                    </div>
                </div>
                <div className='third_carousel_item_1_item_1_discount_price'>
                    <p>{props.data.third_carousel_item_1_item_1_price_cover_discount}</p>
                </div>
                <div className='third_carousel_item_1_item_1_price'>
                    <p>{props.data.third_carousel_item_1_item_1_price_cover_discount}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Third_caoursel)