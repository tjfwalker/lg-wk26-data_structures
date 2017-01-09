import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Stack', function () {
  'use strict'

  beforeEach( function () {
    this.pringles = new Stack
  })

  it('exists', function () {
    expect(Stack).to.be.a('function')
  })

  context('push()', function () {
    it('exists', function () {
      expect(this.pringles.push).to.be.a( 'function' )
    })

    it('increases the stack size by one', function () {
      expect(this.pringles.push( 'foo' )).to.satisfy( () => {
        return this.pringles.length() === 1
      })
    })

    it('returns undefined', function () {
      expect(this.pringles.push()).to.be.undefined
    })
  })

  context('pop()', function () {
    it('exists', function () {
      expect(this.pringles.pop).to.be.a( 'function' )
    })

    context('when the stack is empty', function () {
      it('does not change the stack size', function () {
        expect(this.pringles.length()).to.equal( 0 )
      })

      it('returns null', function () {
        expect(this.pringles.pop()).to.be.null
      })
    })

    context('when the stack is not empty', function () {
      beforeEach(function () {
        this.pringles.push( 'foo' )
        this.pringles.push( 'bar' )
        this.pringles.push( 'bar' )
      })

      it('decreases the stack size by one', function () {
        expect(this.pringles.pop()).to.satisfy( () => {
          return this.pringles.length() === 2
        })
      })

      it('returns elements in the revers order of push()es, one at a time', function () {
        expect(this.pringles.pop()).to.equal( 'bar' )
        expect(this.pringles.pop()).to.equal( 'bar' )
        expect(this.pringles.pop()).to.equal( 'foo' )
        expect(this.pringles.pop()).to.be.null
      })
    })
  })

  context('peek()', function () {
    it('exists', function () {
      expect(this.pringles.peek).to.be.a( 'function' )
    })

    it('returns null when the stack is empty', function () {
      expect(this.pringles.peek()).to.be.null
    })

    it('returns the last push()ed element when the stack is not empty', function () {
      this.pringles.push( 'foo' )

      expect(this.pringles.peek()).to.equal( 'foo' )
    })
  })

  context('isEmpty()', function () {
    it('exists', function () {
      expect(this.pringles.isEmpty).to.be.a( 'function' )
    })

    it('returns true when the stack is empty', function () {
      expect(this.pringles.isEmpty()).to.be.true
    })

    it('returns false when the stack is not empty', function () {
      this.pringles.push( 'foo' )

      expect(this.pringles.isEmpty()).to.be.false
    })
  })

  context('length()', function () {
    it('exists', function () {
      expect(this.pringles.pop).to.be.a( 'function' )
    })

    it('returns the number of elements in the stack', function () {
      expect(this.pringles.length()).to.equal( 0 )

      this.pringles.push( 'foo' )
      expect(this.pringles.length()).to.equal( 1 )

      this.pringles.push( 'bar' )
      expect(this.pringles.length()).to.equal( 2 )

      this.pringles.pop()
      expect(this.pringles.length()).to.equal( 1 )

      this.pringles.push( 'baz' )
      expect(this.pringles.length()).to.equal( 2 )
    })
  })
})
