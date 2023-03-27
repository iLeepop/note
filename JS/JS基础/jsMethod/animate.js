function animate(obj, target, callBack) { //callBack添加的回调函数
    clearInterval(obj.interval)
    obj.interval = setInterval(() => {
        if(obj.offsetLeft == target){
            clearInterval(obj.interval)
            if(callBack){ //判断是否有回调函数
                callBack()
            }
        }
        let rate = ((target - obj.offsetLeft)/10) //缓动动画的核心算法，(target - start)/10
        rate = rate > 0 ? Math.ceil(rate) : Math.floor(rate) //按照数字的正负判断向下还是向上取整
        obj.style.left = obj.offsetLeft + rate + 'px'
    }, 30)
}