const fs = require('fs')
const data = fs.readFileSync('./save.json')
const playersList = JSON.parse(data)
class Game {
    static register(name) {
        if (!name) {
            console.log(`Welcome to AdventureGame, please input register [playerName]`)
        } else {
            let flag = true
            for (var i = 0; i < playersList.players.length; i++) {
                if (playersList.players[i].name === name) {
                    flag = false
                    break
                }
            }
            if (flag) {
                playersList.players.push({ name: name, level: 0 })
                const data2 = JSON.stringify(playersList)
                fs.writeFileSync("./save.json", data2)
                console.log(`Welcome new player ${playersList.players[i].name}!`)
            } else {
                console.log(`Already registered: ${playersList.players[i].name} lv. ${playersList.players[i].level}`)
            }
        }
    }
    static login(name) {
        let flag = false
        for (var i = 0; i < playersList.players.length; i++) {
            if (playersList.players[i].name === name) {
                flag = true
                playersList.currentPlayer.name = playersList.players[i].name
                playersList.currentPlayer.level = playersList.players[i].level
                const data2 = JSON.stringify(playersList)
                fs.writeFileSync("./save.json", data2)
                break
            }
        }
        if (!flag) {
            console.log('Player not found, you may register new player or login using another name.')
        } else {
            console.log(`Login success, welcome ${playersList.currentPlayer.name} lv. ${playersList.currentPlayer.level}`)
        }
    }
    static fight() {
        if (playersList.currentPlayer.name) {
            let random = Math.floor(Math.random() * 4) - 1
            if (random === -1) {
                console.log(`${playersList.currentPlayer.name} lost fight, lost 1 level`)
                playersList.currentPlayer.level -= 1
                const data2 = JSON.stringify(playersList)
                fs.writeFileSync("./save.json", data2)
            } else if (random === 0) {
                console.log(`${playersList.currentPlayer.name} survived fight, nothing was gained`)
                playersList.currentPlayer.level += 0
                const data2 = JSON.stringify(playersList)
                fs.writeFileSync("./save.json", data2)
            } else if (random === 1) {
                console.log(`${playersList.currentPlayer.name} won fight, gained 1 level`)
                playersList.currentPlayer.level += 1
                const data2 = JSON.stringify(playersList)
                fs.writeFileSync("./save.json", data2)
            } else if (random === 2) {
                console.log(`${playersList.currentPlayer.name} won fight, gained 2 level`)
                playersList.currentPlayer.level += 2
                const data2 = JSON.stringify(playersList)
                fs.writeFileSync("./save.json", data2)
            } else {
                console.log(`${playersList.currentPlayer.name} won fight, gained 3 level`)
                playersList.currentPlayer.level += 3
                const data2 = JSON.stringify(playersList)
                fs.writeFileSync("./save.json", data2)
            }
        } else if (playersList.currentPlayer.name === null) {
            console.log('You have logout, please login to start the game!')
        }
    }

    static checkPoint() {
        if (playersList.currentPlayer.name) {
            console.log(`${playersList.currentPlayer.name} your level now is ${playersList.currentPlayer.level}`)
        } else if (playersList.currentPlayer.name === null) {
            console.log('You have logout, please login to start the game!')
        }
    }

    static save() {
        let flag = false
        for (var i = 0; i < playersList.players.length; i++) {
            if (playersList.players[i].name === playersList.currentPlayer.name) {
                flag = true
                playersList.players[i].name = playersList.currentPlayer.name
                playersList.players[i].level = playersList.currentPlayer.level
                const data2 = JSON.stringify(playersList)
                fs.writeFileSync("./save.json", data2)
                break
            }
        }
        if (flag) {
            console.log(`${playersList.currentPlayer.name} saved progress.`)
        }
    }
    static logout() {
        if (playersList.currentPlayer.name) {
            console.log(`${playersList.currentPlayer.name} your level now is ${playersList.currentPlayer.level}`)
            console.log(`${playersList.currentPlayer.name} has quit game.`)
            playersList.currentPlayer.name = null
            playersList.currentPlayer.level = null
            const data2 = JSON.stringify(playersList)
        } else if (playersList.currentPlayer.name === null) {
            console.log('You have logged out, please login to start the game')
        }
    }

}
module.exports = Game