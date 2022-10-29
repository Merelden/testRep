// prompt("Введите своё имя:")
// let password = prompt("Введите пароль:")
// let repeatPassword = prompt("Потвердите пароль:")
//
// while (password !== repeatPassword) {
//     repeatPassword = prompt("Потвердите пароль:")
// }
//
// alert("Пароль введен успешно")


let block = document.querySelector('.black')
block.style.backgroundColor = 'black'
block.style.margin = '0 auto'
block.innerText = 'Vitalya'
block.style.color = 'white'
block.style.display = 'flex'
block.style.justifyContent = 'center'
block.style.alignItems = 'center'
block.style.fontFamily = 'Noto Sans Wancho'
block.style.fontSize = '32px'
block.style.borderRadius = '100%'

// block.addEventListener('click', () => {
//     vitalya = !vitalya
//     block.style.filter = `invert(${+vitalya})`
//
// })

let vitalya = false;

let palette = document.querySelectorAll('.pallete__color')

for (const paletteElement of palette) {
    paletteElement.addEventListener('click', (e) => {
        block.className = `black ${e.target.classList[1]}`
        console.log(e)
    })
}