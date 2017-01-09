'use strict'

export default class Stack {
  constructor() {
    this.data = []
  }

  push( element ) {
    this.data.push( element )
  }

  pop() {
    let top = this.data.splice( -1, 1 )[0]
    
    return typeof top === 'undefined' ? null : top
  }

  peek() {
    let length = this.data.length 

    return length <= 0 ? null : this.data[ length - 1 ]
  }

  isEmpty() {
    if (this.data.length > 0 ) return false
    return true
  }

  length() {
    return this.data.length
  }
}
