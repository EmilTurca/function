let pac_x = parseInt(1 + Math.random() * 9)
let pac_y = parseInt(1 + Math.random() * 9)
let coin_x = parseInt(1 + Math.random() * 9)
let coin_y = parseInt(1 + Math.random() * 9)
let bomb_x = parseInt(1 + Math.random() * 9)
let bomb_y = parseInt(1 + Math.random() * 9)
let bomb_taken = false
let coin_taken = false
let score = 0
let health = 100
function action() {
    console.log(event.key)
    switch (event.key) {
        case "ArrowUp": pac_y--; break
        case "ArrowRight": pac_x++; break
        case "ArrowDown": pac_y++; break
        case "ArrowLeft": pac_x--; break
    }
    if (pac_x == coin_x && pac_y == coin_y && !coin_taken) {
        score = 10
        coin_taken = true
    } else if (pac_x == bomb_x && pac_y == bomb_y && !bomb_taken) {
        bomb_taken = true
        health -= 20
    } else if (bomb_taken) {
        gameMap.innerHTML += `<div>${x}:${y}</div>`
    } else if(coin_taken) {
        gameMap.innerHTML += `<div>${x}:${y}</div>`
    }
    if (pac_x > 10) {
        pac_x = 1
    } else if (pac_x < 1) {
        pac_x = 10
    }
    if (pac_y > 10) {
        pac_y = 1
    } else if (pac_y < 1) {
        pac_y = 10
    }
    renderMap()
}
function renderMap() {
    gameMap.innerHTML = ``
    for (let y = 1; y <= 10; y++) {
        for (let x = 1; x <= 10; x++) {
            if (x == pac_x && y == pac_y) {
                gameMap.innerHTML += `<div class="pac">${x}:${y}</div>`
            } else if (x == coin_x && y == coin_y) {
                gameMap.innerHTML += `<div class="coin">${x}:${y}</div>`
            } else if (x == bomb_x && y == bomb_y) {
                gameMap.innerHTML += `<div class="bomb">${x}:${y}</div>`
            }
            else {
                gameMap.innerHTML += `<div>${x}:${y}</div>`
            }
        }
    }
    gameScore.innerHTML = `Score: ${score}`
    gameHealth.innerHTML = `Health: ${health}`
}
renderMap()
