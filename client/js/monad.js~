"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }


var Monad = function Monad(z,g) {
  var _this = this;

  _classCallCheck(this, Monad);

  this.x = z;
  if (arguments.length === 1) {this.id = 'anonymous'}
  else {this.id = g}

  this.bnd = function (func) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return func.apply(undefined, [_this.x].concat(args));
  };

  this.ret = function (a) {
    var str = _this.id
    if (str === 'anonymous') {return new Monad(a,'anonymous')};
    eval(str + '= new Monad(a,' + "str" + ')'); 
    return window[_this.id];
  };

  this.fmap = function (f) {
    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    var mon = arguments.length <= 1 || arguments[1] === undefined ? _this : arguments[1];

    mon.ret(f.apply(undefined, [mon.x].concat(args)));
    return mon;
  };
};

;
var MonadIter = function MonadIter(z, g) {
  var _this = this;

  _classCallCheck(this, MonadIter);

  this.x = z;
  this.id = g;
  this.flag = false;
  this.p = [];

  this.block = function () {
    _this.flag = true;
    return _this;
  };

  this.release = function () {
    var self = _this;
    var p = _this.p;
    p[0].apply(p, [self.x].concat(_toConsumableArray(p[1])));
    self.flag = false;
    return self;
  };

  this.bnd = function (func) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var self = _this;
    if (self.flag === false) {
      func.apply(undefined, [self.x].concat(args));
      return self;
    }
    if (self.flag === true) {
      self.p = [func, args];
      return self;
    }
  };
};

var ret = function ret(v) {
  var mon = new Monad(v, 'anonymous');
  return mon;
}

var cube = function(v) {
  var mon = new Monad(v*v*v);
  return mon;
}

var add = function(a,b) {
  var mon = new Monad(a+b);
  return mon;
}

var M = function M(a,b) {
  return new Monad(a,b);
};


var mM1 = M([],'mM1');
var mM2 = M(0,'mM2');
var mM3 = M(0,'mM3');
var mM4 = M([],'mM4');
var mM5 = M(0,'mM5');
var mM6 = M(0,'mM6');
var mM7 = M(0,'mM7');
var mM8 = M(0,'mM8');
var mM9 = M(0,'mM9');
var mM10 = M(0,'mM10');
var mM11 = M([],'mM11');
var mM12 = M(0,'mM12');
var mM13 = M(0,'mM13');
var mM14 = M(0,'mM14');
var mM15 = M(0,'mM15');
var mM16 = M(0,'mM16');
var mM17 = M(0,'mM17');
var mM18 = M(0,'mM18');
var mM19 = M(0,'mM19');
var mMscbd = M([],'mMscbd');
var mMmessages = M([],'mMmessages');
var mMscoreboard = M([],'mMscoreboard');
var mMmsg = M([],'mMmsg');
var mMgoals = M([],'mMgoals');
var mMnbrs = M([],'mMnbrs');
var mMnumbers = M([],'mMnumbers');

var MI = function MI(a, b) {
  return new MonadIter(a, b);
};

var mMZ1 = MI(false, 'mMZ1');
var mMZ2 = MI(false, 'mMZ2');
var mMZ3 = MI(false, 'mMZ3');
var mMZ4 = MI(false, 'mMZ4');
var mMZ5 = MI(false, 'mMZ5');
var mMZ6 = MI(false, 'mMZ6');
var mMZ7 = MI(false, 'mMZ7');
var mMZ8 = MI(false, 'mMZ8');
var mMZ9 = MI(false, 'mMZ9');

var toNums = function toNums(x) {
  let y = x.map(x => parseFloat(x));
  let mon = new Monad(y);
  return mon; 
};

var calc = function calc(a,op,b) { 
  var result;
  switch (op) {
      case "add": result = (parseFloat(a) + parseFloat(b));
      break;
      case "subtract": result = (a - b);
      break;
      case "mult": result = (a * b);
      break;
      case "div": result = (a / b);
      break;
      case "concat": result = (a+""+b)*1.0;
      break;
      default : 'Major Malfunction in calc.';
  }
  return result;
};

var pause = function(x,t,mon2) {
  mon2.block();
  let time = t*1000;
  setTimeout( function() {
    mon2.release();
  },time );
  return mon2;
};

var push = function push(x,v) {
  x.push(v);
  let mon = new Monad(x);
  return mon;
};

var unshift = function unshift(x,v) {
  x.unshift(v);
  let mon = new Monad(x);
  return mon;
};

var clean = function clean(x) {
    console.log('Before cleanx ', x);
    let cleanX = x.filter(x => (x !== "" && x !== undefined));
    console.log('After cleanX ', cleanX);
    mM9.ret(cleanX.length);
    let mon = new Monad(cleanX);
    return mon;
};
  
var toFloat = function toFloat(x) {
  var newx = x.map(function (a) {
    return parseFloat(a);
  });
  let mon = new Monad(newx);
  return mon;
};

var splice = function splice(x,i) {
  let ar = x.splice(i,1);
  let mon = new Monad(ar);
  return mon;
}

var next = function next(x,condition,mon2) {
  if (condition) {
    mon2.release();
  }
  let mon = new Monad(x);
  return mon
}

var addObj = function addObj(a,mon,key,val) {
  mon.x[key] = val;
  return mon;
}

var hyp = function hyp(x,y) {
  return Math.sqrt(x*x + y*y);
};

var test2 = function test2() {
  let k = 0;
  let j = 0;
  mM4.ret({});
  for (j=0; j<101; j+=1) {
    for (k=0; k<50000; k+=1) {
      mMZ7.block().bnd(() => mM4
      .bnd(addObj, j, [j,k]))
      mM3.bnd(next, ((hyp(j,k) - Math.floor(hyp(j,k))) === 0), mMZ7)
    }
  }
  return mM4.x;
}

var doub = function doub(v) {
  let mon = new Monad(v + v);
  return mon;
};

var square = function square(v) {
  let mon = new Monad(v * v);
  return mon;
};

var mult = function mult(x, y) {
  let mon = new Monad(x * y);
  return mon;
};


var cu = function cu(x) {
  return x * x * x;
};
var sq = function sq(x) {
  return x * x;
};
var du = function du(x) {
  return x * x;
};
var ad = function ad(a, b) {
  return a + b;
};
var id = function id(x) {
  return x;
};
var lo = function lo(x) {
  return console.log(x);
};

var test5 = function test5(m) {
  var x = m.x;
  m.ret(x + 3).bnd(add, 1).bnd(mMS2.ret).bnd(add, 1).bnd(doub);
};

var test6 = function test6() {
  mMS1.ret(3).fmap(ad, mMS2, mMS1.x).fmap(du).fmap(ad, mM1, mMS1.x).fmap(cu).fmap(id, mMS3).bnd(add, mMS2.x + 1000);
};

var delay = function delay(x, mon) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000);
  });
};

var increment = function increment() {
  VAL = VAL + 1;
};

