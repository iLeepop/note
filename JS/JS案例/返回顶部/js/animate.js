function animate(obj, target, callBack) { //callBack添加的回调函数
    clearInterval(obj.interval)
    obj.interval = setInterval(() => {
        if(obj.pageYOffset == target){
            clearInterval(obj.interval)
            callBack && callBack() //简单写法
        }
        let rate = ((target - obj.pageYOffset)/10) //缓动动画的核心算法，(target - start)/10
        rate = rate > 0 ? Math.ceil(rate) : Math.floor(rate) //按照数字的正负判断向下还是向上取整
        obj.scroll(0, obj.pageYOffset + rate)
    }, 30)
}