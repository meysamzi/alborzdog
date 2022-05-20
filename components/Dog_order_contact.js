import { memo, Fragment } from 'react'
const Dog_order_contact = (props) => {
    return (
        <Fragment>
            <div className='dog_order_contact_container'>
                <div className='dog_order_contact_content_wrap'>
                    <div className='dog_order_contact_title_1'>
                        <p>{props.props.data.dog_order_contact_title_1}</p>
                    </div>
                    <div className='dog_order_contact_title_2'>
                        <p>فقط کافیه در واتس اپ با شماره <span>09359580206</span> در تماس باشی تا مشاور ما برات بهترینش رو پیدا کنه!</p>
                    </div>
                    <div className='dog_order_contact_whatsapp_container'>
                        <button>09359580206</button>
                    </div>
                </div>
                <div className='dog_order_contact_picture'>
                    <img src={props.props.data.dog_order_contact_picture_src} />
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Dog_order_contact)