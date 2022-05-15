import { memo, Fragment } from 'react'
const Dog_history = (props) => {
    return (
        <Fragment>
            <div className='history_container'>
                <div className='history_item'>
                    <div className='history_item_title'>
                        <p>تاریخچه</p>
                    </div>
                    <div className='history_item_content'>
                        <p>{props.props.data.history_item_content}</p>
                    </div>
                    <div className='history_item_picture'>
                        <img src={props.props.data.history_item_picture_src} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Dog_history)