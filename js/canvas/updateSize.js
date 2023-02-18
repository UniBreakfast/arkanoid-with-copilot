export { updateSize }

import { clear } from './clear.js'

function updateSize(ctx) {
  const {canvas} = ctx

  canvas.width = innerWidth
  canvas.height = innerHeight

  clear(ctx)
}
