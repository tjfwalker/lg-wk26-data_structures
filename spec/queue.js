import chai, { expect } from 'chai'
import Queue from '../src/queue'

describe('Queue', function () {
  'use strict'

  it('exists', function () {
    expect(Queue).to.be.a('function')
  })

  beforeEach( function () {
    this.queue = new Queue
  })

  context('isEmpty()', function () {
    it('exists', function () {
      expect(this.queue.isEmpty).to.be.a( 'function' )
    })

    it('returns true when the queue is empty', function () {
      expect(this.queue.isEmpty()).to.be.true
    })

    it('returns false when the queue is not empty', function () {
      this.queue.enqueue( 'foo' )

      expect(this.queue.isEmpty()).to.be.false
    })
  })

  context('length()', function () {
    it('exists', function () {
      expect(this.queue.length).to.be.a( 'function' )
    })

    it('returns the number of elements in the queue', function () {
      expect(this.queue.length()).to.equal( 0 )

      this.queue.enqueue( 'foo' )
      expect(this.queue.length()).to.equal( 1 )

      this.queue.enqueue( 'bar' )
      expect(this.queue.length()).to.equal( 2 )

      this.queue.dequeue()
      expect(this.queue.length()).to.equal( 1 )

      this.queue.enqueue( 'baz' )
      expect(this.queue.length()).to.equal( 2 )
    })
  })
})
