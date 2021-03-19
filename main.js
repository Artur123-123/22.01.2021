// const grid = document.getElementsByClassName('grid-item')
// console.log(grid)

// const wynik = document.getElementById('wynik')

// function getnumber(num) {
//     wynik += num
//     wynik = wynik + num
// }
// console.log(getnumber)

// function getnumber(wartość) {
//     console.log(wartość)
// }

function getnumber(num) {
    let inp = document.getElementsByClassName('inp')[0].value
    inp += num
    document.getElementsByClassName('inp')[0].value = inp
}

function getSum() {
    let inp = document.getElementsByClassName('inp')[0].value
    document.getElementsByClassName('inp')[0].value = eval(inp)
}