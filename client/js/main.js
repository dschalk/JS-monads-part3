"use strict";

import cow from './cow';
import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

var Group = 'solo';
var afocus = {autofocus: false};
var signinFocus = {autofocus: false};
var DS_T = 8000;
var SETINTERVAL = true;
var READY = 0;

var updateScoreboard = function updateScoreboard(v) {
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
}

function createWebSocket(path) {
    let host = window.location.hostname;
    if(host == '') host = 'localhost';
    let uri = 'ws://' + host + ':3093' + path;
    let Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;
    return new Socket(uri);
}

var socket = createWebSocket('/');
var Name;

socket.onopen = function (event) {
    console.log('cow onopen ', event);
    update0();
};

var send = function(event) {
  socket.send(`CA#$42,${Group},${Name},6,6,12,20`);
};

const patch = snabbdom.init([
  require('snabbdom/modules/class'),          // makes it easy to toggle classes
  require('snabbdom/modules/props'),          // for setting properties on DOM elements
  require('snabbdom/modules/style'),          // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
]);
https://github.com/paldepind/snabbdom 
var oldVnode = document.getElementById('placeholder');

function view(m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, 
                m12, m13, m14, m15, m16, m17, m18, m19, mI1, mI2, mI3, mI4, mI5, mI6, mI7, mI8, mI9) { 
      console.log('READY: ', READY);
  return h('div',{style: style3}, 
   [  h('div',{style: { width: '60%', textAlign: 'left', marginLeft: 40, marginRight: '17%', fontSize: '20px'}}, 
    [ h('div', [
      h('a', { props: {href: '#signin'}, style: {color: '#FFBBBB'}, on: {click: updateFocus}}, 'Game/Chat'  ),
    ] ),
      h('h1', {style: {textAlign: 'center', color: '#ffba66'}}, 'JS-monads-part3'),
      h('br'),  
      h('span', 'This is the third page in the new Javascript Monads series. Links to the detailed explanations of the basic monad constructor, "Monad" and its methods and the arguments they take can be found at '),
      h('a', {props: {href: 'http://schalk.net' },  style: {color: '#EECCFF'}},' http://schalk.net'), 
      h('span', ' and a code repo at '),
      h('a', {props: {href: 'https://github.com/dschalk?tab=repositories'}, style: {color: '#EECCFF'}}, ' github repos' ),
      h('p', 'This project is not about mathematics, it is about organizing and streamlining code. The monad values displayed in the right column are there for demonstrations, but they can also provide instant debugging information. The values of all of the monads can be found by typing them in the browser console since they are provided by a script specified in index.html. These entities which I am calling "monads" are versitile and rebust, and they function well in chains, propagating values from link to link as far as they are needed and always having access to one another. They facilitate the writing of easy-to-understand and modify asynchronous code. And they do obey a Javascript equivalent of the Haskell monad laws, with stand-alone "ret" being the left and right identity and commutivity; that is, the order of evaluation in sequences does not affect the result.'  ), 
      h('p', 'Here is the basic monad constructor: ' ),
      cow.monad,
      h('p', 'And here is MonadIter: ' ),
      cow.monadIter,
      h('p', { props: { id: 'signin' }}, 'To see a simple use of MonadIter, clickk the following button and then click the mMZ2.release() button four times.'  ),
      h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: updateSteps }, style: style4},
            [ cow.steps ],  ),
      h('p', {props: {id: 'rules'}}, ),    
      h('br', ),    
      h('button', {on: { mouseenter: update6e, mouseleave: update6l, click: updateNext }, style: style6}, [ cow.updateNext ],  ),  
      h('br', ),    
      h('p', {style: inputStyle1}, 'Now, a demonstration of monads handling websockets messages. In order to create a unique socket, please enter some name.'  ),
      h('input', { on: {keydown: updateLogin, click: updateFocus}, style: inputStyle1, props: {signinFocus }} ),
      h('button', {on: { mouseenter: update8e, mouseleave: update8l, click: updateNums }, props: {value: 0, id: '0'}, style: style8},
            m1[0]   ),
      h('button', {on: { mouseenter: update9e, mouseleave: update9l, click: updateNums }, props: {value: 1, id: '1'}, style: style9},
            m1[1]   ),
      h('button', {on: { mouseenter: update10e, mouseleave: update10l, click: updateNums }, props: {value: 2, id: '2'}, style: style10},
            m1[2]   ),
      h('button', {on: { mouseenter: update11e, mouseleave: update11l, click: updateNums }, props: {value: 3, id: '3'}, style: style11},
            m1[3]   ),
      h('p', ' ',  ),
      h('button', {on: { mouseenter: update12e, mouseleave: update12l, click: updateOp }, style: style12},
            m17[0]   ),
      h('button', {on: { mouseenter: update13e, mouseleave: update13l, click: updateOp }, style: style13},
            m17[1]   ),
      h('button', {on: { mouseenter: update14e, mouseleave: update14l, click: updateOp }, style: style14},
            m17[2]   ),
      h('button', {on: { mouseenter: update15e, mouseleave: update15l, click: updateOp }, style: style15},
            m17[3]   ),
      h('button', {on: { mouseenter: update16e, mouseleave: update16l, click: updateOp }, style: style16},
            m17[4]   ),
      h('p', '  '  ),
      h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: updateRoll }, style: styleRoll },
                     `ROLL`   ),
      h('p', {style: styleRoll}, 'Now click ROLL. '  ),
      h('p', 'When you click a number, it disappears. After two numbers and an operator have been selected, in any order, a computation is performed and the result is placed at the end of the numbers row. Now there are three numbers. After another round, two are left and finally, the last computation can be performed. ',  ),
      h('p', 'You can click ROLL repeatedly and the Haskell server will obligingly provide new numbers. The numbers simulate the roll of four dice; two six-sided, one twelve-sided, and one twenty-sided. '  ),
      h('p', {style: {color: '#EEBBBB'}}, 'RULES: You get one goal for reaching the number 25. Here\'s how you get there: Every time you compute the number 20, mM13.x (your score) gets incremented by 1. Every time you compute "18", your score increases by 3. Every time your score becomes 0 mod 5 (-5, 0, 5, 10, 15, ...) you get 5 more points. When you click ROLL you lose one point. Wheover has the most goals after five minutes wins.' ),
      h('p', 'HINTS: The best way to get off to a good start is to click ROLL and then score 1 point by making the number 20. Score = 5! You hit 0 and got 5 points. You can use the same technique when you reach 5, 10, 15, and 20. Click ROLL when you are at twenty, then compute 20 to get a point, and you jump to 25. Goal! But you can\'t get to 25 from 24. Computing 20 jumps you all the way to 30. No goal; your score has to be exactly 25. '  ),
        
h('p', 'Clicking numbers and operators calls updateNums and UpdateOps, respectively. They call updateCalc. updateCalc (below) clearly displays the flow of the application. First, mMZ2 and mMZ4 get locked, acquiring the code that might eventually get executed in their "p" attribute arrays. Then, in the third part of the tupple, tests are performed that might release the code being held in mMZ2 and mMZ4. "send" requests a new dice roll from the server. Here is the code:' ),
      cow.dice,
      h('p', 'When numbers are clicked, they get pushed into mM3.x, an initially empty array. When an operator is clicked, it replaces "0" as the value of mM8. So when mM3.x.length === 2 and mM8.x !== 0, it is time for the computation to go forward. '  ),
      h('p', 'mM1 holds the initial dice roll and the subsequent arrays of available numbers. When calc returns "20", the player get an additional point and a new roll of the dice. If calc returns 18, the player gets three points. A result of n modulo 5 gains a player five points. A result of 25 add one goal and re-sets the score to zero.'   ),
   h('p', 'MonadIter instances together with the function "pause" provide a way to delay progress along a chain. "pause" is defined as follows:'),
        cow.pause, 
   h('p', 'If you click the button below, some monads will update two seconds later. '  ),
   h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: updatePauseDemo }, style: style4},
            [ cow.pauseDemo ],  ),
      h('p', 'The functions provided to bind are simple. They perform a task, and then return a monad so the chain can continue. The method "fmap" takes ordinary functions which operates on the calling monad\'s value and returns a new monad with the calling monad\s identifier (variable name).  m.fmap(f) assigns f(m.x) to a new monad named "m". Using ordinary functions with bnd does not modify the calling monad, but it does compute values using either the calling monad\'s value or a value provided in the argument provided to bnd.  '  ),
      h('p', 'Using "bnd" with "next", any monad can release any block. At any link, a chain of monads can divide into 2, 3, or any number of chains going there separate ways but still communicating with one another. Large applications can be organized into a single tree. '  ),
      h('div', 'When you log in, the monad column on the right disappears and a scoreboard and chat section open up. You can\'t compete or chat as long as you remain in the default group "solo", even if other people are in group "solo". But if you change to, say, group "chat54" in two separate browser windows, you will see that both windows share rolls of the dice and chat messages they enter. People in separate locations can agree on a group name and compete and chat. If the name is cryptic, something like "c#*&%@@9J#lu88", the chat and the game will likely remain private. If you change to group "test", you might encounter me mucking about on this page, or maybe someone else looking for company by changing to group "test".  '  ),
      h('span', {style: inputStyle1}, 'You will need a socket in order to participate in chats and play the game. A socket is created when you log in. '  ),
      h('br'),
      h('span',  {style: inputStyle1}, 'Enter some name here: ' ),  
      h('input', {style: inputStyle1, on: {keydown: updateLogin},  } ),
      h('h2', {style: {textAlign: 'center', color: '#ffba66'}}, 'Dynamic List Display' ),
      h('p', 'The lists of group members and their scores, and the lists of messages broadcast within each group, are subject to change as scores change and players join or leave the group, and as messages get sent and broadcast to the group. When a group member\'s score changes and when a group member sends a message, the information goes to the server and the server broadcasts the updated state (maintained in a Haskell TMVar) to all group members. In socket.onmessage, the incoming messages are sorted according to their prefixes in a switch block and if the message is a scoreboard update or chat message, one of the following functions is called: ' ),
      cow.messages1,
      h('p', 'And here are the functions which get called: '  ),
      cow.messages2, 
      h('h2', {style: {textAlign: 'center', color: '#ffba66'}}, 'Using MonadIter In Large Computations' ),
      h('p', 'MonadIter can be used to filter results while computations are in progress. For example, suppose I wanted to know if every integer x between 0 and 100 has a counterpart y between 0 and 10,000 such that the square root of x*x + y*y is a whole number. 3 has 4 since the square root of 3*3 + 4*4 is 25, but what about 17, or 95? ' ),
      h('p', 'here is a function for computing the hypotenuse of a right triangle: ' ),
      cow.numbers,
      h('p', 'And here is a function for computing our answer:'  ),
      cow.numbers2,
      h('p', 'Since the keys in objects are unique, if x: [x,y] is in the list and x: [x,y\'] is discovered, x: [x,y\'] displaces x: [x,y]. Since the numbers in the loops increase, we end up with the pair with the highest value of y. Notice that 0 is paired with 10,000, although all values of y between 0 and 10,000 work. I tried to find a match for x bigger than what we get checking y\'s up to 5,000 so I checked up to 1,000,000. The pairs were exactly what I get going up to 5,000. So now I wonder if, for all integers x greater than zero, is there only one integer y such that hyp(x,y) is also an integer. '  ), 
      h('p', 'The large button below shows the final step in the computation. Click it, and the solutions should appear shortly thereafter. '  ),
      h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: updateNumbers }, style: style4},
            [ cow.numbers3 ],  ),
      h('br' ),
      h('br' ),
      h('button', {on: { mouseenter: update12e, mouseleave: update12l, click: updateErase }, style: linkStyle2},
            'ERASE'   ),
      h('div', mMnumbers.x ),
        h('br' ),
        h('br' ),
      h('button', {on: { mouseenter: update12e, mouseleave: update12l, click: updateErase }, style: linkStyle2},
            'ERASE'   ),
        h('br' ),
        h('br' ),
        h('br' ),
      h('span', 'The repository for this open source project is at ' ),
      h('a', {props: {href: 'https://github.com/dschalk?tab=repositories'}, style: {color: '#FFEBCD'}}, 'github.com/dschalk/' ),
      h('div', {style: {height: '300px'}} ),
      h('div', {style: monadStyle}, [  
      h('div',{style: { width: '30%', position: 'fixed', top: '15px', right: '15px', color: '#CCFDDA'}}, [ 
        h('div', {style: linkStyle}, [
        h('button', {on: { mouseenter: update5e, mouseleave: update5l, click: updateGotochat }, style: style5},
            'Go To Chat'  ) ] ),
        h('br'),
        h('span', 'mM1.x: '),
        h('span', {style: styleM}, '  ' + m1),
        h('br'),
        h('span', 'mM2.x: '),
        h('span', {style: styleM}, '  ' + m2),
        h('br'),
        h('span', 'mM3.x: '),
        h('span', {style: styleM}, '  ' + m3),
        h('br'),
        h('span', 'mM4.x: '),
        h('span', {style: styleM}, '  ' + m4),
        h('br'),
        h('span', 'mM5.x: '),
        h('span', {style: styleM}, '  ' + m5),
        h('br'),
        h('span', 'mM6.x: '),
        h('span', {style: styleM}, '  ' + m6),
        h('br'),
        h('span', 'mM7.x: '),
        h('span', {style: styleM}, '  ' + m7),
        h('br'),
        h('span', 'mM8.x: '),
        h('span', {style: styleM}, '  ' + m8),
        h('br'),
        h('span', 'mM9.x: '),
        h('span', {style: styleM}, '  ' + m9),
        h('br'),
        h('span', 'mM10.x: '),
        h('span', {style: styleM}, '  ' + m10),
        h('br'),
        h('span', 'mM11.x: '),
        h('span', {style: styleM}, '  ' + m11),
        h('br'),
        h('span', 'mM12.x: '),
        h('span', {style: styleM}, '  ' + m12),
        h('br'),
        h('span', 'mM13.x: '),
        h('span', {style: styleM}, '  ' + m13),
        h('br'),
        h('span', 'mM14.x: '),
        h('span', {style: styleM}, '  ' + m14),
        h('br'),
        h('span', 'mM15.x: '),
        h('span', {style: styleM}, '  ' + m15),
        h('br'),
        h('span', 'mM16.x: '),
        h('span', {style: styleM}, '  ' + m16),
        h('br'),
        h('span', 'mM17.x: '),
        h('span', {style: styleM}, '  ' + m17),
        h('br'),
        h('span', 'mM18.x: '),
        h('span', {style: styleM}, '  ' + m18),
        h('br'),
        h('span', 'mM19.x: '),
        h('span', {style: styleM}, '  ' + m19),
        h('br'),
        h('span', 'mMnbrs.x: '),
        h('span', {style: styleM}, '  ' + mMnbrs),
        h('br'),
        h('br'),
        h('br'),
        h('button', {on: { mouseenter: updateRe, mouseleave: updateRl, click: updateR }, style: styleR},
                   `REFRESH`   ),
        h('br', ),           
        h('br', ),           
        ])  
      ]),

      h('div', {style: chatStyle}, [  
        h('div',{style: { width: '30%', position: 'fixed', top: '40px', right: '15px', color: '#CCFDDA'}}, [ 
        h('button', {on: { mouseenter: update5e, mouseleave: update5l, click: updateGoback }, style: style5},
            'Go Back'  ),
        h('a', { props: {href: '#rules'}, style: {color: '#FFBBBB'}}, 'Game Rules'  ),
        h('br', ),    
        h('span', 'Change group: '  ),   
        h('input', {style: messageStyle, on: {keydown: updateGroup}, props: afocus } ),
        
        h('br', ),           
        h('div', `Group: ${Group}` ),
        h('hr' ),
        h('h3', {style: {textAlign: 'center', color: '#DDBBBB'}}, 'Score Board' ),
        h('div', {props: {id:'scoreboard'}, style: {color: '#CCFDCB', fontSize: '24px'}}, mMscoreboard.x ),
        h('hr' ),
        h('h3',  {style: {textAlign: 'center', color: '#DDBBBB' }}, 'Chat Messages'   ),
        h('p', {style: styleRoll}, 'Enter message here: ' ),
        h('br' ),
        h('input', {on: {keydown: updateMessage}, style: messageStyle } ),
        h('div', {props: {id:'messages'}, style: {color: '#DDBBBB' }}, mMmessages.x ),
        h('br' ),
        h('hr' ),
        h('p' ),
        h('span', 'Time remaining: '  ),  
        h('span', {style: {color: '#FF0000', fontSize: '32px' }}, ''+(DS_T/1000)  ),
        h('br' ),
        h('br' ),
        h('span', 'Score: '  ),
        h('span', {style: {color: '#FF0000', fontSize: '32px' }}, mM13.x ),  
        h('br' ),
        ]) 
      ])
    ]) 
  ])  
}  

var newVnode  = () => {
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mM9.x,
  mM10.x, mM11.x, mM12.x, mM13.x, mM14.x, mM15.x, mM16.x, mM17.x, mM18.x, mM19.x, mMZ1.x, 
  mMZ2.x, mMZ3.x, mMZ4.x, mMZ5.x, mMZ6.x, mMZ7.x, mMZ8.x, mMZ9.x);
  return newVnode;
}

function update0() {
  oldVnode = patch(oldVnode, newVnode());
}

var score = function(v,j) {
  let k = 0;
  if (mM13.x == 25) {k = 1};
  socket.send('CG#$42,' + Group + ',' + Name + ',' + j + ',' + k);
  let mon = new Monad(v);
  return mon;
}

var newRoll = function(v) {
  socket.send(`CA#$42,${Group},${Name},6,6,12,20`);
  let mon = new Monad(v);
  return mon;
};

function updateCalc() { 
  READY = 0;
  console.log('IN updateCalc');
  monadStyle = inputStyleB;
  chatStyle = inputStyleA;
  ret('start').bnd(() => (
      ( mMZ2.block()
                    .bnd(() => mM14
                    .ret('Score: ' + (mM13.x + 1))
                    .bnd(() => mM13
                    .ret(mM13.x + 1)
                    .bnd(score,1)
                    .bnd(newRoll))) ),

      ( mMZ4.block()
                    .bnd(() => mM14
                    .ret('Score: ' + (mM13.x + 3))
                    .bnd(() => mM13
                    .ret(mM13.x + 3)
                    .bnd(score,3)
                    .bnd(newRoll))) ),
      ( mMZ5.block()
                    .bnd(() => mM14
                    .ret('Score: ' + (mM13.x + 5))
                    .bnd(() => mM13
                    .ret(mM13.x + 5)
                    .bnd(score,5)
                    .bnd(newRoll))) ),
      ( mMZ6.block()
                    .bnd(() => mM17
                    .ret('Goals: ' + (mMgoals.x + 1))
                    .bnd(() => mMgoals
                    .ret(mMgoals.x + 1)
                    .bnd(() => mM13
                    .ret(0)
                    .bnd(score,-25)
                    .bnd(newRoll)))) ),     
       (mM3
                    .bnd(x => mM7.ret(calc(x[0], mM8.x, x[1]))
                    .bnd(x => mM1.bnd(push, x).bnd(x => mM1.ret(x))
                    .bnd(clean).bnd(x => mM1.ret(x))
                    .bnd(next, (mM7.x == 18), mMZ4)
                    .bnd(next, (mM7.x == 20), mMZ2) 
                    .bnd(next, ((mM7.x == 20 || mM7.x == 18) && (mM13.x % 5) === 0), mMZ5) 
                    .bnd(next, (mM13.x == 25), mMZ6)
                    .bnd(displayOff, (mM1.x.length+''))
                    .bnd(() => mM3
                    .ret([])
                    .bnd(() => mM4
                    .ret(0).bnd(mM8.ret)
                    .bnd(() => mM5.ret('Done')
                    .bnd(update)   ))))) )
  )) 
}

function updateNums(e) {
  socket.send(`EQ#$42,${Group},${Name}`);
  DS_T = 8000;
  READY += 1;
  mM2.ret([e.target.value, e.target.textContent]) 
  .bnd(() => mM3)
  .bnd(push,mM2.x[1])
  .bnd(() => {mM1.x[mM2.x[0]] = ""; return mM5;})
  .bnd(update)
  if (READY === 3) {updateCalc();}
}

function updateOp(e) {
  socket.send(`EQ#$42,${Group},${Name}`);
  DS_T = 8000;
  READY += 1;
  mM8.ret(e.target.textContent);
  if (READY === 3) {updateCalc();}
}

function updateFocus() {
  signinFocus = {autofocus: true};
  update0();
  signinFocus = {autofocus: true};
  update0();
}

var displayOff = function displayOff(x,a) {
  console.log('a, typeof a: ',a,typeof a)
    document.getElementById(a).style.display = 'none';
    let mon = new Monad(x);
    return mon;
};

var displayInline = function displayInline(x,a) {
  console.log('x, a ', x, a);
    document.getElementById(a).style.display = 'inline';
    let mon = new Monad(x);
    return mon;
};

var displayBlock = function displayBlock(x,a) {
    document.getElementById(a).style.display = 'block';
    let mon = new Monad(x);
    return mon;
};

function updateNumbers() {
  linkStyle2 = style2;
  mMnbrs.ret([]);
  let ob = test2();
  console.log('Amulus Quotomuls');
  mMnbrs.x.push('The square root of the sum of the squares is a natural number:');
  for (let ants in ob) {mMnbrs.x.push(ob[ants][0] + 
    ' and  ' + ob[ants][1] + ' ________ result: ' + (hyp(ob[ants][0],ob[ants][1])) )};
  mMnumbers
  .bnd(updateChildren,mMnbrs)
  .bnd(update);
}

function updateErase() {
  linkStyle2 = {display: 'none'};
  mMnumbers.ret([])
  .bnd(update);
}

function updateLogin(e) {
     let v = e.target.value;
     if (v == '' ) {
       return;
     } 
     if( e.keyCode == 13 ) {
       socket.send("CC#$42" + v);
       Name = v;
       inputStyle1 = {display: 'none'};
       styleRoll = style4;
       messageStyle = inputStyleA;
       monadStyle = inputStyleB;
       chatStyle = inputStyleA;
       linkStyle = {display: 'block'};
       mM3.ret([]).bnd(mM2.ret);
       e.target.value = '';
       afocus = {autofocus: true};
       READY = 0;
       update0();
     }
}

function updateGoback() {
       monadStyle = inputStyleA;
       chatStyle = inputStyleB;
       update0();
}

function updateRoll() {
  styleRoll2 = {display: 'none'};    
  monadStyle = inputStyleB;
  chatStyle = inputStyleA;
  mM14
  .ret('Score: ' + (mM13.x - 1))
  .bnd(() => mM13
  .ret(mM13.x - 1)
  .bnd(score,-1))
  .bnd(update);
  console.log('About to leave updateRoll');
  socket.send(`CA#$42,${Group},${Name},6,6,12,20`);
}

function rollDice() { 
  setInterval( function() {
    DS_T -= 1000;
    if (DS_T === 0) { 
      DS_T = 8000;
      socket.send(`EQ#$42,${Group},${Name}`);
      socket.send(`CA#$42,${Group},${Name},6,6,12,20`);
    }
    update0();
  },1000 );
}

function rollD(v) { 
  DS_T = 8000;
  if (SETINTERVAL) {
    setInterval( function() {
      DS_T -= 1000;
      update0();
      if (DS_T === 0) { 
        DS_T = 8000;
        socket.send(`CA#$42,${Group},${Name},6,6,12,20`);
      }
    },1000 );
  }
  SETINTERVAL = false;
  let mon = new Monad(v);
  return mon;
}

function updateGotochat() {
       monadStyle = inputStyleB;
       chatStyle = inputStyleA;
       update0();
}

function updateMessage(e) {
  if( e.keyCode == 13 ) {
    socket.send(`CD#$42,${Group},${Name},${e.target.value}`);
    monadStyle = inputStyleB;
    chatStyle = inputStyleA;
    e.target.value = '';
  }
}

function updatePauseDemo() {
  mM1.ret("Wait two seconds.")
    .bnd(update)
    .bnd(pause,2,mMZ1)
    .bnd(() => mM1.ret("Goodbye")
    .bnd(update))
}

function updateGroup(e) {
  Group = e.target.value;
  if( e.keyCode == 13 ) {
    socket.send(`CO#$42,${e.target.value},${Name},${e.target.value}`);
  }
  oldVnode = patch(oldVnode, newVnode());
}

function updateR(event) {
  mM2.ret(0).bnd(mM3.ret).bnd(mM4.ret).bnd(mM5.ret)
  .bnd(mM6.ret).bnd(mM7.ret).bnd(mM8.ret).bnd(mM9.ret).bnd(mM10.ret).bnd(mM15.ret).bnd(mM16.ret).bnd(mM17.ret).bnd(mM18.ret).bnd(mM19.ret).bnd(mMZ1.ret).bnd(mMZ2.ret).bnd(() => mM1.ret([])).bnd(() => mM14.ret('Score: ' + mM13.x));
  oldVnode = patch(oldVnode, newVnode());
}

function updateSteps(event) {
    mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret)
     .bnd(() => mM1.ret('Click the mMZ2.release() button to proceed')
     .bnd(() => mMZ2.block()
     .bnd(() => mM2.ret('Click it again.')
     .bnd(() => mMZ2.block()
     .bnd(() => mM3.ret('Keep going')
     .bnd(() => mMZ2.block()
     .bnd(() => mM4.ret('One more')
     .bnd(() => mMZ2.block()
     .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret)
     .bnd(mM4.ret)
      ))))))))) 
  oldVnode = patch(oldVnode, newVnode());
}

function updateNext() {
  mMZ2.release()  
  oldVnode = patch(oldVnode, newVnode());
}

function updateEvent(event) {
  mMZ2.ret(event);
  oldVnode = patch(oldVnode, newVnode());
}

oldVnode = patch(oldVnode, newVnode());

socket.onmessage = function(event) {
  console.log(event);
  let gameArray = event.data.split(",");
  let makeStr = x => {
    let l = x.length;
    let str = '';
      for (let i=5; i<l; i+=1) {
        str = str + ', ' + x[i];
      }
    return (x[4] + ' ' + str);
  }
  let d2 = event.data.substring(0,6);
  // let d3 = event.data.substring(2,6);
  let sendersGroup = gameArray[1]; 
  let sender = gameArray[2];
  let extra = gameArray[3];
  let ext4 = gameArray[4];
  let ext5 = gameArray[5];
  let ext6 = gameArray[6];
  let ext7 = gameArray[7];
  let ext8 = gameArray[8];





  /* let group = that.data.group;
   let name = that.state.name;
   let ar = extra.split("<br>");
  let ar2 = ar.map(function (x) {
    return x.split("_")
  })  */
      switch (d2) {
          case "CC#$42":                         // Not broadcast. Login message.
            if (extra === '%#8*&&^1#$%^')  {
              mM6.ret('Name taken');
              //that.setState({info: `You entered a name which is already taken`})
              setTimeout( function () {
                document.location.reload(false);
              },2000);
            }
            else {
              styleRoll = style4;
              styleRoll2 = style2;
              mM6.ret(sender + '\'s socket is now open');
              update0();
            }
      
          break;

          case "CZ#$42":                  // Solutions.
          break;
          
          case "CA#$42":                    // Triggedarkred by ROLL
              DS_T = 8000
              mM1.ret([extra,  ext4,  ext5,  ext6])
              .bnd(() => mM17.ret(['add', 'subtract', 'mult', 'div', 'concat']) 
              .bnd(() => mM3.ret([])
              .bnd(() => mM8.ret(0)
              .bnd(() => mM6.bnd(displayInline,1)
              .bnd(displayInline,2)
              .bnd(displayInline,3)
              .bnd(rollD)
              .bnd(update)  ))));
          break;

          case "DI#$42":                              // Changes data.information .
          break;

          case "CE#$42":                             // Updates numbers during play.
          break;

          case "CB#$42":  // Updates the scoreboaard.
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
          break;






          case "CF#$42":                              // Re-set after a each clculation.
          break;

        case "CH#$42":
          break;

          case "CK#$42":                      // Updates DS_T after each calculation.
          break;

          case "CQ#$42":                 
          break;

          case "DQ#$42":                 
          break;

          case "EQ#$42":                 
            DS_T = 8000;
          break;

          case "FQ#$42":                 
          break;

          case "GQ#$42":                 
          break;

          case "HQ#$42":                 
          break;

          case "CR#$42":                 // Resets the player interface after each round.
          break;

          case "CY#$42": // Triggedarkred by clicking "SCORE!".
          break;

          case "XY#$42":              // Triggedarkred by clicking "SCORE!" after "IMPOSSIBLE".
          break;

          case "DY#$42":                               // Triggered by clicking  "IMPOSSIBLE".
          break;

          case "DC#$42":
          break;

          case "DZ#$42":                                  // NOT IN USE
          break;

          case "IA#$42":
          break;

          default:
          break;
      }
   }

var inputStyle1 = inputStyleA;
var monadStyle = inputStyleA;
var linkStyle = {display: 'none'};
var linkStyle2 = {display: 'none'};

var inputStyleA = { backgroundColor: '#000000', color: '#FFBBBB', display: 'inline'} ;

var inputStyleB = { display: 'none'} ;

var messageStyle = inputStyleB;
var chatStyle = inputStyleB;

var style2 = {backgroundColor: '#000', textAlign: 'left', borderColor: 'darkred', outline: '0px',
  color: '#CCFDCB', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '2px', marginRight: '3px',
  marginLeft: '12px', fontSize: '18px', display: 'inline' };

var style1 = {backgroundColor: 'blue', textAlign: 'left', borderColor: 'lightblue', outline: '0px',
  color: 'yellow', borderRadius: '10px', paddingTop: '1.1px', paddingBottom: '2px', marginRight: '3px',
  marginLeft: '12px', fontSize: '18px', display: 'inline' };

var styleHide = {display: 'none'};

var style3 = { marginTop: '40px', marginLeft: '5%', marginRight: '5%', backgroundColor: '#000', height: '100%' , width: '100%', color: '#FFE4C4', fontSize: '18px', textAlign: 'left' };

var styleM = {color: '#FF000A', marginLeft: '13px', marginBottom: '2px', fontSize: '21px' };

var styleMI = {color: '#FF000A', marginLeft: '7px', marginBottom: '2px', fontSize: '21px' };

var styleRoll = {display: 'none'};
var styleRoll2 = {display: 'none'};

var style0 = style2;

var style4 = style2;
var style4e = style1;
var style4l = style2;

var style5 = style2;
var style5e = style1;
var style5l = style2;

var style6 = style2;
var style6e = style1;
var style6l = style2;

var style7 = style2;
var style7e = style1;
var style7l = style2;

var style8 = style2;
var style8e = style1;
var style8l = style2;

var style9 = style2;
var style9e = style1;
var style9l = style2;

var style10 = style2;
var style10e = style1;
var style10l = style2;

var style11 = style2;
var style11e = style1;
var style11l = style2;

var style12 = style2;
var style12e = style1;
var style12l = style2;

var style13 = style2;
var style13e = style1;
var style13l = style2;

var style14 = style2;
var style14e = style1;
var style14l = style2;

var style15 = style2;
var style15e = style1;
var style15l = style2;

var style16 = style2;
var style16e = style1;
var style16l = style2;

var style17 = style2;
var style17e = style1;
var style17l = style2;

var style18 = style2;
var style18e = style1;
var style18l = style2;

var style19 = style2;
var style19e = style1;
var style19l = style2;

var style20 = style2;
var style20e = style1;
var style20l = style2;

var style21 = style2;
var style21e = style1;
var style21l = style2;

var style22 = style2;
var style22e = style1;
var style22l = style2;

var style23 = style2;
var style23e = style1;
var style23l = style2;

var styleR = style2;
var styleRe = style1;
var styleRl = style2;

function updateInput1(event) {
  inputStyle1 = inputStyleB;
  oldVnode = patch(oldVnode, newVnode());
}

function update3e(event) {
  style0 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update3l(event) {
  style0 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update4e(event) {
  style4 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update4l(event) {
  style4 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update5e(event) {
  style5 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update5l(event) {
  style5 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update6e(event) {
  style6 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update6l(event) {
  style6 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update7e(event) {
  style7 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update7l(event) {
  style7 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update8e(event) {
  style8 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update8l(event) {
  style8 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update9e(event) {
  style9 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update9l(event) {
  style9 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update10e(event) {
  style10 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update10l(event) {
  style10 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update11e(event) {
  style11 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update11l(event) {
  style11 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update12e(event) {
  style12 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update12l(event) {
  style12 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update13e(event) {
  style13 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update13l(event) {
  style13 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update14e(event) {
  style14 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update14l(event) {
  style14 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update15e(event) {
  style15 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update15l(event) {
  style15 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update16e(event) {
  style16 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update16l(event) {
  style16 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update17e(event) {
  style17 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update17l(event) {
  style13 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update18e(event) {
  style18 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update18l(event) {
  style18 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update19e(event) {
  style19 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update19l(event) {
  style19 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update20e(event) {
  style20 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update20l(event) {
  style20 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update21e(event) {
  style21 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update21l(event) {
  style21 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update22e(event) {
  style22 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update22l(event) {
  style22 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update23e(event) {
  style23 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update23l(event) {
  style23 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function updateRe(event) {
  styleR = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function updateRl(event) {
  styleR = style2;
  oldVnode = patch(oldVnode, newVnode());
}

var update = function update(v) {
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mM9.x,
  mM10.x, mM11.x, mM12.x, mM13.x, mM14.x, mM15.x, mM16.x, mM17.x, 
  mM18.x, mM19.x, mMZ1.x, mMZ2.x, mMZ3.x, mMZ4.x, mMZ5.x, mMZ6.x, mMZ7.x, mMZ8.x, mMZ9.x);
  oldVnode = patch(oldVnode, newVnode);
  let mon = new Monad(v);
  return mon;
}



