import mitt from 'mitt'

const emitter = mitt()

export default function () {
  return emitter
}