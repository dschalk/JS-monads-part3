"use strict";

import snabbdom from 'snabbdom';
import h from 'snabbdom/h';
var Group = 'solo';
var Name = 'Fred';

const monad = h('pre', {style: {color: '#AFEEEE' }}, `  class Monad {
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
` );  
  
const monadIter = h('pre', {style: {color: '#AFEEEE' }}, `  class MonadIter {
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
` );  

const steps = h('pre', {style: {color: '#AFEEEE' }}, 
`  function updateSteps() {
    mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret)
     .bnd(() => mM1.ret('Click the mMZ2.release() button to proceed')
     .bnd(() => mMZ2
     .bnd(() => mM2.ret('Click it again.')
     .bnd(() => mMZ2
     .bnd(() => mM3.ret('Keep going')
     .bnd(() => mMZ2
     .bnd(() => mM4.ret('One more')
     .bnd(() => mMZ2
     .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret)
     .bnd(mM4.ret)
      ))))))))) 
  oldVnode = patch(oldVnode, newVnode()); 
}  ` 
);  

const dice = h('pre', {style: {color: '#AFEEEE' }}, 
`function updateNums(e) {
  mM2.ret([e.target.value, e.target.textContent]) 
  .bnd(() => mM3)
  .bnd(push,mM2.x[1])
  .bnd(() => {mM1.x[mM2.x[0]] = ""; return mM5;})
  .bnd(update)
  if (mM3.x.length === 2 && mM8.x !== 0) {updateCalc();}
}

function updateOp(e) {
  mM8.ret(e.target.textContent).bnd(update);
  if (mM3.x.length === 2 && mM8.x !== 0) {updateCalc();}
}

function updateCalc() { 
  ret('start').bnd(() => (
      ( mMZ2.bnd(() => mM13
                    .bnd(score,1)
                    .bnd(next2, ((mM13.x % 5) === 0), mMZ5) 
                    .bnd(newRoll)) ),
      ( mMZ4.bnd(() => mM13
                    .bnd(score,3)
                    .bnd(next2, ((mM13.x % 5) === 0), mMZ5) 
                    .bnd(newRoll)) ),
          ( mMZ5.bnd(() => mM13
                        .bnd(score,5)
                        .bnd(next, 25, mMZ6)
                        .bnd(newRoll)) ),
              ( mMZ6.bnd(() => mM9.bnd(score2) 
                            .bnd(next,3,mMZ7)) ),
                  (mMZ7.bnd(() => mM13.bnd(winner)) ),                 
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

var score = function(v,j) {
  socket.send('CG#$42,' + Group + ',' + Name + ',' + j + ',' + 0);
  return ret(v + j);
}

var score2 = function score2() {
  mMgoals.ret(mMgoals.x + 1);
  let j = -25;
  socket.send('CG#$42,' + Group + ',' + Name + ',' + j + ',' + 1);
  mM13.ret(0);
  return mMgoals;
}

var newRoll = function(v) {
  socket.send(\`CA#$42,${Group},${Name},6,6,12,20\`);
  let mon = new Monad(v);
  return mon;
};
}  `
);  

const send = h('pre', {style: {color: '#AFEEEE' }}, 
`    var send = function(event) {
        socket.send("CA#$42,solo," + LoginName +",6,6,12,20");
    };`
);  

const messages1 = h('pre', {style: {color: '#AFEEEE' }}, 
`  case "CB#$42":  // Updates the scoreboaard.
    let scores = extra.split("<br>");
    mMscbd.ret(scores)
    .bnd(updateScoreboard)
    .bnd(update); 
  break;

  case "CD#$42":  // Updates the message display.
    gameArray.splice(0,3);
    let message = gameArray.reduce((a,b) => a + ", " + b)
    let str = sender + ': ' + message;
    mMmsg
    .bnd(push,str)
    .bnd(updateMessages)
    .bnd(update);
  break;  `
);  

const messages2 = h('pre', {style: {color: '#AFEEEE' }}, 
`  var updateScoreboard = function updateScoreboard(v) {
    mMscoreboard.ret([]);
    let ar = mMscbd.x;
    let keys = Object.keys(ar);
    for (let k in keys) {
      mMscoreboard.bnd(unshift, ar[k])
      .bnd(unshift, h('br'));
    }
      mMscoreboard.bnd(unshift, h('br'))
      .bnd(unshift, h('br'))
      .bnd(unshift,'player [score] [goals]')
    return mMscoreboard;
  }
  
  var updateMessages = function updateMessages(v) {
    mMmessages.ret([]);
    let ar = mMmsg.x;
    let keys = Object.keys(ar);
    for (let k in keys) {
      mMmessages.bnd(unshift, ar[k])
      .bnd(unshift, h('br'));
    }
    return mMmessages;
  }  `
);  

const messages3 = h('pre', {style: {color: '#AFEEEE' }}, 
`  mMscbd.ret(scores)
  .bnd( () => mMscoreboard
  .bnd(updateChildren,mMscbd)
  .bnd(update) )
`
);  

const numbers = h('pre', {style: {color: '#AFEEEE' }}, 
`var hyp = function hyp(x,y) {
  return Math.sqrt(x*x + y*y);
};
`
);  

const numbers2 = h('pre', {style: {color: '#AFEEEE' }}, 
`var test2 = function test2() {
  let k = 0;
  let j = 0;
  mM4.ret({});
  for (j=0; j<101; j+=1) {
    for (k=0; k<5000; k+=1) {
      mMZ7.block().bnd(() => mM4
      .bnd(addObj, j, [j,k]))
      mM3.bnd(next, ((hyp(j,k) - Math.floor(hyp(j,k))) === 0), mMZ7)
    }
  }
}
`
);  

const numbers3 = h('pre', {style: {color: '#AFEEEE' }}, 
`  mMnbrs.ret([]);
  let ob = test2();
  mMnbrs.x.push('The square root of the sum of the squares is a natural number:');
  for (let ants in ob) {mMnbrs.x.push(ob[ants][0] + 
    ' and  ' + ob[ants][1] + ' ________ result: ' + (hyp(ob[ants][0],ob[ants][1])) )};
  mMnumbers
  .bnd(updateChildren,mMnbrs)
  .bnd(update);
`
);  


const pause = h('pre', {style: {color: '#AFEEEE' }}, 
`  var pause = function(x,t,mon2) {
    let time = t*1000;
    setTimeout( function() {
      mon2.release();
    },time );
    return mon2;
  };
`
);

const pauseDemo = h('pre', {style: {color: '#AFEEEE' }}, 
`  function pauseDemo() {
    mM1.ret("Wait two seconds.")
      .bnd(update)
      .bnd(pause,2,mMZ1)
      .bnd(() => mM1.ret("Goodbye")
      .bnd(update)))
  }
`
);  

const next = h('pre', {style: {color: '#AFEEEE' }}, 
`  var next = function next(x,bool,mon2) {
    if (bool) {
      mon2.release();
    }
    let mon = new Monad(x);
    return mon
  }  `
);  


const updateNext = h('pre', {style: {color: '#AFEEEE' }}, 
`  function updateNext() {
    mMZ2.release();  
    oldVnode = patch(oldVnode, newVnode());
  }  `
);  


export default {monad, monadIter, steps, dice, send, next, updateNext, 
  pause, pauseDemo, messages1, messages2, messages3, numbers, numbers2, numbers3};




