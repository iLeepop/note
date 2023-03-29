window.addEventListener('load', function() {
    let dh = document.querySelector('.dh')
    let nav_list = dh.querySelectorAll('li')
    let q = document.querySelector('.track-q')
    let alist = dh.querySelectorAll('a')
    for(let i = 0; i < nav_list.length; i++){
        nav_list[i].setAttribute('index', i)
        nav_list[i].addEventListener('mouseenter', function() {
            count = this.getAttribute('index')
            animate(q, this.offsetLeft)
        })

        nav_list[i].addEventListener('mouseleave', function() {
            let index = dh.querySelector('.current-li')
            animate(q, index.offsetLeft)
        })

        nav_list[i].addEventListener('click', function() {
            for(let i = 0; i < nav_list.length; i++){
                nav_list[i].children[0].className = 'not-active-a'
                nav_list[i].className = ''
            }
            nav_list[i].children[0].className = 'active-a'
            nav_list[i].className = 'current-li'

        })
    }
})