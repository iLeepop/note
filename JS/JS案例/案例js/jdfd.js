window.addEventListener('load', function() {
    var imb = document.querySelector('.img-box')
    var bb = document.querySelector('.big-box')
    var bg = document.querySelector('.img-bg')
    imb.addEventListener('mousemove', function(e) {
        bb.style.display = 'block'
        bg.style.display = 'block'
        var x = (e.pageX - imb.offsetLeft-2) - bg.offsetWidth/2
        var y = (e.pageY - imb.offsetTop-2) - bg.offsetHeight/2
        var bs = bb.offsetWidth/bg.offsetWidth
        var ibs = imb.offsetWidth/bg.offsetWidth
        var maxX = imb.offsetWidth - 2 - bg.offsetWidth
        var maxY = imb.offsetHeight - 2 - bg.offsetHeight
        if(x < 0){
            x = 0
        }else if(x > maxX){
            x = maxX
        }
        if(y < 0){
            y = 0
        }else if(y > maxY){
            y = maxY
        }
        bg.style.left = x + 'px'
        bg.style.top = y + 'px'
        bb.style.backgroundSize = ibs*100 + '%'
        bb.style.backgroundPositionX = -bs*x + 'px'
        bb.style.backgroundPositionY = -bs*y + 'px'
    })
    imb.addEventListener('mouseout', function() {
        bb.style.display = 'none'
        bg.style.display = 'none'
    })
})