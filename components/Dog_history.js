import { memo, Fragment } from 'react'
const Dog_history = (props) => {
    return (
        <Fragment>
            <div className='history_container'>
                <div className='history_col_1'>
                    <div>
                        <p>تاریخچه</p>
                    </div>
                    <div>
                        <p>{props.props.data.history_item_content}</p>
                    </div>
                </div>
                <div className='history_col_2'>
                    <div>
                        <img src={props.props.data.history_item_picture_src} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Dog_history)