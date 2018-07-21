let n
initialise();
let timer = setInterval(() => {
    slide(n)
    n++
}, 1500)


document.addEventListener('visibilitychange', function (x) {
    if (document.hidden) {
        window.clearInterval(timer)
    } else {
        timer = setInterval(() => {
            slide(n)
            n++
        }, 1500)
    }
})














//encapsulation
function initialise(x) {
    n = 1
    $('.images>img:nth-child(1)').addClass('center')
    $('.images>img:nth-child(2)').addClass('right')
    $('.images>img:nth-child(3)').addClass('left')
}
// judge函数才是精髓，通过一个变量控制多种动作！极大简化了代码！
var judge = function (x) {
    if (x > 3) {
        x = x % 3
        if (x === 0) { x = 3 }
    }
    return x
}
var slide = function (n) {
    $(`.images>img:nth-child(${judge(n)})`).removeClass('center').addClass('left');
    $(`.images>img:nth-child(${judge(n + 1)})`).removeClass('right').addClass('center');
    $(`.images>img:nth-child(${judge(n + 2)})`).removeClass('left').addClass('right');
}









