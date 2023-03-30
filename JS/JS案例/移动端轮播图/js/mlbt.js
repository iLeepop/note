window.addEventListener('load', function() {
    let main = document.querySelector('.main')
    let lbt = document.querySelector('.lbt')
    let olist = document.querySelector('.olist')
    let lbt_list = lbt.children
    let circle = olist.children

    let step = main.clientWidth
    var index = 0
    var interval = this.setInterval(function() {
        index++
        var translateX = - index * step
        lbt.style.transition = 'all .3s'
        lbt.style.transform = 'translateX(' + translateX + 'px)'
    }, 2000)

    lbt.addEventListener('transitionend', function() {
        if(index == 3){
            index = 0
            lbt.style.transition = 'none'
            var translateX = - index * step
            lbt.style.transform = 'translateX(' + translateX + 'px)'   
        }else if(index == -1){
            index = 2
            lbt.style.transition = 'none'
            var translateX = - index * step
            lbt.style.transform = 'translateX(' + translateX + 'px)'   
        }
        olist.querySelector('.current-ol').classList.remove('current-ol')
        circle[index].classList.add('current-ol')
    })

    let touchX = 0
    let moveX = 0
    let lbtX = 0
    let flag = false

    lbt.addEventListener('touchstart', function(e) {
        clearInterval(interval)
        touchX = e.targetTouches[0].pageX
        lbtX = this.offsetLeft
    })

    lbt.addEventListener('touchmove', function(e) {
        moveX = e.targetTouches[0].pageX - touchX
        var translateX = - index * step + moveX
        lbt.style.transition = 'none'
        this.style.transform = 'translate(' + translateX + 'px)'
        flag = true
        e.preventDefault()
    })

    lbt.addEventListener('touchend', function(e) {
        if(flag){
            if(Math.abs(moveX) > 150){
                if(moveX > 150){
                    index--
                }else{
                    index++
                }
                lbt.style.transition = 'all .3s'
                var translateX = - index * step
                lbt.style.transform = 'translateX(' + translateX + 'px)'   
            }else{
                lbt.style.transition = 'all .3s'
                var translateX = - index * step
                lbt.style.transform = 'translateX(' + translateX + 'px)'   
            }
        }
        clearInterval(interval)
        interval = setInterval(function() {
            index++
            var translateX = - index * step
            lbt.style.transition = 'all .3s'
            lbt.style.transform = 'translateX(' + translateX + 'px)'
        }, 2000)
    })
})