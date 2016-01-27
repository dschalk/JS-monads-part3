hJS-monads-part3
 
This is the third page of the `Javascript Monads` series.  

The project's running code is at [http://schalk.net](http://schalk.net). You can run the binary on port 3093 by entering `dist/build/server/server`. The named monads and and most of the functions demonstrated here are in a script, so you can press F12 and experiment with them in the console.

The fairly complex behavior of an interactive websockets game is concisely defined in this tree of monads:

```javascript
  function updateCalc() { 
    console.log('In updateCalc');
    ret('start').bnd(() => (
        ( mMZ2.block().bnd(() => mM13
                      .bnd(score,1)
                      .bnd(next2, ((mM13.x % 5) === 0), mMZ5) 
                      .bnd(newRoll)) ),
        ( mMZ4.block().bnd(() => mM13
                      .bnd(score,3)
                      .bnd(next2, ((mM13.x % 5) === 0), mMZ5) 
                      .bnd(newRoll)) ),
            ( mMZ5.block().bnd(() => mM13
                          .bnd(score,5)
                          .bnd(next, 25, mMZ6)
                          .bnd(newRoll)) ),
                ( mMZ6.block().bnd(() => mM13
                              .bnd(score2) 
                              .bnd(() => mMgoals.bnd(next,3,mMZ7))) ),
                    (mMZ7.block().bnd(() => mM13.bnd(winner)) ),                 
        (mM3.bnd(x => mM7
                      .ret(calc(x[0], mM8.x, x[1]))
                      .bnd(next, 18, mMZ4)
                      .bnd(next, 20, mMZ2) 
                      .bnd(() => mM1.bnd(push,mM7.x)
                      .bnd(mM1.ret)
                      .bnd(displayOff, ((mM1.x.length)+''))
                      .bnd(() => mM3
                      .ret([])
                      .bnd(() => mM4
                      .ret(0).bnd(mM8.ret)
                      .bnd(() => mM5.ret('Done')
                      .bnd(update) ))))) ) 
    ))     
  }
```

The "mM" prefix designates monads. The "mMZ" prefix specifically designates instances of MonadIter. Here is how the monad classes are defined:

```javascript
  class Monad {
    constructor(z,g) {

      this.x = z;
      if (arguments.length === 1) {this.id = 'anonymous'}
      else {this.id = g}

      this.bnd = (func, ...args) => {
        return func(this.x, ...args);
      };

      this.ret = a => {
        var str = this.id
        if (str === 'anonymous') {return new Monad(a,'anonymous')};
        eval(str + '= new Monad(a,' + "str" + ')'); 
        return window[this.id];
      };
    }
  };

  class MonadIter {
    constructor(z,g) {

      this.x = z;
      this.id = g;
      this.flag = false;
      this.p = [];

      this.block = () => {
        this.flag = true;
        return this;
        }

      this.release = () => {
        let self = this;
        let p = this.p;
        p[0](self.x, ...p[1]);
        self.flag = false;
        return self;
      }
 
      this.bnd = (func, ...args) => {
        let self = this;
        if (self.flag === false) {
          func(self.x, ...args);
          return self;
        }
        if (self.flag === true) {
          self.p = [func, args];
          return self;
        }
      }
    }
  }
```
Here are the definitions of "next" and "next2":

```javascript
  var next = function next(x,y,mon2) {
    if (x === y) {
      mon2.release();
    }
    let mon = new Monad(x);
    return mon
  }
  
  var next2 = function next(x,condition,mon2) {
    if (condition) {
      mon2.release();
    }
    let mon = new Monad(x);
    return mon
  }
```
The first time updateCalc runs, functions and arguments are stored in the "p" attributes of mMZ2, mMZ4, mMZ5, mMZ6, and mMZ7. Then a computation is performed, and if the result is "18" or "20",  either mM4 or mM5 is released and the function in its "p" attribute executes on the stored arguments. If the result is a multiple of the number "5", mMZ5 is released. And if the result is "25", mMZ6.p[0] executes on mMZ6[1]. Finally, if the number of goals is "3", mMZ7 is released, ending the game.

##Some Elementary Operations
m.bnd(m2.ret) seems to give monad m2 m's value. Actually, m2 is abandoned to the garbage collector and the identifier "m2" gets re-assigned to a new monad with value m.x.

m.bnd(f).bnd(m2.ret) leaves m unchanged, but re-assigns "m2" to a monad with a value of  f(m.x).

m.bnd(f).bnd(m.ret) re-assigns the identifier "m" to a new monad with a value of f(m.x).

m.bnd(x => m2.bnd(y => m3.bnd(z => m4.bnd(f,x,y,z) leaves m, m2, and m3 unchanged, but provides their values as arguments to f in m4.bnd(f,x,y,z).

Anonymous monads can be created by the function "ret", defined as follow:
```javascript
var ret = function ret(v) {
  var mon = new Monad(v, 'anonymous');
  return mon;
}
```
For example, ret(a).bnd(f).bnd(m.ret) re-assigns monad m's identifier "m" to a new monad with a value of f(a). 





