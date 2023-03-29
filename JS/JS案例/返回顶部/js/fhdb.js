window.addEventListener('load', function() {
    let cbl = document.querySelector('.cbl')
    let sp = document.querySelector('span')
    let s = document.querySelector('#S')
    let z = document.querySelector('#Z')
    let cblTop = cbl.offsetTop
    let Stop = s.offsetTop - 30
    let Ztop = z.offsetTop - 30

    var flag = true

    document.addEventListener('scroll', function () {
        if(window.pageYOffset >= Stop){
            cbl.style.position = 'fixed'
            cbl.style.top = (cblTop - Stop) + 'px'
        }else {
            cbl.style.position = 'absolute'
            cbl.style.top = cblTop + 'px'
        }
        if(window.pageYOffset >= Ztop){
            sp.style.display = 'inline'
        }else {
            sp.style.display = 'none'
        }
    })

    sp.addEventListener('click', () => {
        if(flag){
            flag = false
            animate(this.window, 0, () => {
                flag = true
            })
        }
    })
})