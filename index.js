"use strict";
const Game = require('./game.js')
const [command, ...data] = process.argv.slice(2)

if (command === 'register') {
  Game.register(data[0])
} else if (command === 'login') {
  Game.login(data[0])
} else if (command === 'fight') {
  Game.fight()
} else if (command === 'check') {
  Game.checkPoint()
} else if (command === 'save') {
  Game.save()
} else if (command === 'logout') {
  Game.logout()
}