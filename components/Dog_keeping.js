import { memo, useRef, Fragment } from 'react'

const Dog_keeping = (props) => {
    const keeping_item_food_contentt = useRef()
    const keeping_item_comb_content = useRef()
    const keeping_item_training_content = useRef()
    const keeping_item_coaching_content = useRef()
    const keeping_item_health_content = useRef()

    let keeping_items = [keeping_item_food_contentt,
        keeping_item_comb_content,
        keeping_item_training_content,
        keeping_item_coaching_content,
        keeping_item_health_content
    ]

    const keeping_item_food_title_content_block = () => {
        for (let i = 0; i < keeping_items.length; i++) {
            keeping_items[i].current.style.display = 'none'
        }
        keeping_items[0].current.style.display = 'block'
    }
    const keeping_item_comb_title_content_block = () => {
        for (let i = 0; i < keeping_items.length; i++) {
            keeping_items[i].current.style.display = 'none'
        }
        keeping_items[1].current.style.display = 'block'
    }
    const keeping_item_training_title_content_block = () => {
        for (let i = 0; i < keeping_items.length; i++) {
            keeping_items[i].current.style.display = 'none'
        }
        keeping_items[2].current.style.display = 'block'
    }
    const keeping_item_training_coaching_content_block = () => {
        for (let i = 0; i < keeping_items.length; i++) {
            keeping_items[i].current.style.display = 'none'
        }
        keeping_items[3].current.style.display = 'block'
    }
    const keeping_item_training_health_content_block = () => {
        for (let i = 0; i < keeping_items.length; i++) {
            keeping_items[i].current.style.display = 'none'
        }
        keeping_items[4].current.style.display = 'block'
    }
    return (
        <Fragment>
            <div className='keeping_container'>
                <div className='keeping_col_1'>
                    <div>
                        <p>نگهداری</p>
                    </div>
                    <div className='keeping_item_picture'>
                        <img src={props.props.data.keeping_item_picture_src} />
                    </div>
                </div>
                <div className='keeping_col_2'>
                    <div className='keeping_col_2_pictures_container'>
                        <i class="fas fa-hamburger"></i>
                        <i class="fa-solid fa-broom"></i>
                        <i class="fa-solid fa-dumbbell"></i>
                        <i class="fa-solid fa-clock"></i>
                        <i class="fa-solid fa-heart-pulse"></i>
                    </div>
                    <div className='keeping_col_2_titles_container'>
                        <div className='keeping_item_food_title' onMouseEnter={keeping_item_food_title_content_block}>
                            <p>تغذیه</p>
                        </div>
                        <div className='keeping_item_comb_title' onMouseEnter={keeping_item_comb_title_content_block}>
                            <p>آراستن</p>
                        </div>
                        <div className='keeping_item_training_title' onMouseEnter={keeping_item_training_title_content_block}>
                            <p>تمرین</p>
                        </div>
                        <div className='keeping_item_coaching_title' onMouseEnter={keeping_item_training_coaching_content_block}>
                            <p>زمان آموزش</p>
                        </div>
                        <div className='keeping_item_health_title' onMouseEnter={keeping_item_training_health_content_block}>
                            <p>سلامت</p>
                        </div>
                    </div>
                    <div className='keeping_col_2_content_container'>
                        <div className='keeping_item_content_css keeping_item_food_content' ref={keeping_item_food_contentt}>
                            <p>{props.props.data.keeping_item_food_content}</p>
                        </div>
                        <div className='keeping_item_content_css keeping_item_comb_content' ref={keeping_item_comb_content}>
                            <p>{props.props.data.keeping_item_comb_content}</p>
                        </div>
                        <div className='keeping_item_content_css keeping_item_training_content' ref={keeping_item_training_content}>
                            <p>{props.props.data.keeping_item_training_content}</p>
                        </div>
                        <div className='keeping_item_content_css keeping_item_coaching_content' ref={keeping_item_coaching_content}>
                            <p>{props.props.data.keeping_item_coaching_content}</p>
                        </div>
                        <div className='keeping_item_content_css keeping_item_content' ref={keeping_item_health_content}>
                            <p>{props.props.data.keeping_item_health_content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(Dog_keeping)