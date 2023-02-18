export { clear }

function clear(ctx) {
  const {width, height} = ctx.canvas
  
  ctx.fillStyle = '#202124'
  ctx.fillRect(0, 0, width, height)
}
