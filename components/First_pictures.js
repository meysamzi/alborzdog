import { memo, Fragment } from 'react'
const First_pictures = (props) => {
    return (
        <Fragment>
            <div className='first_pictures_picture_1 first_pictures_dogs_js active'>
                <img src={props.props.data.first_pictures_picture_1_src} />
            </div>
            <div className='first_pictures_picture_2 first_pictures_dogs_js'>
                <img src={props.props.data.first_pictures_picture_2_src} />
            </div>
            <div className='first_pictures_picture_3 first_pictures_dogs_js'>
                <img src={props.props.data.first_pictures_picture_3_src} />
            </div>
        </Fragment>
    )
}

export default memo(First_pictures)