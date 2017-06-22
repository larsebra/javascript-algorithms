(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["alg"] = factory();
	else
		root["alg"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ListNode = __webpack_require__(2);

var _ListNode2 = _interopRequireDefault(_ListNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class representing a single linked list. It is possible to add last, add first  and remove first.
 * Thus it can be used for a base structure in a stack or a linear queue.
 *
 * +-----+        +-----+        +-----+        +-----+
 * |     |        |     |        |     |        |     |        +----+
 * |  A  +-------->  B  +-------->  C  +-------->  D  +------->+null|
 * |     |        |     |        |     |        |     |        +----+
 * +--+--+        +-----+        +-----+        +--+--+
 *    ^                                            ^
 *    |                                            |
 * +--+--+                                      +--+--+
 * |First|                                      |Last |
 * |Ptr  |                                      |Ptr  |
 * +-----+                                      +-----+
 *
 * @todo make toString
 */
var LinkedList = function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * Symbol.iterator - Make iterable. This is a generator used in for of loop to iterate over the collection
   *
   * @return {Object}  The list object starting at beginning and ending and list size()
   */


  _createClass(LinkedList, [{
    key: Symbol.iterator,
    value: regeneratorRuntime.mark(function value() {
      var iter_next;
      return regeneratorRuntime.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              iter_next = this.first;

            case 1:
              if (!(iter_next !== null)) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return iter_next.getVal();

            case 4:
              iter_next = iter_next.getNext();
              _context.next = 1;
              break;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, value, this);
    })

    /**
     * unshift - adds element first in the list. This will push
     * all elements one step to the right.
     *
     * @param  {Object} element The element to add.
     * @return {Number}         The new size of the list
     */

  }, {
    key: "unshift",
    value: function unshift(element) {
      if (this.size() === 0) {
        this.first = new _ListNode2.default(element, null);
        this.last = this.first;
      } else {
        var newFirst = new _ListNode2.default(element, this.first);
        this.first = newFirst;
      }

      this.length++;
      return this.size();
    }

    /**
     * push - Adds an element last in the list
     *
     * @param  {Object} element The element to add.
     * @return {Number}         The new size of the list
     */

  }, {
    key: "push",
    value: function push(element) {
      if (this.size() === 0) {
        //Just call unshift.
        return this.unshift(element);
      }

      var newLast = new _ListNode2.default(element, null);
      this.last.setNext(newLast);
      this.last = newLast;

      this.length++;
      return this.size();
    }

    /**
     * shift - removes the first element from the list, and returns it.
     * The next element in line becomes the first element in the list.
     * Pushes the list one step to the "right".
     *
     * @return {Object}  The first object in the list.
     * @throws EmptyListError
     */

  }, {
    key: "shift",
    value: function shift() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyListError";
        e.message = "Cannot remove element, list is empty";
        throw e;
      }
      var prevFirst = this.first;
      this.first = prevFirst.getNext();
      prevFirst.setNext(null); //remove references.
      var returnVal = prevFirst.getVal();
      prevFirst.setVal(null); //remove references.
      this.length--;
      return returnVal;
    }

    /**
     * peekFirst - Peeks at the first element in the list and returns it.
     * This does not alter the list in any way.
     *
     * @return {Object}  The first element in the list.
     * @throws EmptyListError
     */

  }, {
    key: "peekFirst",
    value: function peekFirst() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyListError";
        e.message = "Cannot peek, list is empty";
        throw e;
      }
      return this.first.getVal();
    }

    /**
     * peekLast - Peeks at the last element in the list and returns it.
     * This method does not alter the list in anyway
     *
     * @return {type}  description
     * @throws EmptyListError
     */

  }, {
    key: "peekLast",
    value: function peekLast() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyListError";
        e.message = "Cannot peek, list is empty";
        throw e;
      }
      return this.last.getVal();
    }

    /**
     * isEmpty - Check if the list is empty.
     *
     * @return {Boolean}  true if empty, else false.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size() === 0 ? true : false;
    }

    /**
     * size - returns the number of elements in the list
     *
     * @return {Number}  number of elements in the list
     */

  }, {
    key: "size",
    value: function size() {
      return this.length;
    }
  }]);

  return LinkedList;
}();

exports.default = LinkedList;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
@function swap

Swaps two items in the array. This function changes the array.

@param {Array} array - The array that is going to be sorted. The input array is not tampered with or changed in anyway.
@param {Number} index1 - The first element to swap
@param {Number} index2 - The second element to swap
@return void

@author Lars Erik Bratlie <lars00.brat@gmail.com>
**/
function swap(array, index1, index2) {
  if (index1 === index2) {
    return;
  }
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

exports.default = swap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = __webpack_require__(6);

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListNode = function (_Node) {
  _inherits(ListNode, _Node);

  /**
   * constructor - Sets next and value for this node
   *
   * @param  {Object} value value
   * @param  {DoubleLinkedListNode} next  next pointer
   * @return {Void}       nothing
   */
  function ListNode(value, next) {
    _classCallCheck(this, ListNode);

    var _this = _possibleConstructorReturn(this, (ListNode.__proto__ || Object.getPrototypeOf(ListNode)).call(this, value));

    _this.next = null;
    _this.setNext(next);
    return _this;
  }

  /**
   * setNext - sets next element
   *
   * @param  {ListNode} next The next node in the list
   * @return {ListNode}      description
   */


  _createClass(ListNode, [{
    key: "setNext",
    value: function setNext(next) {
      this.next = next;
    }

    /**
     * getNext - returns the next pointer
     *
     * @return {ListNode}  returns the next node in line.
     */

  }, {
    key: "getNext",
    value: function getNext() {
      return this.next;
    }
  }]);

  return ListNode;
}(_Node3.default);

exports.default = ListNode;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DoubleLinkedListNode = __webpack_require__(7);

var _DoubleLinkedListNode2 = _interopRequireDefault(_DoubleLinkedListNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class representing a circular double linked list. List index starts at 0 and goes to
 * length - 1.
 *
 * +----------------------------------------------------------+
 * |   +-----+        +-----+        +-----+        +-----+   |
 * +--->     +-------->     +-------->     +-------->     +---+
 *     |  A  |        |  B  |        |  C  |        |  D  |
 * +---+     <--------+     <--------+     <--------+     <---+
 * |   +-----+        +-----+        +-----+        +-----+   |
 * +------^--------------------------------------------^------+
 *        |                                            |
 *     +--+--+                                      +--+--+
 *     |First|                                      |Last |
 *     |Ptr  |                                      |Ptr  |
 *     +-----+                                      +-----+
 *
 * @todo make toString
 */
var DoubleLinkedList = function () {

  /**
   * constructor - Initializes the structures, makes private
   * variables.
   *
   */
  function DoubleLinkedList() {
    _classCallCheck(this, DoubleLinkedList);

    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /**
   * Set symbols on object, changes the default behaviour.
   * /
   /**
   * Symbol - Make iterable. This is a generator used in for of loop to iterate over the collection
   *
   * @return {Object}  The list object starting at beginning and ending and list size()
   */


  _createClass(DoubleLinkedList, [{
    key: Symbol.iterator,
    value: regeneratorRuntime.mark(function value() {
      var iter_next;
      return regeneratorRuntime.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              iter_next = this.first;

            case 1:
              _context.next = 3;
              return iter_next.getVal();

            case 3:
              iter_next = iter_next.getNext();

            case 4:
              if (iter_next !== this.first) {
                _context.next = 1;
                break;
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, value, this);
    })

    /**
     * unshift - adds element first in the list
     *
     * @param  {Object} element The element to add.
     * @return {Number}         The new size of the list
     */

  }, {
    key: "unshift",
    value: function unshift(element) {
      var newNode = new _DoubleLinkedListNode2.default(element, null, null);

      if (this.size() === 0) {
        //New element points to itself, if list has one element
        newNode.setNext(newNode);
        newNode.setPrev(newNode);

        //First and last references points to the first element,
        //when list has one element
        this.first = newNode;
        this.last = this.first;
      } else {
        //Temp var
        var prevFirst = this.first;

        //Make first pointer to point to new element.
        this.first = newNode;

        //Set references of first and last in list
        prevFirst.setPrev(newNode);
        this.last.setNext(newNode);

        //Set references of new element
        newNode.setNext(prevFirst);
        newNode.setPrev(this.last);
      }

      //Increment number of elements, and return the new size.
      this.length++;
      return this.size();
    }

    /**
     * push - Adds an element last in the list
     *
     * @param  {Object} element The element to add.
     * @return {Number}         The new size of the list
     */

  }, {
    key: "push",
    value: function push(element) {
      var newNode = new _DoubleLinkedListNode2.default(element, null, null);

      if (this.size() === 0) {
        //New element points to itself, if list has one element
        newNode.setNext(newNode);
        newNode.setPrev(newNode);

        //First and last references points to the first element,
        //when list has one element
        this.first = newNode;
        this.last = this.first;
      } else {
        //Temp variable
        var prevLast = this.last;

        //Make first pointer to point to new element.
        this.last = newNode;

        //Set references of first and last in list
        prevLast.setNext(newNode);
        this.first.setPrev(newNode);

        //Set references of new element
        newNode.setPrev(prevLast);
        newNode.setNext(this.first);
      }

      //Increment number of elements, and return the new size.
      this.length++;
      return this.size();
    }

    /**
     * addInPosition - Adds an element in given position. The given index
     * must be within the range of the size(), 0 =< index =< size(), otherwise
     * an error is thrown. One can add an element at last position + one in the
     * list, but it is not possible to add an element at position > one + lastindex.
     * This method does not remove any elements, rather it
     * moves the previous element at index position one step further.
     * In effect, the old element, will have position index + 1, where index is
     * the given index as parameter.
     *
     * Complexity:
     *  -Worstcase: O(n), where n is the index number
     *  -Bestcase: O(n), where n is the index number
     *  -Average: O(n), where n is the index number
     *
     * @param  {Object} element The element to add.
     * @param  {Number} index   The number
     * @return {Number}         The new size, if everything was ok.
     *
     * @throws {RangeError} if given index is out of range.
     * @throws {EmptyListError} if list is empty
     */

  }, {
    key: "addInPosition",
    value: function addInPosition(val, index) {
      if (index > 0 && this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyListError";
        e.message = "Cannot add element at index " + index + ", list is empty";
        throw e;
      }
      if (!(0 <= index && index <= this.size())) {
        var e = new RangeError();
        e.name = "IndexOutOfBoundsError";
        e.message = "Cannot add element in index " + index + ", allowed range s 0 - " + this.size() - 1;
        throw e;
      }

      //If adding in the first position, just call add first
      if (index === 0) {
        return this.unshift(val);
      }

      //If adding in after last position, just call add last
      if (index === this.size()) {
        return this.push(val);
      }

      //Get element at index.
      var oldElementAtPos = this.getAtPosition(index);

      //Set pointer for the new element
      var newElement = new _DoubleLinkedListNode2.default(val, oldElementAtPos.getPrev(), oldElementAtPos);

      //Set the next reference of previous relative to new node.
      oldElementAtPos.getPrev().setNext(newElement);

      //Set pointer of the old element.
      oldElementAtPos.setPrev(newElement);

      //Increment number of elements, and return the new size.
      this.length++;
      return this.size();
    }

    /**
     * getAtPosition - Finds the element at given index position, and returns it.
     * The index values start at 0 and ends at size() - 1. It is ment to be
     * used as a private method.
     *
     * Complexity:
     *  -Worstcase: O(n), where n is the index number
     *  -Bestcase: O(n), where n is the index number
     *  -Average: O(n), where n is the index number
     *
     * @param  {Number} index The given index, must be within bounds.
     * @return {Object}       Element at given position.
     * @throws {RangeError} if given index is < 0 or > size().
     * @throws {EmptyListError} if list is empty.
     */

  }, {
    key: "getAtPosition",
    value: function getAtPosition(index) {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyListError";
        e.message = "Cannot remove element, list is empty";
        throw e;
      }
      if (!(0 <= index && index < this.size())) {
        var e = new RangeError();
        e.name = "IndexOutOfBoundsError";
        e.message = "Cannot add element in index " + index + ", allowed range s 0 - " + this.size() - 1;
        throw e;
      }
      var nextElement = this.first;
      var i = 0;
      while (i < index) {
        nextElement = nextElement.next;
        i++;
      }
      return nextElement;
    }

    /**
     * getValAtPosition - Finds the element at given position, and returns the value.
     * The index values start at 0 and ends at size() - 1.
     *
     * Complexity:
     *  -Worstcase: O(n), where n is the index number
     *  -Bestcase: O(n), where n is the index number
     *  -Average: O(n), where n is the index number
     *
     * @param  {Number} index The given index, must be within bounds.
     * @return {Object}       value at given position.
     * @throws {RangeError} if given index is < 0 or > size().
     */

  }, {
    key: "getValAtPosition",
    value: function getValAtPosition(index) {
      return this.getAtPosition(index).getVal();
    }

    /**
     * shift - removes the first element from the list, and returns it.
     * The next element in line becomes the first element in the list, if there
     * are any elements left.
     *
     * @return {Object}  The first object in the list.
     * @throws {EmptyListError}
     */

  }, {
    key: "shift",
    value: function shift() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyListError";
        e.message = "Cannot remove element, list is empty";
        throw e;
      }

      var prevFirst = this.first;
      var returnVal = prevFirst.getVal();

      //If one element left, just return the value and reset pointers.
      if (this.size() === 1) {
        this.first = null;
        this.last = null;
      } else {
        //Set first to reference next element in line.
        this.first = prevFirst.getNext();

        //Change references of first and last element.
        this.first.setPrev(this.last);
        this.last.setNext(this.first);
      }

      //Remove references
      prevFirst.setNext(null);
      prevFirst.setPrev(null);

      //Decrement size and return value.
      this.length--;
      return returnVal;
    }

    /**
     * pop - removes the last element from the list, and returns it.
     * The previous element of last element becomes the new last element in
     * the list, if there are any elements left.
     *
     * @return {Object}  The last object in the list.
     * @throws {EmptyListError}
     */

  }, {
    key: "pop",
    value: function pop() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyListError";
        e.message = "Cannot remove element, list is empty";
        throw e;
      }

      //If one element left, just return the value and reset pointers.
      if (this.size() === 1) {
        return this.shift();
      }

      var prevLast = this.last;
      var returnVal = prevLast.getVal();

      //Set first to reference next element in line.
      this.last = prevLast.getPrev();

      //Change references of first and last element.
      this.first.setPrev(this.last);
      this.last.setNext(this.first);

      //Remove references
      prevLast.setNext(null);
      prevLast.setPrev(null);

      //Decrement size and return value.
      this.length--;
      return returnVal;
    }

    /**
     * splice - Removes and returns the element at the given index.
     * The given index must be in the bounds of the size() of the list; 0 <= index
     * < size().
     *
     * @param  {Integer} index The index of the element to remove.
     * @return {Object}       The object to remove.
     * @throws {RangeError} If the given index is not in range.
     * @throws {EmptyListError} If list is empty
     */

  }, {
    key: "splice",
    value: function splice(index) {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyListError";
        e.message = "Cannot remove element, list is empty";
        throw e;
      }
      if (!(0 <= index && index < this.size())) {
        var e = new RangeError();
        e.name = "IndexOutOfBoundsError";
        e.message = "Cannot remove element at index " + index + ", must be within bounds. Current allowed range is: 0 - " + this.size() - 1;
        throw e;
      }

      //If removing the first position, just call remove first
      if (index === 0) {
        return this.shift();
      }

      //If removing the last position, just call remove first
      if (index === this.size() - 1) {
        return this.pop();
      }

      //Get element at index.
      var oldElementAtPos = this.getAtPosition(index);
      var returnVal = oldElementAtPos.getVal();

      //Set the next reference of previous relative to new node.
      oldElementAtPos.getPrev().setNext(oldElementAtPos.getNext());
      oldElementAtPos.getNext().setPrev(oldElementAtPos.getPrev());

      //Remove references
      oldElementAtPos.setPrev(null);
      oldElementAtPos.setNext(null);

      //Decrement number of elements, and return the value of the old element.
      this.length--;
      return returnVal;
    }

    /**
     * peekFirst - Peeks at the first element in the list and returns it.
     *  This does not alter the list in any way.
     *
     * @return {Object}  The first element in the list.
     * @throws EmptyListError
     */

  }, {
    key: "peekFirst",
    value: function peekFirst() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyListError";
        e.message = "Cannot peek, list is empty";
        throw e;
      }
      return this.first.getVal();
    }

    /**
     * peekLast - Peeks at the last element in the list and returns it.
     * This method does not alter the list in anyway
     *
     * @return {type}  description
     * @throws EmptyListError
     */

  }, {
    key: "peekLast",
    value: function peekLast() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyListError";
        e.message = "Cannot peek, list is empty";
        throw e;
      }
      return this.last.getVal();
    }

    /**
     * isEmpty - Check if the list is empty.
     *
     * @return {Boolean}  true if empty, else false.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size() === 0 ? true : false;
    }

    /**
     * size - returns the number of elements in the list
     *
     * @return {Number}  number of elements in the list
     */

  }, {
    key: "size",
    value: function size() {
      return this.length;
    }
  }]);

  return DoubleLinkedList;
}();

exports.default = DoubleLinkedList;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RingBuffer = __webpack_require__(8);

var _RingBuffer2 = _interopRequireDefault(_RingBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class representing a queue. It uses an array of given size as base structure.
 * This queues is implemented using the RingBuffer class.
 * It is faster than using Array class native methods(Push and shift) for queueing an enqueueing.
 * There is one limitiation however, the queues size is finite, it has the size of the given input size at initialization,
 * this size is given to the constructor. It is called queue because this is, as for now, the standard
 * linear queue of the lib.
 *
 * @author Lars Erik Bratlie <lars00.brat@gmail.com>
 */
var Queue = function () {
  /**
   * constructor - makes a array as a base structure. The queue becomes as big as the size of the array
   *
   * @param  {Number} number The size of the queue
   */
  function Queue(size) {
    _classCallCheck(this, Queue);

    this.q = new _RingBuffer2.default(size, false);
    this[Symbol.iterator] = this.q[Symbol.iterator].bind(this.q);
  }

  /**
   * enqueue - Adds an element to the end of the queue
   *
   * @param  {Object} item to enqueue
   * @throws {FullQueueError} if queue is full
   * @return {number} The size of the new queue
   */


  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(item) {
      if (this.isFull()) {
        var e = new Error();
        e.name = "FullQueueError";
        e.message = "Cannot enqueue, queue is full";
        throw e;
      }
      return this.q.write(item);
    }

    /**
     * dequeue - dequeues the first item in the queue
     *
     * @return {Object}  The first object in the queue
     * @Throws {EmptyQueueError} if array is empty.
     */

  }, {
    key: "dequeue",
    value: function dequeue() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyQueueError";
        e.message = "Cannot dequeue, queue is empty";
        throw e;
      }
      return this.q.read();
    }

    /**
     * peekFirst - peeks at the first element in line
     *
     * @return {Object}  returns the first element in line.
     * @throws {EmptyQueueError} throws this if queue is empty
     */

  }, {
    key: "peekFirst",
    value: function peekFirst() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyQueueError";
        e.message = "Cannot peek, queue is empty";
        throw e;
      }
      return this.q.peekAtRHdr();
    }

    /**
     * peekLast - peeks at the last element in line
     *
     * @return {Object}  returns the last element in line.
     * @throws {EmptyQueueError} throws this if queue is empty
     */

  }, {
    key: "peekLast",
    value: function peekLast() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyQueueError";
        e.message = "Cannot peek, queue is empty";
        throw e;
      }
      return this.q.peekAtWHdr();
    }

    /**
     * isEmpty - checks if q is empty
     *
     * @return {Boolean}  returns true if it is empty, else false.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.q.isEmpty();
    }

    /**
     * isFull - checks if q is full
     *
     * @return {Boolean}  returns true if it is full, false else
     */

  }, {
    key: "isFull",
    value: function isFull() {
      return this.q.isFull();
    }

    /**
     * size - size of the queue.
     *
     * @return {Number}  Number of elements currently in the queue
     */

  }, {
    key: "size",
    value: function size() {
      return this.q.size();
    }
  }]);

  return Queue;
}();

exports.default = Queue;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aStar = exports.dijkstras = exports.breadthFirstSearch = exports.Mergesort = exports.Quicksort = exports.Selectionsort = exports.Bubblesort = exports.BinarySearch = exports.LinearSearch = exports.RingBuffer = exports.Dequeue = exports.QueueAsList = exports.Queue = exports.DoubleLinkedList = exports.LinkedList = undefined;

var _LinkedList = __webpack_require__(0);

var _LinkedList2 = _interopRequireDefault(_LinkedList);

var _DoubleLinkedList = __webpack_require__(3);

var _DoubleLinkedList2 = _interopRequireDefault(_DoubleLinkedList);

var _Queue = __webpack_require__(4);

var _Queue2 = _interopRequireDefault(_Queue);

var _QueueAsList = __webpack_require__(9);

var _QueueAsList2 = _interopRequireDefault(_QueueAsList);

var _Deque = __webpack_require__(10);

var _Deque2 = _interopRequireDefault(_Deque);

var _Stack = __webpack_require__(11);

var _Stack2 = _interopRequireDefault(_Stack);

var _BinarySearch = __webpack_require__(12);

var _BinarySearch2 = _interopRequireDefault(_BinarySearch);

var _LinearSearch = __webpack_require__(13);

var _LinearSearch2 = _interopRequireDefault(_LinearSearch);

var _Bubblesort = __webpack_require__(14);

var _Bubblesort2 = _interopRequireDefault(_Bubblesort);

var _Selectionsort = __webpack_require__(15);

var _Selectionsort2 = _interopRequireDefault(_Selectionsort);

var _Quicksort = __webpack_require__(16);

var _Quicksort2 = _interopRequireDefault(_Quicksort);

var _Mergesort = __webpack_require__(17);

var _Mergesort2 = _interopRequireDefault(_Mergesort);

var _BFS = __webpack_require__(18);

var _BFS2 = _interopRequireDefault(_BFS);

var _A = __webpack_require__(19);

var _A2 = _interopRequireDefault(_A);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.LinkedList = _LinkedList2.default;
exports.DoubleLinkedList = _DoubleLinkedList2.default;
exports.Queue = _Queue2.default;
exports.QueueAsList = _QueueAsList2.default;
exports.Dequeue = Dequeue;
exports.RingBuffer = RingBuffer;
exports.LinearSearch = _LinearSearch2.default;
exports.BinarySearch = _BinarySearch2.default;
exports.Bubblesort = _Bubblesort2.default;
exports.Selectionsort = _Selectionsort2.default;
exports.Quicksort = _Quicksort2.default;
exports.Mergesort = _Mergesort2.default;
exports.breadthFirstSearch = _BFS2.default;
exports.dijkstras = _BFS2.default;
exports.aStar = aStar;

//Path Finding


/*Linear Sort Algorithms*/


/*Linear Search Algorithms*/
/*Linear Structures*/

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class representing a node
 */
var Node = function () {
  function Node(value) {
    _classCallCheck(this, Node);

    this.setVal(value);
  }

  /**
   * setVal - sets the value of the node
   *
   * @param  {Object} value the value the node is representing
   * @return {void}       none.
   */


  _createClass(Node, [{
    key: "setVal",
    value: function setVal(value) {
      this.value = value;
    }

    /**
     * getVal - gets the value of hte node
     *
     * @return {Object}  returns the value of the node
     */

  }, {
    key: "getVal",
    value: function getVal() {
      return this.value;
    }
  }]);

  return Node;
}();

exports.default = Node;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ListNode2 = __webpack_require__(2);

var _ListNode3 = _interopRequireDefault(_ListNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DoubleLinkedListNode = function (_ListNode) {
  _inherits(DoubleLinkedListNode, _ListNode);

  /**
   * constructor - Sets prev next and value for this node
   *
   * @param  {Object} value value
   * @param  {DoubleLinkedListNode} prev  previous pointer
   * @param  {DoubleLinkedListNode} next  next pointer
   * @return {Void}       nothing
   */
  function DoubleLinkedListNode(value, prev, next) {
    _classCallCheck(this, DoubleLinkedListNode);

    var _this = _possibleConstructorReturn(this, (DoubleLinkedListNode.__proto__ || Object.getPrototypeOf(DoubleLinkedListNode)).call(this, value, next));

    _this.prev = null;
    _this.setPrev(prev);
    return _this;
  }

  /**
   * setPrev - sets prev element ptr
   *
   * @param  {ListNode} next The next node in the list
   * @return {void}      nothing
   */


  _createClass(DoubleLinkedListNode, [{
    key: "setPrev",
    value: function setPrev(prev) {
      this.prev = prev;
    }

    /**
     * getNext - returns the next pointer
     *
     * @return {ListNode}  returns the next node in line.
     */

  }, {
    key: "getPrev",
    value: function getPrev() {
      return this.prev;
    }
  }]);

  return DoubleLinkedListNode;
}(_ListNode3.default);

exports.default = DoubleLinkedListNode;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class representing a ring buffer. It uses an array of a given size as its base structure.
 *
 *
 *       +-----------------------------------------------------------------------------------+
 *       |      |      |      |      |      |      |      |      |      |      |      |      |
 *       |  8   |  9   |  10  |  11  |  12  | null | null |  3   |  4   |  5   |  6   |  7   |
 *       |      |      |      |      |      |      |      |      |      |      |      |      |
 *       +-------------------------------^-------------------^-------------------------------+
 *                                       |                   |
 *                                       |                   |
 *                                    +-----+             +-----+
 *                                    |Write|             |Read |
 *                                    |hder |             |hder |
 *                                    +-----+             +-----+
 *
 * @author Lars Erik Bratlie <lars00.brat@gmail.com>
 */
var RingBuffer = function () {

  /**
   * constructor - initializes the variables used to hold the states.
   *
   * @param  {Number} size                 Sets the allowed size of the ring buffer.
   * @param  {Boolean} allowBufferOveflow  If set to true writehead can overwrite the elements that has not yet been read.
   */
  function RingBuffer(size, allowBufferOveflow) {
    _classCallCheck(this, RingBuffer);

    this.buffer = new Array(size).fill(null);
    this.wHdr = Math.round(size / 2); //Just start in the middle
    this.rHdr = Math.round(size / 2);
    this.count = 0;
    this.bufferOverwrite = allowBufferOveflow;
  }

  /**
   * Symbol.iterator - Make iterable. This is a generator used in for of loop to iterate over the collection
   *
   * @return {Object}  The list object starting at beginning and ending and list size()
   */


  _createClass(RingBuffer, [{
    key: Symbol.iterator,
    value: regeneratorRuntime.mark(function value() {
      var iter_next;
      return regeneratorRuntime.wrap(function value$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              iter_next = this.rHdr;

            case 1:
              if (!(iter_next !== this.wHdr)) {
                _context.next = 7;
                break;
              }

              _context.next = 4;
              return this.buffer(iter_next);

            case 4:
              iter_next++;
              _context.next = 1;
              break;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, value, this);
    })

    /**
     * write - Writes an element to the current write header location. If bufferOverwrite is
     * set and buffer is full, it will just continue to write over previously written data,
     * data is therefore lost. However if bufferOverwrite is false, it will throw an error
     * when buffer is full, preventing any further writing to the buffer.
     * After element is written the write head is incremented one step.
     *
     * @param  {Object} element The element to write.
     * @return {Number}       The new number of element, if the write was sucessfull.
     * @throws {FullBufferError} if queue is full and bufferOverwrite is false.
     */

  }, {
    key: "write",
    value: function write(element) {
      if (this.isFull() && !this.bufferOverwrite) {
        var e = new Error();
        e.name = "FullBufferError";
        e.message = "Cannot write to buffer, buffer is full";
        throw e;
      }
      this.buffer[this.wHdr] = element;
      this.incrWHdr();
      this.incrCount();
      return this.size();
    }

    /**
     * read - Reads an item from the queue and sets the value to null after reading it.
     * After successfull read it increments the read header one step.
     *
     * @return {Object}  The element in the buffer, if the read was sucessfull.
     * @throws {EmptyBufferError} if buffer is empty.
     */

  }, {
    key: "read",
    value: function read() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyBufferError";
        e.message = "Cannot read from buffer, buffer is empty";
        throw e;
      }
      var returnElement = this.buffer[this.rHdr];
      this.buffer[this.rHdr] = null; //Remove references. No memory leaks
      this.incrRHdr();
      this.decrCount();
      return returnElement;
    }

    /**
     * incrWHdr - Private method for incrementing the writehead.
     * Should not be called from outside this adt.
     *
     * @return {undefined}  nothing
     */

  }, {
    key: "incrWHdr",
    value: function incrWHdr() {
      this.wHdr++;
      this.wHdr = this.wHdr % this.buffer.length;
    }

    /**
     * incrRHdr - Private method for incrementing the readhead.
     * Should not be called from outside this adt.
     *
     * @return {undefined}  nothing
     */

  }, {
    key: "incrRHdr",
    value: function incrRHdr() {
      this.rHdr++;
      this.rHdr = this.rHdr % this.buffer.length;
    }

    /**
     * incrCount - Private method for incrementing the number of elements.
     * should not be used outside this adt.
     *
     * @return {undefined}  nothing
     */

  }, {
    key: "incrCount",
    value: function incrCount() {
      if (!this.isFull()) {
        this.count++;
      }
    }

    /**
     * decrCount - Private method for decrement the number of elements in the buffer.
     * This method should not be used from the outside of this adt.
     *
     * @return {undefined}  nothing
     */

  }, {
    key: "decrCount",
    value: function decrCount() {
      if (!this.isEmpty()) {
        this.count--;
      }
    }

    /**
     * peekAtRHdr - Peeks at the element pointed to by the readhead and returns it.
     * This does not alter the buffer in any way.
     *
     * @return {Object}  The element pointet to by the readhead.
     * @throws {EmptyBufferError} if the buffer is empty
     */

  }, {
    key: "peekAtRHdr",
    value: function peekAtRHdr() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyBufferError";
        e.message = "Cannot peak, buffer is empty";
        throw e;
      }
      return this.buffer[this.rHdr];
    }

    /**
     * peekAtWHdr - Peeks at the element pointed to by the writehead and returns it.
     * This does not alter the buffer in any way. Since the write head always is one
     * step ahead it will point to the write head position - 1, which is the last element
     * added to the buffer.
     *
     * @return {Object}  The element pointed to by the write head.
     * @throws {EmptyBufferError} if the buffer is empty
     */

  }, {
    key: "peekAtWHdr",
    value: function peekAtWHdr() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyBufferError";
        e.message = "Cannot peak, buffer is empty";
        throw e;
      }
      var index = this.wHdr === 0 ? this.buffer.length - 1 : this.wHdr - 1;
      return this.buffer[index];
    }

    /**
     * size - Gets the number of elements currently held in the buffer. That is, it
     * returns writehead - readhead, which means it returns number of elements written to
     * the buffer and not yet read.
     *
     * @return {Number}  Number of elements in the buffer
     */

  }, {
    key: "size",
    value: function size() {
      return this.count;
    }

    /**
     * isEmpty - Checks if there are any elements in the buffer
     *
     * @return {Boolean}  true if the buffer hold no elements, false if there is any written elements that is not yet read.
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.count === 0 ? true : false;
    }

    /**
     * isFull - Checks if the queue is full.
     *
     * @return {Boolean} true if the queue is full, otherwise false.
     */

  }, {
    key: "isFull",
    value: function isFull() {
      return this.buffer.length === this.count ? true : false;
    }
  }]);

  return RingBuffer;
}();

exports.default = RingBuffer;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LinkedList = __webpack_require__(0);

var _LinkedList2 = _interopRequireDefault(_LinkedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class representing a queue. This representation uses an LinkedList as base structure, it uses Linked Lists unshift and pop for
 * enqueueing and dequeueing. This class does not have any limitiations on how many elements there can be in the list, other than the
 * limitations on the native Array object itself.
 * @class
 */
var QueueAsList = function () {
  /**
   * constructor - makes a array as a base structure
   */
  function QueueAsList() {
    _classCallCheck(this, QueueAsList);

    this.q = new _LinkedList2.default();
    this[Symbol.iterator] = this.q[Symbol.iterator].bind(this.q);
  }

  /**
   * enqueue - enqueues at the end of the queue
   *
   * @param  {Object} item to enqueue
   * @return {number} The size of the new queue
   */


  _createClass(QueueAsList, [{
    key: "enqueue",
    value: function enqueue(item) {
      return this.q.push(item);
    }

    /**
     * dequeue - dequeues the first item in the queue
     *
     * @return {Object}  The first object in the queue
     * @todo throw error when empty
     */

  }, {
    key: "dequeue",
    value: function dequeue() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyQueueError";
        e.message = "Cannot dequeue, queue is empty";
        throw e;
      }
      return this.q.shift();
    }

    /**
     * peekFirst - peeks at the first element in line
     *
     * @return {Object}  returns the first element in line.
     */

  }, {
    key: "peekFirst",
    value: function peekFirst() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyQueueError";
        e.message = "Cannot peek, queue is empty";
        throw e;
      }
      return this.q.peekFirst();
    }

    /**
     * peekLast - peeks at the first element in line
     *
     * @return {Object}  returns the first element in line.
     */

  }, {
    key: "peekLast",
    value: function peekLast() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyQueueError";
        e.message = "Cannot peek, queue is empty";
        throw e;
      }
      return this.q.peekLast();
    }

    /**
     * size - gets the size of the queue.
     *
     * @return {number}  size of the queue.
     */

  }, {
    key: "size",
    value: function size() {
      return this.q.size();
    }

    /**
     * isEmpty - Checks if the stack is empty
     *
     * @return {Boolean} The index of the top element
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.q.size() === 0 ? true : false;
    }
  }]);

  return QueueAsList;
}();

exports.default = QueueAsList;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DoubleLinkedList = __webpack_require__(3);

var _DoubleLinkedList2 = _interopRequireDefault(_DoubleLinkedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class representing a deque. This representation uses an DoubleLinkedList as base structure, it uses the Linked Lists
 * unshift, shift, push and pop for enqueueing and dequeueing at the ends.
 * @class
 */
var Deque = function () {
  /**
   * constructor - makes a array as a base structure
   */
  function Deque() {
    _classCallCheck(this, Deque);

    this.q = new _DoubleLinkedList2.default();
    this[Symbol.iterator] = this.q[Symbol.iterator].bind(this.q);
  }

  /**
   * pushFront - enqueues at the front of the queue
   *
   * @param  {Object} item to enqueue
   * @return {number} The size of the new queue
   */


  _createClass(Deque, [{
    key: "pushFront",
    value: function pushFront(item) {
      return this.q.unshift(item);
    }

    /**
     * pushBack - enqueues at the end of the queue
     *
     * @param  {Object} item to enqueue
     * @return {number} The size of the new queue
     */

  }, {
    key: "pushBack",
    value: function pushBack(item) {
      return this.q.push(item);
    }

    /**
     * popFront - dequeues the item in the front
     *
     * @return {Object}  The first object in the queue
     * @todo throw error when empty
     */

  }, {
    key: "popFront",
    value: function popFront() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyQueueError";
        e.message = "Cannot dequeue, queue is empty";
        throw e;
      }
      return this.q.shift();
    }

    /**
     * popBack - dequeues the item in the front
     *
     * @return {Object}  The first object in the queue
     * @todo throw error when empty
     */

  }, {
    key: "popBack",
    value: function popBack() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyQueueError";
        e.message = "Cannot dequeue, queue is empty";
        throw e;
      }
      return this.q.pop();
    }

    /**
     * peekFirst - peeks at the first element in line
     *
     * @return {Object}  returns the first element in line.
     */

  }, {
    key: "peekFirst",
    value: function peekFirst() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyQueueError";
        e.message = "Cannot peek, queue is empty";
        throw e;
      }
      return this.q.peekFirst();
    }

    /**
     * peekLast - peeks at the first element in line
     *
     * @return {Object}  returns the first element in line.
     */

  }, {
    key: "peekLast",
    value: function peekLast() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyQueueError";
        e.message = "Cannot peek, queue is empty";
        throw e;
      }
      return this.q.peekLast();
    }

    /**
     * size - gets the size of the queue.
     *
     * @return {number}  size of the queue.
     */

  }, {
    key: "size",
    value: function size() {
      return this.q.size();
    }

    /**
     * isEmpty - Checks if the stack is empty
     *
     * @return {Boolean} The index of the top element
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.q.isEmpty();
    }
  }]);

  return Deque;
}();

exports.default = Deque;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LinkedList = __webpack_require__(0);

var _LinkedList2 = _interopRequireDefault(_LinkedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Class representing a stack structure. The stack is using a single linked list as base structure.
  This stack is the library default stack.
  @class
  @todo make it iterable;
*/
var Stack = function () {
  /**
   * constructor - Creates an array as the base structure for the stack
   */
  function Stack() {
    _classCallCheck(this, Stack);

    this.stack = new _LinkedList2.default();
    this[Symbol.iterator] = this.stack[Symbol.iterator].bind(this.stack);
  }

  /**
     * pop - Pops off the last added element of the stack
     *
     * @return {Unknown} returns the element at the top off the stack
     * @throws {EmptyStackError} if array is empty
     */


  _createClass(Stack, [{
    key: "pop",
    value: function pop() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyStackError";
        e.message = "Cannot pop empty stack";
        throw e;
      }
      return this.stack.shift();
    }

    /**
     * push - Pushes an item to the top of the stack incrementing the size with one.
     *
     * @param {Object} item - the item to be added
     * @return {number} returns the new number of elements in the stack
     */

  }, {
    key: "push",
    value: function push(item) {
      return this.stack.unshift(item);
    }

    /**
     * top - Gets the length or the size of the stack
     *
     * @return {Number} returns the index of the top element
     */

  }, {
    key: "top",
    value: function top() {
      return this.stack.size() - 1;
    }

    /**
     * isEmpty - Checks if the stack is empty
     *
     * @return {Boolean} The index of the top element
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.stack.isEmpty();
    }

    /**
     * size - size of stack
     *
     * @return {Number} The size of the stack
     */

  }, {
    key: "size",
    value: function size() {
      return this.stack.size();
    }

    /**
     * peek - see the first item on top. this does not alter the stack in any way.
     *
     * @return {Object}  the top of the stack
     * @throws EmptyStackError if stack is empty
     */

  }, {
    key: "peek",
    value: function peek() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyStackError";
        e.message = "Cannot peek, stack is empty";
        throw e;
      }
      return this.stack.peekFirst();
    }
  }]);

  return Stack;
}();

exports.default = Stack;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  @function binarySearch

  Binary search algorithm implemented in JavaScript as a pure function.
  It is an interative implementation.
  For more information about the algorithm visit : @see{https://en.wikipedia.org/wiki/Binary_search_algorithm}

  Performance:
    Worst case: O(log(n)) + 1, where n is the number of elements in the array
    Best case:  O(1), constant time.

  @param {Object} value - The object to search for
  @param {Array} array - The array to search in.
  @return {Number} result - The index of the number, or -1 if not found

  @author Lars Erik Bratlie <lars00.brat@gmail.com>
**/
function binarySearch(target, array) {
  var low = 0;
  var high = array.length - 1;
  var middle = Math.round((high - low) / 2);
  var result = -1;

  while (high >= low) {
    console.log(low, middle, high);
    if (target === array[middle]) {
      result = middle;
      break;
    } else if (target > array[middle]) {
      low = middle + 1;
      middle = low + Math.round((high - low) / 2);
    } else {
      high = middle - 1;
      middle = Math.round((high - low) / 2);
    }
  }

  return result;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  @function linearSearch

  Linear search algorithm implemented in JavaScript as a pure function. Searches the given array for the given value.
  It is an iterative implementation.
  Unlike binary search there is no assumptions made on the input array for the algorithm to work.

  For more information about the algorithm visit : @see{https://www.tutorialspoint.com/data_structures_algorithms/linear_search_algorithm.htm}

  Performance:
    Worst case: O(n), where n is the number of items in the array. This happens if the value is at the end of the array.
    Best case: O(1), this happens if the value to find is in the beginning of the array.

  @param {Object} value - The given value to search for.
  @param {Array} array - The array to search in.
  @return {Number} index -  The index of the value in the array, if the value does not excists -1 is returned.

  @author Lars Erik Bratlie <lars00.brat@gmail.com>
**/
function linearSearch(value, array) {
  var result = -1;
  for (var x = 0; x < array.length; x++) {
    if (array[x] === value) {
      result = x;
      break;
    }
  }
  return result;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Swap = __webpack_require__(1);

var _Swap2 = _interopRequireDefault(_Swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 *    oooooooooo              oooo       oooo       o888                                                 o8
 *     888    888 oooo  oooo   888ooooo   888ooooo   888  ooooooooo8  oooooooo8    ooooooo  oo oooooo  o888oo
 *     888oooo88   888   888   888    888 888    888 888 888oooooo8  888ooooooo  888     888 888    888 888
 *     888    888  888   888   888    888 888    888 888 888                 888 888     888 888        888
 *    o888ooo888    888o88 8o o888ooo88  o888ooo88  o888o  88oooo888 88oooooo88    88ooo88  o888o        888o
 *
 * Bubblesort - Bubblesort implemented as a pure JavaScript function. The Bubblesort should not be used on large collection
 * due to its worst case performance. It uses the given comparator function to order the elements, see below for more information
 * on the comparator function.
 *
 * The comparator function should have the following form: compare(a,b), and return a number; > 0, < 0 or 0.
 * If ascending order is wanted, compare(a, b) must yield a number < 0, this will sort a to an index lower than b.
 * If descending order is wanted, compare(a, b) must yield a number > 0, this will sort a to an index higher than b.
 * If compare(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements
 * compare(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments.
 * If inconsistent results are returned then the sort order is undefined.
 *
 * Performance:
 *  -Worst case: O(n^2)
 *
 * @param {Array} array - The array that is going to be sorted. The input array is not tampered with or changed in any way
 * @param {Function} comparator description
 * @return {Array} sortedArray - The sorted array.
 *
 * @author Lars Erik Bratlie <lars00.brat@gmail.com>
 */
function Bubblesort(array, comparator) {
  var sortedArray = array.slice(0);
  for (var x = sortedArray.length - 1; x > 0; x--) {
    for (var y = 0; y < x; y++) {
      var el1 = sortedArray[y];
      var el2 = sortedArray[y + 1];
      if (comparator(el1, el2) > 0) {
        (0, _Swap2.default)(sortedArray, y, y + 1);
      }
    }
  }
  return sortedArray;
}
exports.default = Bubblesort;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *     ,-.  ,--. ,    ,--.  ,-. ,---. ,  ,-.  .  .  ,-.   ,-.  ,-.  ,---.
 *    (   ` |    |    |    /      |   | /   \ |\ | (   ` /   \ |  )   |
 *     `-.  |-   |    |-   |      |   | |   | | \|  `-.  |   | |-<    |
 *    .   ) |    |    |    \      |   | \   / |  | .   ) \   / |  \   |
 *     `-'  `--' `--' `--'  `-'   '   '  `-'  '  '  `-'   `-'  '  '   '
 *
 * Selectionsort - Selectionsort implemented as a pure JavaScript function. Selection sort should not be used on
 * large collection due to its poor performance. It uses the given
 * comparator function to order the elements, see below for more information on the comparator function.
 *
 * The comparator function should have the following form: compare(a,b), and return a number; > 0, < 0 or 0.
 * If ascending order is wanted, compare(a, b) must yield a number < 0, this will sort a to an index lower than b.
 * If descending order is wanted, compare(a, b) must yield a number > 0, this will sort a to an index higher than b.
 * If compare(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements
 * compare(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments.
 * If inconsistent results are returned then the sort order is undefined.
 *
 * Performance:
 *  -Worst case: O(n^2)
 *
 * @param {Array} array - The array that is going to be sorted. The input array is not tampered with or changed in any way
 * @param {Function} comparator description
 * @return {Array} sortedArray - The sorted array.
 *
 * @author Lars Erik Bratlie <lars00.brat@gmail.com>
 */
function Selectionsort(array, comparator) {
  var sortedArray = array.slice(0);
  for (var x = 0; x < sortedArray.length - 1; x++) {

    //Either the largest or the smallest value for each iteration is stored, depends on the comparator.
    var compVal = sortedArray[x];
    //The index value of the largest or smallest value.
    var compVal_index = x;

    //Find the largest or smallest value in the rest array.
    for (var y = x + 1; y < sortedArray.length; y++) {
      if (comparator(compVal, sortedArray[y]) > 0) {
        compVal = sortedArray[y];
        compVal_index = y;
      }
    }
    sortedArray[compVal_index] = sortedArray[x]; //Swapping the elements
    sortedArray[x] = compVal;
  }
  return sortedArray;
}

exports.default = Selectionsort;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Swap = __webpack_require__(1);

var _Swap2 = _interopRequireDefault(_Swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *       ___       _   _                   ____     _  __      ____        U  ___ u    ____       _____
 *      / " \   U |"|u| |      ___      U /"___|   |"|/ /     / __"| u      \/"_ \/ U |  _"\ u   |_ " _|
 *     | |"| |   \| |\| |     |_"_|     \| | u     | ' /     <\___ \/       | | | |  \| |_) |/     | |
 *    /| |_| |\   | |_| |      | |       | |/__  U/| . \\u    u___) |   .-,_| |_| |   |  _ <      /| |\
 *    U \__\_\u  <<\___/     U/| |\u      \____|   |_|\_\     |____/>>   \_)-\___/    |_| \_\    u |_|U
 *       \\//   (__) )(   .-,_|___|_,-.  _// \\  ,-,>> \\,-.   )(  (__)       \\      //   \\_   _// \\_
 *      (_(__)      (__)   \_)-' '-(_/  (__)(__)  \.)   (_/   (__)           (__)    (__)  (__) (__) (__)
 *
 *
 * Quicksort - Quicksort implemented as a js function. This function is not pure,
 * it changes the input array. It sorts the given array, and uses the given comparator
 * to compare the elements, what the this function returns plays a role in whether it will sorts
 * the elements in ascending or descending order.
 *
 * The comparator function should have the following form: compare(a,b), and return a number; > 0, < 0 or 0.
 * If ascending order is wanted, compare(a, b) must yield a number < 0, this will sort a to an index lower than b.
 * If descending order is wanted, compare(a, b) must yield a number > 0, this will sort a to an index higher than b.
 * If compare(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements
 * compare(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments.
 * If inconsistent results are returned then the sort order is undefined.
 *
 * Time complexity:
 *  -Worst case:
 *
 * @param  {Array} array         The array to sort
 * @param  {Function} comparator A comparator function used to
 * @return {void}                none
 *
 * @author Lars Erik Bratlie <lars00.brat@gmail.com>
 */
function Quicksort(array, comparator) {
  QuicksortInternal(array, 0, array.length - 1, comparator);
}

/**
 * QuicksortInternal - The internal Quicksort function.
 *
 * @param  {Array}  array The array to sort.
 * @param  {Number} left  left boundary pointer index
 * @param  {Number} right right boundary pointer index
 * @return {none}   none
 */
function QuicksortInternal(array, left, right, comparator) {
  //Base case
  if (right - left < 1) {
    return;
  }

  //partition
  var left_ptr = left,
      right_ptr = right,
      pivot = left + calcPivot(left, right),
      new_pivot = partition(array, left_ptr, right_ptr, pivot, comparator);

  //Calculate partition 1 ptrs;
  var p1_left = left;
  var p1_right = new_pivot - 1;

  //Calculate partition 2 ptrs;
  var p2_left = new_pivot + 1;
  var p2_right = right;

  //Partition left and right of pivot
  QuicksortInternal(array, p1_left, p1_right, comparator); //Quicksort P1
  QuicksortInternal(array, p2_left, p2_right, comparator); //Quicksort P2
}

/**
 * calcPivot - Calculates pivot. It just finds the middlepoint in the
 *  range between left and right. In future it will find a more sophisticated way
 *  of finding pivot.
 *
 * @param  {Number} left  left pointer of partition.
 * @param  {Number} right right pointer of partition.
 * @return {Number}       The new pivot position.
 */

function calcPivot(left, right) {
  return Math.ceil((right - left) / 2);
}

/**
 * partition - Partitioning the elements between a given left boundary and a given
 * right boundary around a given pivot. It moves all elements smaller than the pivot
 * to left side of pivot, and all element larger than pivot to right of pivot. after
 * successfull completion the pivot element is sorted, and is placed in the right index
 * of the array.
 * The function is not pure, it changes the input array. It only changes the position
 * of the elements in between the left boundary and right boundary of the array.
 *
 * @param  {Array} array         The array to partitioning in.
 * @param  {Number} left         The index pointer of the left boundary
 * @param  {Number} right        The index pointer of the right boundary
 * @param  {Number} pivot_index  The index of the pivot
 * @param  {Function} comparator comparator function to compare elements
 * @return {Number}              The new position of the pivot after partitioning.
 */
function partition(array, left, right, pivot_index, comparator) {
  //Partition
  var rightmost_ptr = right + 0;
  var pivot = array[pivot_index];
  while (left < right) {
    while (comparator(array[left], pivot) < 0) {
      left++;
    }
    while (comparator(array[right], pivot) > 0) {
      right--;
    }
    (0, _Swap2.default)(array, left, right);
    if (left === pivot_index) {
      pivot_index = right;
      left++;
    } else if (right === pivot_index) {
      pivot_index = left;
      right--;
    } else {
      left++;
      right--;
    }
  }
  return pivot_index;
}

exports.default = Quicksort;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *     __    __   ______   ______   ______   ______   ______   ______   ______  ______
 *    /\ "-./  \ /\  ___\ /\  == \ /\  ___\ /\  ___\ /\  ___\ /\  __ \ /\  == \/\__  _\
 *    \ \ \-./\ \\ \  __\ \ \  __< \ \ \__ \\ \  __\ \ \___  \\ \ \/\ \\ \  __<\/_/\ \/
 *     \ \_\ \ \_\\ \_____\\ \_\ \_\\ \_____\\ \_____\\/\_____\\ \_____\\ \_\ \_\ \ \_\
 *      \/_/  \/_/ \/_____/ \/_/ /_/ \/_____/ \/_____/ \/_____/ \/_____/ \/_/ /_/  \/_/
 *
 *
 * Mergesort - Mergesort implemented as a pure javascript function. It uses the given
 * comparator function to order the elements, see below for more information on the comparator function.
 * This implmentation is still a bit slow, I assume it is because of Arrays native methods push, shift, slice.
 * I will look in to this, in mean time use Quicksort.
 *
 * The comparator function should have the following form: compare(a,b), and return a number; > 0, < 0 or 0.
 * If ascending order is wanted, compare(a, b) must yield a number < 0, this will sort a to an index lower than b.
 * If descending order is wanted, compare(a, b) must yield a number > 0, this will sort a to an index higher than b.
 * If compare(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements
 * compare(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments.
 * If inconsistent results are returned then the sort order is undefined.
 *
 * Time complexity:
 * -Worst case: O(nlog(n))
 *
 * @param {Array} array - The array that is going to be sorted. The input array is not tampered with or changed in any way
 * @param {Function} comparator description
 * @return {Array} sortedArray - The sorted array.
 *
 * @author Lars Erik Bratlie <lars00.brat@gmail.com>
 */
function Mergesort(array, comparator) {
  //Base case
  if (array.length === 1) {
    return array;
  }

  //Divide
  var middle = Math.floor(array.length / 2);
  var a1 = array.slice(0, middle);
  var a2 = array.slice(middle, array.length);

  //Divide further and sort.
  var na1 = Mergesort(a1, comparator);
  var na2 = Mergesort(a2, comparator);

  //The array containing all elements from na1 and na2 sorted.
  var sortedArray = [];

  //Merge
  while (na1.length > 0 && na2.length > 0) {
    if (comparator(na1[0], na2[0]) < 0) {
      sortedArray.push(na1.shift());
    } else if (comparator(na1[0], na2[0]) > 0) {
      sortedArray.push(na2.shift());
    } else {
      sortedArray.push(na2.shift());
      sortedArray.push(na1.shift());
    }
  }
  while (na1.length > 0) {
    sortedArray.push(na1.shift());
  }
  while (na2.length > 0) {
    sortedArray.push(na2.shift());
  }
  return sortedArray;
}

exports.default = Mergesort;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.breadthFirstSearch = breadthFirstSearch;

var _Queue = __webpack_require__(4);

var _Queue2 = _interopRequireDefault(_Queue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * breadthFirstSearch - This is an implementation of BFS for path finding in a given graph. It works by always visiting nodes that is
 * are closest to the source node in number of hops away, and therefore not closest in terms of path cost away.
 *
 * This implementation operates on a given 2d array of this form, the graph is assumed to be unwheightet:
 *     +----+----+----+----+----+
 *     |    |  A |  B |  C |  D |
 *     +------------------------+
 *     |  A | -1 |  X |  X |  X |
 *     +------------------------+
 *     |  B |  X | -1 |  X |  X |
 *     +------------------------+
 *     |  C |  X |  X | -1 |  X |
 *     +------------------------+
 *     |  D |  X |  X |  X | -1 |
 *     +----+----+----+----+----+
 *
 * Here A, B, C, D denotes the nodes in the graph, the letter X is a positive number and tells whether or not there is a
 * path between the nodes. In BFS  the X values are discarded and not used for other than checking if there is a path between the nodes.
 * Thus, there exists a path between nodes A and B, if X is a number > -1 in the cell [A][B], if the
 * number in the cell is negative, there is assumed that a path between the nodes does not exist.
 * Further, the graph is assumed to be directional, so each row denotes from and each column means to, so cell [C][A] means
 * there exists a directed path between C and A that goes from C to A; C ------> A.
 * The letters in the array are just for illustration purposes, the array should only contain numbers indicating whether or not there
 * is a path between the nodes.
 *
 * Implementation details:
 *  It uses a ring buffer queue to add neighbour nodes in. The nodes that are added first gets visited first.
 *
 *  To keep track of visited nodes it has a bolean Array with the size of the number of nodes in the graph, each index indicates
 *  whether or not the node has been visited. It is not necesarry to visit a node more than once, this is because the shortest path
 *  to eery node from source are visited first.
 *
 * Time Complexity:
 *
 * Space Complexity:
 *
 * @param  {type} fromNode The start node to search from
 * @param  {type} goalNode The goal node to search for.
 * @param  {type} graph    The graph to search in given on the form described above.
 * @return {Array}           An array containing the shortest path, where the first element is the start node
 *                           and the last element is the goal node. If no path exists it will return a empty array.
 * @todo throw something
 * @author Lars Erik Bratlie <lars00.brat@gmail.com>
 */
function breadthFirstSearch(fromNode, goalNode, graph) {

  if (!(0 < fromNode && fromNode < graph.length) || !(0 < toNode && toNode < graph.length)) {
    //Throw something
  }

  var q = new _Queue2.default(graph.length); //Using a ring buffer queue
  var visited = new Array(graph.length).fill(false); //Array used to keep track of visited nodes.
  var currentNode = null;
  var shortestPath = []; //Array containing the shortest path

  //An constructor representing a node.
  var Node = function Node(nodeNr, cameFrom, NrOfHops) {
    this.nodeNr = nodeNr; //The nodeNr from the graph array.
    this.cameFrom = currentNode; //Reference to the node that opened this node, the came from node.
    this.NrOfHops = NrOfHops; //NrOfHops from source to this node.
  };

  //Add first node to queue
  q.enqueue(new Node(fromNode, null, 0));

  while (!q.isEmpty()) {
    //Dequeue next element
    var currentNode = q.dequeue();

    //Allready visited by another node, that node must be a shorter path to currentNode, no need to revisit.
    if (visited[currentNode.nodeNr]) {
      continue;
    }

    //Mark as visited.
    visited[currentNode.nodeNr] = true;

    //If current node visted is goal node, the shortest path is found.
    if (currentNode.nodeNr === goalNode) {
      //Calculate the shortest path by traversing the found path backwards
      var fromNode = currentNode;
      var j = fromNode.NrOfHops;
      shortestPath = new Array(j);
      //Add each node in the path to the return array.
      while (fromNode !== null) {
        shortestPath[j--] = fromNode.nodeNr;
        fromNode = fromNode.cameFrom;
      }
      break;
    }

    //Open neighbour nodes and add them to the priority queue
    for (var adjacent = 0; adjacent < graph.length; adjacent++) {
      if (graph[currentNode.nodeNr][adjacent] < 0 || visited[adjacent]) {
        continue;
      }
      //Add the neighbour node to q.
      q.enqueue(new Node(adjacent, //The node number
      currentNode, //Came from
      currentNode.NrOfHops + 1 //Number of hops since beginning.
      ));
    }
  }
  return shortestPath;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aStar = aStar;

var _BinaryHeap = __webpack_require__(20);

var _BinaryHeap2 = _interopRequireDefault(_BinaryHeap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 *                AAA
 *               A:::A
 *              A:::::A
 *             A:::::::A                 ******         ******
 *            A:::::::::A                *:::::*       *:::::*
 *           A:::::A:::::A               ***::::*******::::***
 *          A:::::A A:::::A                 **:::::::::::**
 *         A:::::A   A:::::A             ******:::::::::******
 *        A:::::A     A:::::A            *:::::::::::::::::::*
 *       A:::::AAAAAAAAA:::::A           ******:::::::::******
 *      A:::::::::::::::::::::A             **:::::::::::**
 *     A:::::AAAAAAAAAAAAA:::::A         ***::::*******::::***
 *    A:::::A             A:::::A        *:::::*       *:::::*
 *   A:::::A               A:::::A       ******         ******
 *  A:::::A                 A:::::A
 * AAAAAAA                   AAAAAAA
 *
 * aStar - This is a implementation of the A* algorithm for a directed graph implemented as a 2D array.
 *  A* is a algorithm for finding the shortest path from a node to another in a graph using a heuristic function.
 *  It is very similar to dijkstras algorithm, if the heuristic in aStar returns 0 for all inputs, it will work in almost the same way
 *  as dijkstraas. It is important for the heuristic to be admissable to be able to find the optimal path,
 *  see below for more information on this. For the algorithm to be effective and do as little work as possible,
 *  it should not revisit nodes, therefore it is important that the heuristic is monotone,
 *  see below for more information. All in all the property of the heuristic is very important for the aStar to work
 *  correctly and efficient.
 *
 * Optimal path:
 *  The heuristic plays a major part on finding the optimal path. If aStar should find the shortest path the heuristic must
 *  be admissable or valid, this means that the heuristic must not over-estimate or under-estimate the cost to goal node,
 *  this can cause the algorithm to either not chose a path via x or to wrongly chose a path via x, this can cause the algorithm
 *  to not find the optimal path. In short this property must be true:  L(x) + h(x) <= L(x) + d(x,y) + h(y) = L(y) + h(y),
 *  where L is the cost of the path from some source node to node the input node, d is the hopp cost between the two input
 *  nodes and finally h is the heuristic. In short L(x) + h(x) <=  L(y) + h(y), one cannot decrease the cost to jump to a
 *  neighbour node.
 *
 * Effective A*:
 *  In order for the algorithm not to revisit nodes several times, the heuristic should be monotone, in formal meaning it
 *  should have this property: for all x and y, h(x)<= c(x,y) + h(y), where x and y are neighbour nodes. If it has this property
 *  it is as effective as it can be.
 *
 *  For more information on selecting the correct heuristic @see{}
 *
 * Implementation details:
 *  For priority queue this implementation uses a binaryheap. If nodes with equal cost paths are added, the first node added
 *  is served first, then the second, etc.. The implementation of the binary heap is a bit slow, work is in progress to fix
 *  these issues.
 *
 *  To keep track of visited nodes it has a bolean Array with the size of the number of nodes in the graph, each index indicates
 *  whether or not the node has been visited.
 *
 *  This implementation operates on a given 2d array of this form:
 *     +----+----+----+----+----+
 *     |    |  A |  B |  C |  D |
 *     +------------------------+
 *     |  A | -1 |  X |  X |  X |
 *     +------------------------+
 *     |  B |  X | -1 |  X |  X |
 *     +------------------------+
 *     |  C |  X |  X | -1 |  X |
 *     +------------------------+
 *     |  D |  X |  X |  X | -1 |
 *     +----+----+----+----+----+
 *
 * Here A, B, C, D denotes the nodes in the graph, the letter x is a number representing cost, and whether or not there is a
 * path between the nodes. If there exists a path between nodes A and B there must be a number > -1 in the cell [A][B], if the
 * number in the cell is negative, there is assumed that a path between the nodes does not exist.
 * Further, The graph is assumed to be directional, so each row denotes from and each column means to, so cell [C][A] means
 * there exists a directed path between C and A that goes from C to A with ost X; C ---X---> A.
 * The letters in the array are just for illustration purposes, the array should only contain numbers indicating cost on the
 * path between the nodes.
 *
 * Time Complexity:
 *
 * Space Complexity:
 *
 * @param  {Number} fromNode - The node for search from
 * @param  {Number} toNode - The node to search for.
 * @param  {Array}  graph - The given graph to search in.
 * @param  {Function} heuristic - The heuristic function. The heuristic should be admissable and monotonic for A* to find optimal path and be effective.
 *                                The heuristic should be on the following form: heuristic(x), where x is a node and the return value is the estimated
 *                                estimated cost to goal from that node (x), this value must be > -1. If -1 is returned infinity is assumed.
 * @return {type} - The optimal path if the heuristic given is admissable. Empty array if no path is found
 * @throws
 * @todo throw something
 * @author Lars Erik Bratlie <lars00.brat@gmail.com>
 */
function aStar(fromNode, toNode, graph, heuristic) {
  if (!(0 < fromNode && fromNode < graph.length) && !(0 < toNode && toNode < graph.length)) {
    //Throw something
  }

  var shortestPath = [];
  var priQueue = new _BinaryHeap2.default(graph.length, function (a, b) {
    //The less than operator here will cause equal priority nodes to be visited in a fifo manner.
    return a.priority < b.priority ? -1 : 1;
  });
  var currentNode = null;
  var visited = new Array(graph.length).fill(null); //A boolean array used to mark visited node, filled with null references
  //Object representing a Node.
  var Node = function Node(nodeNr, c, h, cameFrom, NrOfHops) {
    this.nodeNr = nodeNr; //The nodeNr from the graph array.
    this.cost = c; //Cost of traveling from source to this node
    this.heuristic = h; //The estimated cost of traveling via this node to goal.
    this.priority = this.cost + this.heuristic; //The total cost from this node + estimation. This value is used by priQueue.
    this.cameFrom = currentNode; //Reference to the node that opened this node, the came from node.
    this.NrOfHops = NrOfHops; //NrOfHops from source to this node.
  };

  //Add the first node(source) to the queue.
  priQueue.add(new Node(fromNode, 0, 0, null, 0));

  while (!priQueue.isEmpty()) {
    //Remove the node with the shortest distance from source and visit it.
    currentNode = priQueue.remove();

    //There is not necesarry to revisit closed nodes with lower path cost.
    if (visited[currentNode.nodeNr] != null && visited[currentNode.nodeNr].cost < currentNode.cost) {
      continue;
    }

    //Mark as visited
    visited[currentNode.nodeNr] = currentNode;

    //Check if currentNode is the goal node, the shortest path must be reached.
    if (currentNode.nodeNr === toNode) {
      //Calculate the shortest path by traversing the found path backwards
      var fromNode = currentNode;
      var j = fromNode.NrOfHops;
      //Add each node in the path to the return array.
      while (fromNode !== null) {
        shortestPath[j--] = fromNode.nodeNr;
        fromNode = fromNode.cameFrom;
      }
      break;
    }

    //Open Neighbour nodes and put them in the priority queue if they do not exists in it
    for (var i = 0; i < graph.length; i++) {
      //If there are no path to node.
      if (graph[currentNode.nodeNr][i] < 0) {
        continue;
      }

      var c = currentNode.cost + graph[currentNode.nodeNr][i];
      var h = heuristic(i, toNode);

      //No need to add infinity estimated paths, or nodes that are visited but there allready exists a lower cost path to it.
      if (h < 0 || visited[i] != null && visited[i].cost < c) {
        continue;
      }

      priQueue.add(new Node(
      //Neighbour node nr relative to currentNode
      i,
      //Total cost so far to currentNode + cost of the path from current to neighbour
      c,
      //The heuristic value from neighbour node
      h,
      //Store the reference to currentNode, used to find the path taken to this node
      currentNode,
      //How many node hops has been made since the beginning to reach this node
      currentNode.NrOfHops + 1));
    }
  }
  return shortestPath;
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Swap = __webpack_require__(1);

var _Swap2 = _interopRequireDefault(_Swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Heap implemented with an array. It can either be a binary min heap or a binary max heap.
 * Chosing between min heap or max heap is done by passing comparator function to the constructor that returns a boolean value.
 *
 * The comparator function should have the following form: compare(a,b), and return a number; > 0, < 0 or 0.
 * If min value at root is wanted, compare(a, b) must yield a number < 0, this will move a higher up the tree.
 * If max value at root is wanted, compare(a, b) must yield a number > 0, this will move a down the tree.
 * If compare(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements
 * compare(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments.
 * If inconsistent results are returned then the heap order is undefined.
 *
 * @class
 * @todo test class and all methods, make exceptions where it is needed
 * @todo balance the tree when adding
 */
var BinaryHeap = function () {
  /**
   * constructor - The comparator function determines if the heap is a
   * binary minimum heap or a binary maximum heap. This is done by correctly
   * returning true or false in the comparator function.
   * If max heap is wanted write a comparator function that returns 1 if a < b.
   * If min heap is wanted write a comparator function that returns -1 if a > b.
   *
   * @param  {Function} comparator function used to compare
   * @return {type}            description
   */
  function BinaryHeap(size, comparator) {
    _classCallCheck(this, BinaryHeap);

    this.heap = new Array(size).fill(null);

    //Using a separate length property from the arrays class
    this.length = 0;

    //The heaps comarator function used to compare objects in the heap.
    this.comparator = comparator;
  }

  /**
   * add - Adds a new element to the heap.
   *
   * @param  {Node} node The node to add.
   * @return {Number}     The new size of heap.
   * @throws {FullHeapError} if heap is full.
   * @todo throw something when input is bad
   */


  _createClass(BinaryHeap, [{
    key: "add",
    value: function add(element) {
      if (this.isFull()) {
        var e = new Error();
        e.name = "FullHeapError";
        e.message = "Cannot peek at root, heap is empty";
        throw e;
      }

      if (element === null || element === undefined) {
        //Throw something
        var e = new Error();
        e.name = "UndefinedError";
        e.message = "Cannot add undefined values to the heap.";
        throw e;
      }

      //Put the new element last in the array and the heap.
      this.heap[this.length] = element;

      //If heap was empty just return the new length
      if (this.length === 0) {
        this.length++;
        return this.length;
      }

      //The index of the new element
      var child = this.length;

      //Get the parent of the newly added element
      var parent = this.getParentOf(child);

      //Now, swap the newly added element up til the heap property is valid again.
      while (parent >= 0 && this.comparator(this.heap[child], this.heap[parent]) < 0) {
        (0, _Swap2.default)(this.heap, child, parent);
        child = parent;
        parent = this.getParentOf(child);
      }

      //Increment the size of the heap and return the new value.
      this.length++;
      return this.length;
    }

    /**
     * remove - removes the root node and restores the heap property.
     *
     * @return {Obect}  returns the root node.
     * @throws {EmptyHeapError} When heap is empty.
     */

  }, {
    key: "remove",
    value: function remove() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyHeapError";
        e.message = "Cannot remove root, heap is empty";
        throw e;
      }

      //Get the value of the root node and return this value at the end.
      var rootVal = this.heap[0];

      //Find the last element
      var lastElement = this.length - 1;

      //Get the last added node in the heap and put it at root for swapdown
      this.heap[0] = this.heap[lastElement];

      //Remove any references maybe
      //this.heap[lastElement] = null;

      //Initialize variables used in swapping
      var parent = 0;
      var leftChild = 0;
      var rightChild = 0;

      //This variable contain the route to swap the parent down from
      var swapDownChild = 0;

      //Swap child with highest of the two children
      while (true) {

        //Get the children of the new parent.
        leftChild = this.getLeftChildOf(parent);
        rightChild = this.getRightChildOf(parent);

        //Check indexes of children.
        //If rightChild is out of bounds, check if left also is out of bounds
        if (!(rightChild < this.length)) {
          //Check if both cildren are out of boundary, no need to continue swapping
          if (!(leftChild < this.length)) {
            break;
          } else {
            //Just swap down the left child
            swapDownChild = leftChild;
          }
        } else {
          //Find the larger child.
          swapDownChild = this.comparator(this.heap[leftChild], this.heap[rightChild]) < 0 ? leftChild : rightChild;
        }

        //Check if heap property is not valid.
        if (this.comparator(this.heap[swapDownChild], this.heap[parent]) < 0) {
          (0, _Swap2.default)(this.heap, parent, swapDownChild);
        } else {
          //Exit the loop, the heap property is valid.
          break;
        }

        //After swapping, the new parent must be set.
        parent = swapDownChild;
      }

      //Decrement the size of the array and return the root.
      this.length--;
      return rootVal;
    }

    /**
     * getParentOf - Gets the parent index of the given index
     *
     * @param  {Number} index The child index
     * @return {Number}       The index of parent
     */

  }, {
    key: "getParentOf",
    value: function getParentOf(index) {
      if (index === 0) {
        return 0;
      }
      var parentIndex = Math.ceil(index / 2) - 1;
      return parentIndex;
    }

    /**
     * getLeftChildOf - Gets the index/position of the left child of the given parent
     *
     * @param  {Number} index The index of the parent
     * @return {Number}       The index of the left child
     * @todo proove the correctnes of calculation of left child
     */

  }, {
    key: "getLeftChildOf",
    value: function getLeftChildOf(index) {
      var childIndex = index * 2 + 1;
      return childIndex;
    }

    /**
     * getRightChild - Gets the index/position of the right child of the given parent
     *
     * @param  {Number} index The index of the parent
     * @return {Number}       The right child.
     * @todo proove the correctnesst of the calculation of right child
     */

  }, {
    key: "getRightChildOf",
    value: function getRightChildOf(index) {
      var childIndex = index * 2 + 2;
      return childIndex;
    }

    /**
     * peek - Returns the root node, but does not remove it.
     * Whether it is max or min depends on the comparator function.
     *
     * @return {type}  The root node of the heap.
     * @throw heap empty error or something when empty
     */

  }, {
    key: "peek",
    value: function peek() {
      if (this.isEmpty()) {
        var e = new Error();
        e.name = "EmptyHeapError";
        e.message = "Cannot peek at root, heap is empty";
        throw e;
      }
      return this.heap[0];
    }

    /**
     * isEmpty - description
     *
     * @return {Boolean}  return true if empty, false otherwise
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      if (this.length === 0) {
        return true;
      } else {
        return false;
      }
    }

    /**
     * isEmpty - description
     *
     * @return {Boolean}  return true if empty, false otherwise
     */

  }, {
    key: "isFull",
    value: function isFull() {
      if (this.length === this.heap.length) {
        return true;
      } else {
        return false;
      }
    }

    /**
     * size - The size of the heap
     *
     * @return {Number}  The size of the heap.
     */

  }, {
    key: "size",
    value: function size() {
      return this.length;
    }

    /**
     * toString - Makes the whole tree readable in the console
     *
     * @return {String}  Nice string representing the heap.
     * @todo write the function.
     */

  }, {
    key: "toString",
    value: function toString() {
      return "";
    }

    /**
     * The old array is removed by pointing the heap array variable to referencing a new array,
     * if array is not referenced by outside objects, the garbage collector will remove it from memory, and there should not, be any
     * memory leakage.
     *
     * @return {void}  returns nothing
     */

  }, {
    key: "empty",
    value: function empty() {
      this.heap.fill(null);
      this.length = 0;
    }
  }]);

  return BinaryHeap;
}();

exports.default = BinaryHeap;

/***/ })
/******/ ]);
});