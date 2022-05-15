import { memo, Fragment } from 'react'

import UseWindowSize from "./Responsive_check"

const Dogs_introduction = (props) => {
    const size = UseWindowSize()
    return (
        <Fragment>
            <div className={size.width <= 500 ? 'dogs_introduction_item_1' + ' ' + props.data.responsive_first_item_display : 'dogs_introduction_item_1' + ' ' + props.data.active_grid_class}>
                <div className='dogs_introduction_item_1_picture'></div>
                <div className='dogs_introduction_item_1_dog_name'>
                    <h1>{props.data.dogs_introduction_item_1_dog_name}</h1>
                </div>
                <div className='dogs_introduction_item_1_underline'></div>
                <div className='dogs_introduction_item_1_content'>
                    <p>
                        {props.data.dogs_introduction_item_1_content}
                    </p>
                </div>
                <div className='dogs_introduction_item_1_button'>
                    <button type='button'>{props.data.dogs_introduction_item_1_button}</button>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Dogs_introduction)
