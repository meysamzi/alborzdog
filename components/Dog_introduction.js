import { memo, Fragment } from 'react'
const Dog_introduction = (props) => {
    return (
        <Fragment>
            <div className='dog_introduction_container'>
                <div className='dog_introduction_picture'>
                    <img src={props.props.data.dog_introduction_picture} alt={props.props.data.dog_introduction_picture_alt} />
                </div>
                <div className='dog_introduction_wrap_content'>
                    <div className='dog_introduction_title_1'>
                        <p>{props.props.data.dog_introduction_title_1}</p>
                    </div>
                    <div className='dog_introduction_title_2'>
                        <p>{props.props.data.dog_introduction_title_2}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Dog_introduction)