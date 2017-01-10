'use strict'

export default class Queue {
  constructor() {
    this.data = []
  }

  isEmpty() {
    if (this.length() > 0) return false
    return true
  }

  length() {
    return this.data.length
  }
}
