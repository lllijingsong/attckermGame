export default {
  bind (el, binding, vNode) {
    // console.log(el, binding)
    const _v = binding.value
    const li = el.children[_v.ind]
    li.className += ` ${ _v.activeClass }`
  },
  update (el, binding, vNode) {
    // console.log(el, binding)
    const _v = binding.value
    const _o = binding.oldValue

    const oLi = el.children[_o.ind]
    oLi.className = `${_o.className}`
    const li = el.children[_v.ind]
    li.className += ` ${ _v.activeClass }`

  }
}
