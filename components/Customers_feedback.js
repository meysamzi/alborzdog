import { memo, Fragment } from 'react'

import UseWindowSize from './Responsive_check'

const Customers_feedback = (props) => {
    const size = UseWindowSize()
    return (
        <Fragment>
            <div className={size.width <= 500 ? 'customers_feedback_item_1' + ' ' + props.data.responsive_first_item_display : 'customers_feedback_item_1' + ' ' + props.data.active_grid_class}>
                <div className='customers_feedback_item_1_quote'>
                    <i class="fas fa-quote-right"></i>
                </div>
                <div className='customers_feedback_item_1_content'>
                    <p>
                        {props.data.customers_feedback_item_1_content}
                    </p>
                </div>
                <div className='customers_feedback_item_1_stars_container'>
                    <div className='customers_feedback_item_1_stars'>
                        <i class="fas fa-star"></i>
                    </div>
                    <div className='customers_feedback_item_1_stars'>
                        <i class="fas fa-star"></i>
                    </div>
                    <div className='customers_feedback_item_1_stars'>
                        <i class="fas fa-star"></i>
                    </div>
                    <div className='customers_feedback_item_1_stars'>
                        <i class="fas fa-star"></i>
                    </div>
                    <div className='customers_feedback_item_1_stars'>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div className='customers_feedback_item_1_picture'></div>
                <div className='customers_feedback_item_1_user_icon'>
                    <i class="fas fa-user"></i>
                </div>
                <div className='customers_feedback_item_1_user_name'>
                    <p>{props.data.customers_feedback_item_1_user_name}</p>
                </div>
                <div className='customers_feedback_item_1_location_icon'>
                    <i class="fas fa-map-marker"></i>
                </div>
                <div className='customers_feedback_item_1_location_name'>
                    <p>{props.data.customers_feedback_item_1_location_name}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Customers_feedback)