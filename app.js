

import { buildGameBoard } from './js/gameBoard.js'
import { addBlocks } from './js/blocks.js'
import { addPlank } from './js/plank.js'
import { addBall } from './js/ball.js'
import { assignListeners } from './js/listeners.js'

const board = buildGameBoard()

addBlocks(board)
addPlank(board)
addBall(board)
assignListeners(board)
