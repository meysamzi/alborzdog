import { memo, Fragment } from 'react'
const Dog_attitude = (props) => {
    return (
        <Fragment>
            <div className='dog_attitude_container'>
                <div className='dog_attitude_item'>
                    <div className='dog_attitude_picture'>
                        <img src={props.props.data.dog_attitude_picture_src} />
                    </div>
                    <div className='dog_attitude_attitude_title'>
                        <p>خصوصیت های اخلاقی:</p>
                    </div>
                    <div className='dog_attitude_attitude_content'>
                        <p>{props.props.data.dog_attitude_attitude_content}</p>
                    </div>
                    <div className='dog_attitude_tall'>
                        <p>{props.props.data.dog_attitude_tall}</p>
                    </div>
                    <div className='dog_attitude_weight'>
                        <p>{props.props.data.dog_attitude_weight}</p>
                    </div>
                    <div className='dog_attitude_longevity'>
                        <p>{props.props.data.dog_attitude_longevity}</p>
                    </div>
                    <div className='dog_attitude_category'>
                        <p>{props.props.data.dog_attitude_category}</p>
                    </div>
                    <div className='dog_attitude_content'>
                        <p>{props.props.data.dog_attitude_content}</p>
                    </div>
                    <div className='dog_attitude_item_footer_container'>
                        <div className='dog_attitude_item_footer_content_1'>
                            <p>{props.props.data.dog_attitude_item_footer_content_1}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Dog_attitude)