/* Check if document is mounted */

if (typeof window === 'object') {
    var index = 0
    var pictures = document.getElementsByClassName("first_carousels_1_item_1_pictures")
    var second_index = 0
    var first_carousels_1_item_2_pictures = document.getElementsByClassName('first_carousels_1_item_2_pictures')
    var third_index = 0
    var first_carousels_1_item_3_pictures = document.getElementsByClassName('first_carousels_1_item_3_pictures')
    var fourth_index = 0
    var second_carousel_items = document.getElementsByClassName('second_carousel_items')
    var fifth_index = 0
    var third_carousel_items = document.getElementsByClassName('third_carousel_items')
    var third_carousel_item_2_items_js_index = 0
    var third_carousel_item_2_items_js = document.getElementsByClassName('third_carousel_item_2_items_js')
    var first_pictures_dogs_js = document.getElementsByClassName('first_pictures_dogs_js')
    var first_pictures_dogs_js_index = 0
    var first_item_remove_grid = document.getElementsByClassName("first_item_remove_grid")
}

/* Check if the dom is mounted */

/* nezhadha dropdown */

function first_nav_dropdown_container_nezhadha() {
    let first_nav_dropdown_container_nezhadha = document.getElementsByClassName('first_nav_dropdown_container_nezhadha')[0]
    first_nav_dropdown_container_nezhadha.style.display = 'grid'

    for (let i = 0; i < first_item_remove_grid.length; i++) {
        first_item_remove_grid[i].addEventListener("mouseover", function () {
            document.getElementsByClassName("active_grid")[0].style.display = 'none'
        })
    }

    document.getElementsByClassName("first_item_display")[0].addEventListener("mouseover", function () {
        document.getElementsByClassName("active_grid")[0].style.display = 'grid'
    })
}

function first_nav_dropdown_container_nezhadha_remove() {
    let drop_down = document.getElementsByClassName('first_nav_dropdown_container_nezhadha')[0];
    drop_down.style.display = 'none'
    document.getElementsByClassName("active_grid")[0].style.display = 'grid'
}

/* nezhadha dropdown */

/* first_carousels_1_item_1_next */

function first_carousels_1_item_1_next() {
    index++
    if (index == pictures.length) {
        index = 0
    }
    for (var i = 0; i < pictures.length; i++) {
        pictures[i].classList.remove("active");
    }
    pictures[index].classList.add("active");
}

function first_carousels_1_item_1_prev() {
    if (index == 0) {
        index = pictures.length
    }
    index--
    for (let i = 0; i < pictures.length; i++) {
        pictures[i].classList.remove('active')
    }
    pictures[index].classList.add('active')
}

/* first_carousels_1_item_1_next */

/* first_carousels_1_item_2 */

function first_carousels_1_item_2_auto() {
    second_index++
    if (second_index == first_carousels_1_item_2_pictures.length) {
        second_index = 0
    }
    for (let i = 0; i < first_carousels_1_item_2_pictures.length; i++) {
        first_carousels_1_item_2_pictures[i].classList.remove('active')
    }
    first_carousels_1_item_2_pictures[second_index].classList.add('active')
}

function first_carousels_1_item_3_auto() {
    third_index++
    if (third_index == first_carousels_1_item_3_pictures.length) {
        third_index = 0
    }
    for (let i = 0; i < first_carousels_1_item_3_pictures.length; i++) {
        first_carousels_1_item_3_pictures[i].classList.remove('active')
    }
    first_carousels_1_item_3_pictures[third_index].classList.add('active')
}

/* first_carousels_1_item_2 */

/* Second carousel */

function second_carousel_next_cover() {
    if (window.innerWidth <= 500) {
        fourth_index++
    }
    else {
        fourth_index = fourth_index + 4
    }
    if (fourth_index == second_carousel_items.length) {
        fourth_index = 0
    }
    if (window.innerWidth <= 500) {
        for (let i = 0; i < second_carousel_items.length; i++) {
            second_carousel_items[i].classList.remove('responsive_first_item_display')
        }
    }
    else {
        for (let i = 0; i < second_carousel_items.length; i++) {
            second_carousel_items[i].classList.remove('active_grid')
        }
    }
    if (window.innerWidth <= 500) {
        second_carousel_items[fourth_index].classList.add('responsive_first_item_display')
    }
    else {
        second_carousel_items[fourth_index].classList.add('active_grid')
        second_carousel_items[fourth_index + 1].classList.add('active_grid')
        second_carousel_items[fourth_index + 2].classList.add('active_grid')
        second_carousel_items[fourth_index + 3].classList.add('active_grid')
    }
}

function second_carousel_prev_cover() {
    if (fourth_index == 0) {
        fourth_index = second_carousel_items.length
    }
    if (window.innerWidth <= 500) {
        for (let i = 0; i < second_carousel_items.length; i++) {
            second_carousel_items[i].classList.remove('responsive_first_item_display')
        }
    }
    else {
        for (let i = 0; i < second_carousel_items.length; i++) {
            second_carousel_items[i].classList.remove('active_grid')
        }
    }
    if (window.innerWidth <= 500) {
        second_carousel_items[fourth_index - 1].classList.add('responsive_first_item_display')
        fourth_index = fourth_index - 1
    }
    else {
        second_carousel_items[fourth_index - 1].classList.add('active_grid')
        second_carousel_items[fourth_index - 2].classList.add('active_grid')
        second_carousel_items[fourth_index - 3].classList.add('active_grid')
        second_carousel_items[fourth_index - 4].classList.add('active_grid')
        fourth_index = fourth_index - 4
    }
}

/* Second carousel */

/* Third carousel */

function third_carousel_item_1_item_1_next_cover() {
    if (window.innerWidth <= 500) {
        fifth_index = fifth_index + 1
    }
    else {
        fifth_index = fifth_index + 4
    }
    if (fifth_index == third_carousel_items.length) {
        fifth_index = 0
    }
    if (window.innerWidth <= 500) {
        for (let i = 0; i < third_carousel_items.length; i++) {
            third_carousel_items[i].classList.remove('responsive_first_item_display')
        }
    }
    else {
        for (let i = 0; i < third_carousel_items.length; i++) {
            third_carousel_items[i].classList.remove('active_grid')
        }
    }

    if (window.innerWidth <= 500) {
        third_carousel_items[fifth_index].classList.add('responsive_first_item_display')
    }
    else {
        third_carousel_items[fifth_index].classList.add('active_grid')
        third_carousel_items[fifth_index + 1].classList.add('active_grid')
        third_carousel_items[fifth_index + 2].classList.add('active_grid')
        third_carousel_items[fifth_index + 3].classList.add('active_grid')
    }
}

function third_carousel_item_1_item_1_prev_cover() {
    if (fifth_index == 0) {
        fifth_index = third_carousel_items.length
    }
    if (window.innerWidth <= 500) {
        for (let i = 0; i < third_carousel_items.length; i++) {
            third_carousel_items[i].classList.remove('responsive_first_item_display')
        }
    }
    else {
        for (let i = 0; i < third_carousel_items.length; i++) {
            third_carousel_items[i].classList.remove('active_grid')
        }
    }
    if (window.innerWidth <= 500) {
        third_carousel_items[fifth_index - 1].classList.add('responsive_first_item_display')
        fifth_index = fifth_index - 1
    }
    else {
        third_carousel_items[fifth_index - 1].classList.add('active_grid')
        third_carousel_items[fifth_index - 2].classList.add('active_grid')
        third_carousel_items[fifth_index - 3].classList.add('active_grid')
        third_carousel_items[fifth_index - 4].classList.add('active_grid')
        fifth_index = fifth_index - 4
    }

}

function third_carousel_item_2_items_js_index_auto() {
    third_carousel_item_2_items_js_index++
    if (third_carousel_item_2_items_js_index == third_carousel_item_2_items_js.length) {
        third_carousel_item_2_items_js_index = 0
    }
    if (window.innerWidth <= 500) {
        for (let i = 0; i < third_carousel_item_2_items_js.length; i++) {
            third_carousel_item_2_items_js[i].classList.remove('responsive_first_item_display')
        }
    }
    else {
        for (let i = 0; i < third_carousel_item_2_items_js.length; i++) {
            third_carousel_item_2_items_js[i].classList.remove('active_grid')
        }
    }
    if (window.innerWidth <= 500) {
        third_carousel_item_2_items_js[third_carousel_item_2_items_js_index].classList.add('responsive_first_item_display')
    }
    else {
        third_carousel_item_2_items_js[third_carousel_item_2_items_js_index].classList.add('active_grid')
    }
}

/* Third carousel */

/* Scroll up */

function scroll_up_function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Scroll up */

/* first_pictures_next_container */

function first_pictures_next_container() {
    first_pictures_dogs_js_index++
    if (first_pictures_dogs_js_index >= first_pictures_dogs_js.length) {
        first_pictures_dogs_js_index = 0
    }
    for (let i = 0; i < first_pictures_dogs_js.length; i++) {
        first_pictures_dogs_js[i].style.display = 'none'
    }
    first_pictures_dogs_js[first_pictures_dogs_js_index].style.display = 'block'
}

function first_pictures_prev_container() {
    if (first_pictures_dogs_js_index == 0) {
        first_pictures_dogs_js_index = first_pictures_dogs_js.length
    }
    for (let i = 0; i < first_pictures_dogs_js.length; i++) {
        first_pictures_dogs_js[i].style.display = 'none'
    }
    first_pictures_dogs_js_index--
    first_pictures_dogs_js[first_pictures_dogs_js_index].style.display = 'block'
}

/* first_pictures_next_container */

/* Responsive */

/* Responsive nav */

function responsive_nav_container_onclick_1() {
    let responsive_nav_container_1 = document.getElementsByClassName('responsive_nav_container')[0]
    if (responsive_nav_container_1.style.display == 'grid') {
        responsive_nav_container_1.style.display = 'none'
    }
    else {
        responsive_nav_container_1.style.display = 'grid'
    }
    if (window.location.pathname == '/contact_us') {
        let contact_us_map_address_container = document.getElementsByClassName('contact_us_map_address_container')[0]
        contact_us_map_address_container.style.display = 'none'
    }
}

function responsive_nav_close_btn_function() {
    let responsive_nav_container_1 = document.getElementsByClassName('responsive_nav_container')[0]
    responsive_nav_container_1.style.display = 'none'
    if (window.location.pathname == '/contact_us') {
        let contact_us_map_address_container = document.getElementsByClassName('contact_us_map_address_container')[0]
        contact_us_map_address_container.style.display = 'grid'
    }
}

function responsive_nav_close_btn_function_clean_up() {
    let responsive_nav_container_1 = document.getElementsByClassName('responsive_nav_container')[0]
    responsive_nav_container_1.style.display = 'none'
}

/* Responsive nav */

/* Responsive */

export {
    first_nav_dropdown_container_nezhadha,
    first_nav_dropdown_container_nezhadha_remove,
    first_carousels_1_item_1_next,
    first_carousels_1_item_1_prev,
    second_carousel_next_cover,
    second_carousel_prev_cover,
    third_carousel_item_1_item_1_prev_cover,
    third_carousel_item_1_item_1_next_cover,
    scroll_up_function,
    first_pictures_next_container,
    first_pictures_prev_container,
    responsive_nav_container_onclick_1,
    responsive_nav_close_btn_function,
    first_carousels_1_item_2_auto,
    first_carousels_1_item_3_auto,
    third_carousel_item_2_items_js_index_auto,
    responsive_nav_close_btn_function_clean_up
}