export { buildGameBoard }

import { updateSize } from './canvas/updateSize.js'
import { clear } from './canvas/clear.js'

function buildGameBoard() {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const board = {ctx, canvas}

  body.append(canvas)
  
  updateSize(ctx)
  clear(ctx)

  return board
}
