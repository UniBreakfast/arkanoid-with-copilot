import { updateSize } from "./canvas/updateSize.js"

export {assignListeners}

function assignListeners({ctx}) {
  onresize = () => updateSize(ctx)
}
