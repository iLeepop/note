window.addEventListener('load', function () {
    let main = document.querySelector('.main')
    let ar = document.querySelector('.arrow-r')
    let al = document.querySelector('.arrow-l')
    main.addEventListener('mouseenter', function() {
        ar.style.display = 'block'
        al.style.display = 'block'
    })
    main.addEventListener('mouseleave', function() {
        ar.style.display = 'none'
        al.style.display = 'none'
    })
    let lbt_ul = main.querySelector('.img-roll')
    let olist = main.querySelector('.olist')
    let imglist = lbt_ul.children
    for (let i = 0; i < imglist.length; i++) {
        let li = document.createElement('li')
        olist.appendChild(li)
    }
    olist.children[0].className = 'current-ol'
})