let timeout;
let timeinterval;

function intialitem(item1, item2, obj1, obj2) {
    $(item1).text(obj1)
    $(item2).text(obj2)
}

function dropWater(elm, item, classname, efft, obj1, obj2) {
    $(item).text(obj1)
    $(elm).addClass(classname)
    timeout = setTimeout(function () {
        $(efft).show()
        setTimeout(function () {
            $(efft).hide()
        }, 300)
        $(item).text(obj2)
        setTimeout(function () {
            $(elm).removeClass(classname)
            $(item).text('')
        }, 2300)
    }, 2000)

}
// 65
$(document).ready(function () {
    intialitem('.wat', '.splash', '💧', '💦')
    
    timeinterval = setInterval(() => {
        clearTimeout(timeout)
        dropWater('.water', '.wat', 'Awater', '.splash', '💧', '💵') 
    }, 4400)
})