let i = 0

const button = document.querySelector('button')

button.addEventListener("click", () => {
    const interval = setInterval(() => {
        if (i <= 60) {
            console.log(i++)
        }else{
           clearInterval(interval)
            alert('YOUR MEMORY IS FULL')
        }
    }, 150)
})

/**************************/

const box = document.querySelector('.box')

let positionX = 0
let positionY = 0


const move = () => {
    if (positionX <= 450 && positionY <= 0){
        positionX ++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    }else if(positionX >= 440 && positionY <= 150){
        positionY ++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }else if(positionX >= 0 && positionY >= 150){
        positionX --
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    }else if(positionX <= 0 && positionY >= 0) {
        positionY --
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}
move()

