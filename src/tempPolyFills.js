// polyfill for react16 in jsdom testing
const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}

export default raf;