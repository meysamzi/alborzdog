import { memo, Fragment } from 'react'
import Link from 'next/link'

const First_offer = (props) => {
    return (
        <Fragment>
            <div className='first_offer_pictures'>
                <Link href={props.data.href}>
                    <a><img src={props.data.src} alt={props.data.alt} /></a>
                </Link>
            </div>
        </Fragment>
    )
}

export default memo(First_offer)