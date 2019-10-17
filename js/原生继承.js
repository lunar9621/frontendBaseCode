var o = {
    name: 'feng',
    books: ['html', 'css']
  }
  function changeO(object) {
    function F(){}
    F.prototype = object
    var Fobject = new F()
    Fobject.name = 'zhang' //子类上没有这个属性，创建并覆盖原型同名属性
    Fobject.books.push('js')//直接操作books这个属性 ，但是子类中没有这个属性，所以到原型链上去寻找，
    //因而操作的是原型链上的这个属性，改变原型上的此值
    return Fobject
  }
  var Fobject = changeO(o)
  console.log('o: ', o)
  console.log('fobject: ',Fobject)