function Point(x, y) {
  this.x = x 
  this.y = y 
}
Point.prototype.toString = function() { 
  return `(${this.x}, ${this.y})` 
}


function Shape() {}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
}
Shape.prototype.move = function(x, y) {
  this.position = new Point(x, y)
}


function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Shape

Circle.prototype.diameter = function() {
  return 2 * this.radius
}
Circle.prototype.area = function() {
  return Math.PI * (this.radius * this.radius)
}
Circle.prototype.circumference = function() {
  return 2 * Math.PI * this.radius
}

function Side(length) {
  this.length = length
}

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides
}
Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Shape

Polygon.prototype.perimeter = function() {
  return this.sides.reduce(function(sum, n) {
    return sum + n.length
  }, 0)
}
Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

function Quadrilateral(a, b, c, d) {
  let sides = [new Side(a), new Side(b), new Side(c), new Side(d)]
  Polygon.call(this, sides)
}
Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Polygon

function Rectangle(width, height) {
  this.width = width
  this.height = height
  Quadrilateral.call(this, width, height, width, height)
}
Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Quadrilateral

Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(length) {
  Rectangle.call(this, length, length)
}
Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Rectangle
Square.prototype.listProperties = function() {
  return this.hasOwnProperties
}

function Triangle(a, b, c) {
  let sides = [new Side(a), new Side(b), new Side(c)]
  Polygon.call(this, sides)
}
Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Polygon





