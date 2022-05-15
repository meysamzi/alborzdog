import { memo, useEffect, useRef, Fragment } from 'react'

const Dog_shape = (props) => {
    const shape_item_title_number_1 = useRef()
    const shape_item_title_number_2 = useRef()
    const shape_item_title_number_3 = useRef()
    const shape_item_title_number_4 = useRef()
    const shape_item_title_number_5 = useRef()
    const shape_item_title_number_6 = useRef()
    const shape_item_content_number_1 = useRef()
    const shape_item_content_number_2 = useRef()
    const shape_item_content_number_3 = useRef()
    const shape_item_content_number_4 = useRef()
    const shape_item_content_number_5 = useRef()
    const shape_item_content_number_6 = useRef()

    let shape_items_titles = [
        shape_item_title_number_1,
        shape_item_title_number_2,
        shape_item_title_number_3,
        shape_item_title_number_4,
        shape_item_title_number_5,
        shape_item_title_number_6
    ]

    let shape_items_contents = [
        shape_item_content_number_1,
        shape_item_content_number_2,
        shape_item_content_number_3,
        shape_item_content_number_4,
        shape_item_content_number_5,
        shape_item_content_number_6
    ]

    const shape_item_number_1_container = () => {
        for (let i = 0; i < shape_items_contents.length; i++) {
            shape_items_contents[i].current.style.display = 'none'
            shape_items_titles[i].current.style.display = 'none'
        }
        shape_items_contents[0].current.style.display = 'block'
        shape_items_titles[0].current.style.display = 'block'
    }
    const shape_item_number_2_container = () => {
        for (let i = 0; i < shape_items_contents.length; i++) {
            shape_items_contents[i].current.style.display = 'none'
            shape_items_titles[i].current.style.display = 'none'
        }
        shape_items_contents[1].current.style.display = 'block'
        shape_items_titles[1].current.style.display = 'block'
    }
    const shape_item_number_3_container = () => {
        for (let i = 0; i < shape_items_contents.length; i++) {
            shape_items_contents[i].current.style.display = 'none'
            shape_items_titles[i].current.style.display = 'none'
        }
        shape_items_contents[2].current.style.display = 'block'
        shape_items_titles[2].current.style.display = 'block'
    }
    const shape_item_number_4_container = () => {
        for (let i = 0; i < shape_items_contents.length; i++) {
            shape_items_contents[i].current.style.display = 'none'
            shape_items_titles[i].current.style.display = 'none'
        }
        shape_items_contents[3].current.style.display = 'block'
        shape_items_titles[3].current.style.display = 'block'
    }
    const shape_item_number_5_container = () => {
        for (let i = 0; i < shape_items_contents.length; i++) {
            shape_items_contents[i].current.style.display = 'none'
            shape_items_titles[i].current.style.display = 'none'
        }
        shape_items_contents[4].current.style.display = 'block'
        shape_items_titles[4].current.style.display = 'block'
    }
    const shape_item_number_6_container = () => {
        for (let i = 0; i < shape_items_contents.length; i++) {
            shape_items_contents[i].current.style.display = 'none'
            shape_items_titles[i].current.style.display = 'none'
        }
        shape_items_contents[5].current.style.display = 'block'
        shape_items_titles[5].current.style.display = 'block'
    }

    useEffect(() => {
        if (props.props.data.shape_item_picture_src !== '') {
            shape_item_title_number_1.current.style.display = 'block'
            shape_item_content_number_1.current.style.display = 'block'
        }
    }, [])

    return (
        <Fragment>
            {props.props.data.shape_item_picture_src !== ''
                &&
                <div className='shape_container'>
                    <div className='shape_item'>
                        <div className='shape_item_picture'>
                            <img src={props.props.data.shape_item_picture_src} />
                        </div>
                        <div className='shape_item_number_1_container' onMouseEnter={shape_item_number_1_container}>
                            <div className='shape_item_number_1_number'>
                                <p>1</p>
                            </div>
                        </div>
                        <div className='shape_item_number_2_container' onMouseEnter={shape_item_number_2_container}>
                            <div className='shape_item_number_2_number'>
                                <p>2</p>
                            </div>
                        </div>
                        <div className='shape_item_number_3_container' onMouseEnter={shape_item_number_3_container}>
                            <div className='shape_item_number_3_number'>
                                <p>3</p>
                            </div>
                        </div>
                        <div className='shape_item_number_4_container' onMouseEnter={shape_item_number_4_container}>
                            <div className='shape_item_number_4_number'>
                                <p>4</p>
                            </div>
                        </div>
                        <div className='shape_item_number_5_container' onMouseEnter={shape_item_number_5_container}>
                            <div className='shape_item_number_5_number'>
                                <p>5</p>
                            </div>
                        </div>
                        <div className='shape_item_number_6_container' onMouseEnter={shape_item_number_6_container}>
                            <div className='shape_item_number_6_number'>
                                <p>6</p>
                            </div>
                        </div>
                        <div className='shape_item_title_number_1' ref={shape_item_title_number_1}>
                            <p>ظاهر عمومی</p>
                        </div>
                        <div className='shape_item_content_number_1' ref={shape_item_content_number_1}>
                            <p>{props.props.data.shape_item_content_number_1}</p>
                        </div>
                        <div className='shape_item_title_number_2 shape_item_title_number_1' ref={shape_item_title_number_2}>
                            <p>سر</p>
                        </div>
                        <div className='shape_item_content_number_2 shape_item_content_number_1' ref={shape_item_content_number_2}>
                            <p>{props.props.data.shape_item_content_number_2}</p>
                        </div>
                        <div className='shape_item_title_number_3 shape_item_title_number_1' ref={shape_item_title_number_3}>
                            <p>بدن</p>
                        </div>
                        <div className='shape_item_content_number_3 shape_item_content_number_1' ref={shape_item_content_number_3}>
                            <p>{props.props.data.shape_item_content_number_3}</p>
                        </div>
                        <div className='shape_item_title_number_4 shape_item_title_number_1' ref={shape_item_title_number_4}>
                            <p>نیم تنه جلویی</p>
                        </div>
                        <div className='shape_item_content_number_4 shape_item_content_number_1' ref={shape_item_content_number_4}>
                            <p>{props.props.data.shape_item_content_number_4}</p>
                        </div>
                        <div className='shape_item_title_number_5 shape_item_title_number_1' ref={shape_item_title_number_5}>
                            <p>پوشش</p>
                        </div>
                        <div className='shape_item_content_number_5 shape_item_content_number_1' ref={shape_item_content_number_5}>
                            <p>{props.props.data.shape_item_content_number_5}</p>
                        </div>
                        <div className='shape_item_title_number_6 shape_item_title_number_1' ref={shape_item_title_number_6}>
                            <p>نیم تنه عقبی</p>
                        </div>
                        <div className='shape_item_content_number_6 shape_item_content_number_1' ref={shape_item_content_number_6}>
                            <p>{props.props.data.shape_item_content_number_6}</p>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default memo(Dog_shape)