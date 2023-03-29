window.addEventListener('load', function () {
    let main = document.querySelector('.main') //主要展示框
    let ar = document.querySelector('.arrow-r') //右指向
    let al = document.querySelector('.arrow-l') //左指向
    let lbt_ul = main.querySelector('.img-roll') //轮播图
    let olist = main.querySelector('.olist') //轮播图小圆点列表

    let imglist = lbt_ul.children //轮播图的图片列表
    let larCount = 0 //ar以及al的左右翻页的计数器
    let step = main.clientWidth //步长，在这里指一张图片的宽度 clientWidth不计边框
    //小圆点列表
    let circleList = olist.children

    //节流阀判断值
    var animeFlag = true

    //循环实现轮播图下方小圆点的自动生成
    for (let i = 0; i < imglist.length; i++) {
        let li = document.createElement('li')
        li.setAttribute('index', i)
        olist.appendChild(li)
        li.className = 'not-current-ol'
        li.addEventListener('click', () => {
            olistClassChange(olist.children, li.getAttribute('index'), 'current-ol', 'not-current-ol')
            // for(let i = 0; i < olist.children.length; i++){
            //     olist.children[i].className = 'not-current-ol'
            // }
            // li.className = 'current-ol'
            larCount = li.getAttribute('index')
            animate(lbt_ul, - step * larCount)
        })
    }

    //封装排它去类名的方法
    function olistClassChange(list, currentIndex, onClassName, notClassName) {
        for (let i = 0; i < list.length; i++) {
            list[i].className = notClassName
        }
        list[currentIndex].className = onClassName
    }

    //封装的节流阀方法
    function animeFlagChange() {
        animeFlag = true
    }

    //设置第一个圆点类
    olist.children[0].className = 'current-ol'

    let cloneFirstImg = imglist[0].cloneNode(true)
    lbt_ul.appendChild(cloneFirstImg)

    ar.addEventListener('click', () => {
        if(animeFlag){
            animeFlag = false
            if(larCount < circleList.length & larCount >= 0){
                larCount++
                animate(lbt_ul, - larCount * step, animeFlagChange)
                olistClassChange(circleList, larCount == circleList.length ? 0 : larCount, 'current-ol', 'not-current-ol')
            }else{
                lbt_ul.style.left = '0px'
                larCount = 1
                // larCount++
                animate(lbt_ul, - larCount * step, animeFlagChange)
                olistClassChange(circleList, larCount, 'current-ol', 'not-current-ol')
            }
        }
    })

    al.addEventListener('click', () => {
        if(animeFlag){
            animeFlag = false
            if(larCount < circleList.length + 1 & larCount >= 1){
                larCount --
                animate(lbt_ul, - larCount * step, animeFlagChange)
                olistClassChange(circleList, larCount, 'current-ol', 'not-current-ol')
            }else{
                lbt_ul.style.left = - circleList.length*step + 'px'
                larCount = circleList.length - 1
                // larCount--
                animate(lbt_ul, - larCount * step, animeFlagChange)
                olistClassChange(circleList, larCount, 'current-ol', 'not-current-ol')
            }
        }
    })

    //自动播放图片
    let lbtInterval = this.setInterval(() => {
        ar.click()
    }, 3000)

    main.addEventListener('mouseenter', function() {
        ar.style.display = 'block'
        al.style.display = 'block'
        olist.style.display = 'block'
        clearInterval(lbtInterval)
        lbtInterval = null
    })
    main.addEventListener('mouseleave', function() {
        ar.style.display = 'none'
        al.style.display = 'none'
        olist.style.display = 'none'
        lbtInterval = setInterval(() => {
            ar.click()
        }, 3000)
    })
})