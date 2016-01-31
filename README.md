#JS-monads-part3
 
This is the third page of the `Javascript Monads` series.  

The project's running code is at [http://schalk.net](http://schalk.net). You can run the binary on port 3093 by entering `dist/build/server/server`. The named monads and and most of the functions demonstrated here are in a script, so you can press F12 and experiment with them in the console.

The flow of the interactive websockets game running at [http://schalk.net:3093](http://schalk.net:3093) is controlled by the following tree of monads:

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
    constructor() {

      this.p = function() {};

      this.release = () => {
        return this.p();
      }
 
      this.bnd = func => {
          this.p = func;
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
    return ret(x);
  }
  
  var next2 = function next(x,condition,mon2) {
    if (condition) {
      mon2.release();
    }
    return ret(x);
  }
```
Scanning down the lines of "updateCalc()" (above), we see that the first time it is called, functions are stored in the "p" attributes of mMZ2, mMZ4, mMZ5, mMZ6, and mMZ7. Then a computation is performed, and if the result is "18" or "20",  either mM4 or mM5 is released causing the function p to execute. If the result is a multiple of the number "5", mMZ5 is released. And if the result is "25", mMZ6.p is called. Finally, if the number of goals is "3", mMZ7 is released, ending the game.

"ret" is the similar to "return" in Haskell. For all values v, monads m, and functions f mapping values to monads, ret(v).bnd(f) === f(v) and m.bnd(ret) = m. The definition of "ret" is 
```javascript
var ret = function ret(v) {
  var mon = new Monad(v, 'anonymous');
  return mon;
}
```
And similar to Haskell monads, composition is associative; that is, m.bnd(f).bnd(g) === m.bnd(x => f(x).bnd(g)). But this project isn't about category theory; it is about organizing javascript code into concise, maintainable chains and trees of operations, as the game example demonstrates. It, along with two other examples, are demonstrated online at [schalk.net:3093](http://schalk.net:3093).
##Some Elementary Operations
For any monad m and function f mapping values to monads:

m.bnd(m2.ret) seems to give monad m2 m's value. Actually, m2 is abandoned to the garbage collector and the identifier "m2" gets re-asigned to a new monad with the same value as m; i.e., m.x.

m.bnd(f).bnd(m2.ret) leaves m unchanged, but re-assigns "m2" to a monad with a value of f(m.x).

m.bnd(f).bnd(m.ret) seems to change m's value, m.x, to f(m.x). Under the hood, it actually re-assigns the identifier "m" to a new monad with a value of f(previous m.x).

m.bnd(x => m2.bnd(y => m3.bnd(z => m4.ret(f(x,y,z)) leaves m, m2, and m3 unchanged, but provides their values as arguments to f, giving mM4 the value f(mM1.x, mM2.x, mM3.x). That result could also be accomplished by simply running ret(f(mM1.x, mM2.x, mM3.x)).bnd(mM4.ret) (see "m.bnd(mM2.ret)" above).

"bnd()" is designed to take as arguments functions mapping values to monads, but functions mapping values to values also work. For example, ret(4).bnd(x => x\*x\*x) returns the number 64.


##Caution

Assigning an identifier to a named monad can lead to unexpected results if you don't carefully think about what you are doing. Consider:
```javascript
mM1.ret(2)
var a = mM1
a.ret(77)

console.log('a.x ===', a.x)       // a.x === 2
console.log('mM1.x ===', mM1.x)   // mM1.x === 77
```
"var a = mM1" assigned the identifier "a" to a monad with a value of 2 and an id of "mM1", so a.ret(77) assigned "mM1" to a new monad with a value of 77 and an id of "mM1", replacing the previous monad named "mM1". "a" still points to a monad with a value of 2.

I can't think of any reason to create an identifier such as "a" with remote control over the behavior of a monad such as mM1 in the above example, so my advice is to refrain from creating variables that point to existing monads.  


