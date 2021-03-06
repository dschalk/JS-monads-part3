"use strict";

import cow from './cow';
import snabbdom from 'snabbdom';
import h from 'snabbdom/h';

var Group = 'solo';
var Name;

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

window.onload = function (event) {
    console.log('onopen event: ', event);
    update0();
};

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

const patch = snabbdom.init([
  require('snabbdom/modules/class'),          // makes it easy to toggle classes
  require('snabbdom/modules/props'),          // for setting properties on DOM elements
  require('snabbdom/modules/style'),          // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
]);

var oldVnode = document.getElementById('placeholder');

function view(m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, 
                m12, m13, m14, m15, m16, m17, m18, m19, mI1, mI2, mI3, mI4, mI5, mI6, mI7, mI8, mI9) { 
  return h('div',{style: style3}, 
    [ h('div',{style: { width: '60%', textAlign: 'left', marginLeft: 40, marginRight: '17%', fontSize: '22px'}}, 
    [ h('div', [
      h('a', { props: {href: '#signin'}, style: {color: '#FFBBBB'}}, 'Game/Chat'  ),
    ] ),
      h('h1', 'JS-monads-part3'),
      h('br'),  
      h('span',  {style: {fontStyle: 'italic ' }}, 'This is the third page in the Javascript Monads series. More examples of the use of instances of "Monad" and "MonadIter" can be found in page1 and page2, accessable at '),
      h('a', {props: {href: 'http://schalk.net' },  style: {color: '#EECCFF'}},' http://schalk.net'), 
      h('span', ' and a code repo at '),
      h('a', {props: {href: 'https://github.com/dschalk?tab=repositories'}, style: {color: '#EECCFF'}}, ' github repos' ),
      h('p', 'This project is not about mathematics, it is about controlling the flow of actions in web applications. The function "ret" does happen to be similar to "return" in Haskell. For any value v, ret(v) returns a monad with value v, and for all monads m, and functions f mapping values to monads, ret(v).bnd(f) is equivalent to f(v) and ret(v).bnd(ret) is equivalent to ret(v). And, like Haskell monads, composition is associative; that is, for any monad m and functions f and g mapping values to monads, m.bnd(f).bnd(g) and m.bnd(x => f(x).bnd(g)) both produce the same result. For me, these facts are reassuring, and I think they help explain why these monads are robust and versitile. ' ),
      h('p', ' The monads, monad constructors, and most of the functions demonstrated on this page are in a script that comes with the index.html file, so by pressing F12 you can immediately experiment with them in the browser console. The monad instances are created like this: " mM1 = new Monad(0, "mM1") ". The id mirrors the name of the monad so the "ret" method can return a new monad with the same name as the monad that called "ret", thereby replacing the calling monad with a mirror image of itself only holding a new value. In this demonstration, we don\'t mutate the monads, or anything else. This will be important when we start using Motorcycle.js in JS-monads-part4. Here is the definition of Monad: '  ),
      cow.monad,
      h('p', 'Here is MonadIter: ' ),
      cow.monadIter,
      h('p', 'And here is ret.'  ),
      cow.ret,
      h('h2', 'Controlled Sequence' ),
      h('p', { props: { id: 'signin' }}, 'To see MonadIter in action, click the following button and then click the mMZ2.release() button below it four times.'  ),
      h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: updateSteps }, style: style4},
            [ cow.steps ],  ),
      h('p', 'Each time mMZ2 gets released, mMZ2.p executes down to the next occurance of mMZ2 where mMZ2.p takes on the value of the code that follows it. That newly acquired value is a function that executes the next time mMZ2.release() is called, repeating the process down the lines of code until finally, everything gets re-set to the starting point. ' ), 
      h('p', {props: {id: 'rules'}}, ),    
      h('br', ),    
      h('button', {on: { mouseenter: update6e, mouseleave: update6l, click: updateNext }, style: style6}, [ cow.updateNext ],  ),  
      h('br', ),    
      h('h2', 'Independent Branches'  ),
      h('p', 'In updateCalc (below), an anonymous monad calls its bnd() method on a function that returns a tupple of six independent branches, five of which start with instances of MonadIter. The sixth member of the tupple performs a computation and determines whether mMZ2 or mMZ4 (or neither) should be released. Depending on the current score, mMZ2 or mMZ4 might initiate execution down part or all of the remainder of a shared chain. '),
      h('p', {style: inputStyle1}, 'In order to create a unique socket, please enter some name.'  ),
      h('input', { on: {keydown: updateLogin}, style: inputStyle1, } ),
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
      h('p', 'When you click a number, it disappears. After two numbers and an operator have been selected, in any order, a computation is performed and the result is placed at the end of the numbers row. Now there are three numbers. After another round, two are left and finally, the last computation can be performed. ',  ),
      h('p', 'You can click ROLL repeatedly and the Haskell server will obligingly provide new numbers. The numbers simulate the roll of four dice; two six-sided, one twelve-sided, and one twenty-sided. Clicking ROLL forfeits one point, but this can be advantageous, as when it places you within 1 or 3 points from a multiple of 5 (and a 5 point jump to the next multiple of 5).  '  ),
      h('p', {style: {color: '#EEBBBB'}}, 'RULES: Every time you click ROLL, you lose one point. Every time you compute the number 20, you gain one point. Every time you compute "18", you gain three points. Whenever your score becomes 0 mod 5 (-5, 0, 5, 10, 15, ...) you gain 5 points. When your score becomes 25, you gain one goal. The first player to acheive three goals wins. ' ),
      h('p', 'HINTS: You can get off to a good start by clicking ROLL, dropping down to a score of -1. Then if you score 1 point you hit zero and jump to 5. However, computing 20 twice, or 18 and then clicking ROLL, puts you within range of 5, and a jump to 10 points. There are only two ways to score a goal. Either compute the number 18 when your score is 17, or compute 20 when your score is 19. Either of those hits 20 and jumps to 25. You can\'t get to 25 from 22 or 24 because hitting 25 jumps you to 30, and you don\'t score a goal for having a score of 30.  '  ),
        
h('p', 'Clicking numbers and operators calls updateNums and UpdateOps, respectively. They call updateCalc. updateCalc (below) displays the flow of the application. First, mMZ2, mMZ4, mMZ5, mMZ6, and mMZ7 store the functions that might eventually be called in their "p" variables. Then,  tests are performed that might release the code being held in the MonadIter instances. Here is some of the operative code:' ),
      cow.dice,
      h('p', 'When numbers are clicked, they get pushed into mM3.x, an array which is emptied after each roll of the dice. When an operator is clicked, it replaces "0" as the value of mM8. So when mM3.x.length === 2 and mM8.x !== 0, it\'s time to call updateCalc, which is what updateNums and updateOp are coded to do. mM7 takes the number returned from updateCalc and tests whether it is 18 or 20. If it is, the appropriate MonadIter instance calls its "p" attribute, handing control over to mM13, the monad that keeps the score throughout the game. mM13 calls .bnd() with argument "score" and the number of points to add to the score. Then ".bnd()" executes with argument "next2", testing whether the number is 0 mod 5. If the number is 0 mod 5, mMZ5 is released, handing control over to mM13 again, and mM13 calls its "bnd()" method with "score", this time adding 5 points. mM13 then runs the function "next", releaseing mMZ6 if the mM13.x ===  25 is true. When mMZ6 is released, "score2" executes, incrementing goals and returning mMgoals, which calls its ".bnd()" method on next to test whether 3 goals have been achieved. If so, mMZ7 is released, and the winner of the game is announced. '  ),
   h('p', 'The functions score and score2 (above) deviate from the general policy of having f in "monad.bnd(f)" return anonymous monads. I think it is usually good for a monad that initiates a computation retain its value intact. But score and score2 exist only to augment updateCalc, and since mM13 is the score-keeping monad in updateCalc, it was convenient to have score return mM13 with an updated value, and to have score2 reset mM13.x to 0 and return mMgoals with its value incremented by 1. Rather than have error checking for unusual uses of bnd, I let it be flexible. For example, if you want the value of monad m squared, you can get it by running m.bnd(x => x*x). That would return a number, terminating any chain it happened to be in, but if the monadic chain\'s purpose was to compute a value, that might be exactly what you want. '  ),    
   h('p', 'MonadIter instances together with the function "pause" provide a way to delay progress along a chain. "pause" is defined as follows:'),
        cow.pause, 
   h('p', 'If you click the button below, some monads will update two seconds later. '  ),
   h('button', {on: { mouseenter: update4e, mouseleave: update4l, click: pauseDemo }, style: style4},
            [ cow.pauseDemo ],  ),
      h('h2',  'Dynamic List Display' ),
      h('p', 'The lists of group members and their scores, and the lists of messages broadcast within each group, are subject to change as scores change and players join or leave the group, and as messages get sent and broadcast to the group. When a group member\'s score changes and when a group member sends a message, the information goes to the server and the server broadcasts the updated state (maintained in a Haskell TMVar) to all group members. In socket.onmessage, the incoming messages are sorted according to their prefixes in a switch block, and if the message is a scoreboard update or chat message, one of the following blocks is activated: ' ),
      cow.messages1,
      h('p', 'And here are the functions which get called: '  ),
      cow.messages2, 
      h('h2', 'About User Interactions' ),
      h('p', 'When you log in, the monad column on the right disappears and a scoreboard and chat section open up. You can\'t compete or chat as long as you remain in the default group "solo", even if other people are in group "solo". But if you change to, say, group "chat54" in two separate browser windows, you will see that both windows share rolls of the dice and chat messages they enter. People in separate locations can agree on a group name and compete and chat. If the name is cryptic, something like "c#*&%@@9J#lu88", the chat and the game will likely remain private. If you change to group "test", you might encounter me playing the game, or you might encounter someone else who joined group "test". '  ),
      h('br' ),
      h('span', 'The repository for this open source project is at ' ),
      h('a', {props: {href: 'https://github.com/dschalk?tab=repositories'}, style: {color: '#FFEBCD'}}, 'github.com/dschalk' ),
      h('span', '. Parts 1 and 2 of this series are running online. Links are at: ' ),
      h('a', {props: {href: 'http://schalk.net'}, style: {color: '#FFEBCD'}}, 'schalk.net.' ),
      h('div', {style: {height: '300px'}} ),
      h('div', {style: monadStyle}, [  
      h('div',{style: { width: '30%', position: 'fixed', top: '15px', right: '15px', color: '#CCFDDA'}}, [ 
        h('div', {style: linkStyle}, [
        h('button', {on: { mouseenter: update5e, mouseleave: update5l, click: updateGotochat }, style: style5},
            'Go To Game/Chat'  ) ] ),
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
        h('br'),
        h('button', {on: { mouseenter: updateRe, mouseleave: updateRl, click: updateR }, style: styleR},
                   `RE-SET`   ),
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
        h('input', {style: messageStyle, on: {keydown: updateGroup} } ),
        
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
        h('br' ),
        h('span', 'Score: '  ),
        h('span', {style: {color: '#FF0000', fontSize: '32px' }}, mM13.x ),  
        h('br' ),
        h('br'),
        h('h2', mMgoals2.x ),
        h('br'),
        ]) 
      ])
    ]) 
  ])  
}  

var newVnode  = () => {
  var newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mM9.x,
  mM10.x, mM11.x, mM12.x, mM13.x, mM14.x, mM15.x, mM16.x, mM17.x, mM18.x, mM19.x ); 
  return newVnode;
}

var send = function() {
  socket.send(`CA#$42,${Group},${Name},6,6,12,20`);
};

function update0() {
  oldVnode = patch(oldVnode, newVnode());
}

var score = function score(v,j) {
  socket.send('CG#$42,' + Group + ',' + Name + ',' + j + ',' + 0);
  return mM13.ret(v + j);
}

var score2 = function score2() {
  mMgoals.ret(mMgoals.x + 1);
  let j = -25;
  socket.send('CG#$42,' + Group + ',' + Name + ',' + j + ',' + 1);
  mM13.ret(0);
  return mMgoals;
}

var winner = function winner() {
  let k = -3
  mMgoals.ret(mMgoals.x + 1);
  socket.send('CG#$42,' + Group + ',' + Name + ',' + 0 + ',' + k);
  mMgoals2.ret('The winner is ' + Name);
  return ret(0);
}

var newRoll = function(v) {
  socket.send(`CA#$42,${Group},${Name},6,6,12,20`);
  return ret(v);
};

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
                        .bnd(next, 25, mMZ6)) ),
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
                    .bnd(update) )))) ) 
  ))     
}

function updateNums(e) {
    mM3
    .bnd(push,e.target.textContent)
    .bnd(() => {mM1.x[e.target.value] = "";})
    if (mM3.x.length === 2 && mM8.x !== 0) {updateCalc();}
    update0();
}

function updateOp(e) {
  mM8.ret(e.target.textContent).bnd(update);
  if (mM3.x.length === 2 && mM8.x !== 0) {updateCalc();}
}

var displayOff = function displayOff(x,a) {
    document.getElementById(a).style.display = 'none';
    return ret(x);
};

var displayInline = function displayInline(x,a) {
    document.getElementById(a).style.display = 'inline';
    return ret(x);
};

function updateNumbers() {
  linkStyle2 = style2;
  mMnbrs.ret([]);
  let ob = test2();
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
       update0();
     }
}

function updateGoback() {
       monadStyle = inputStyleA;
       chatStyle = inputStyleB;
       update0();
}

function  updateRoll() {
  styleRoll2 = {display: 'none'};    
  monadStyle = inputStyleB;
  chatStyle = inputStyleA;
  mM13.bnd(score,-1)
  .bnd(update);
  socket.send(`CA#$42,${Group},${Name},6,6,12,20`);
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

function pauseDemo() {
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

function updateR() {
  mM1.ret([]).bnd(mM2.ret).bnd(mM3.ret).bnd(() => mM4.ret(0)).bnd(mM5.ret)
  .bnd(mM6.ret).bnd(mM7.ret).bnd(mM8.ret).bnd(mM9.ret).bnd(mM10.ret).bnd(mM15.ret)
  .bnd(mM16.ret).bnd(mM17.ret).bnd(mM18.ret).bnd(mM19.ret).bnd(update);
}

function updateSteps() {
    mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret).bnd(mM4.ret)
     .bnd(() => mM1.ret('Click the mMZ2.release() button to proceed')
     .bnd(() => mMZ2
     .bnd(() => mM2.ret('Click it again.')
     .bnd(() => mMZ2
     .bnd(() => mM3.ret('Keep going. The current score is ' + mM13.x)
     .bnd(() => mMZ2
     .bnd(() => mM4.ret('One more')
     .bnd(() => mMZ2
     .bnd(() => mM1.ret(0).bnd(mM2.ret).bnd(mM3.ret)
     .bnd(mM4.ret)
      ))))))))) 
  oldVnode = patch(oldVnode, newVnode());
}

function updateNext() {
  mMZ2.release()  
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
  let sender = gameArray[2];
  let extra = gameArray[3];
  let ext4 = gameArray[4];
  let ext5 = gameArray[5];
  let ext6 = gameArray[6];

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
              mM1.ret([extra,  ext4,  ext5,  ext6])
              .bnd(() => mM17.ret(['add', 'subtract', 'mult', 'div', 'concat']) 
              .bnd(() => mM3.ret([])
              .bnd(() => mM8.ret(0)
              .bnd(() => mM6
              .bnd(displayInline,'0')
              .bnd(displayInline,'1')
              .bnd(displayInline,'2')
              .bnd(displayInline,'3')
              .bnd(update)  ))));
          break;

          case "CB#$42":                             // Updates the scoreboaard.
            let scores = extra.split("<br>");
            mMscbd.ret(scores)
            .bnd(updateScoreboard)
            .bnd(() => mM3.ret([])
            .bnd(() => mM8.ret(0)
            .bnd(() => mM6
            .bnd(update))));
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
          
          default:
            console.log('Message fell through to default');
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


var styleR = style2;
var styleRe = style1;
var styleRl = style2;

function updateInput1() {
  inputStyle1 = inputStyleB;
  oldVnode = patch(oldVnode, newVnode());
}

function update3e() {
  style0 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update3l() {
  style0 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update4e() {
  style4 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update4l() {
  style4 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update5e() {
  style5 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update5l() {
  style5 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update6e() {
  style6 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update6l() {
  style6 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update7e() {
  style7 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update7l() {
  style7 = style2;
  oldVnode = patch(oldVnode, newVnode());
}

function update8e() {
  style8 = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function update8l() {
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

function updateRe() {
  styleR = style1;
  oldVnode = patch(oldVnode, newVnode());
}

function updateRl() {
  styleR = style2;
  oldVnode = patch(oldVnode, newVnode());
}

var update = function update(v) {
  const newVnode = view(mM1.x, mM2.x, mM3.x, mM4.x, mM5.x, mM6.x, mM7.x, mM8.x, mM9.x,
  mM10.x, mM11.x, mM12.x, mM13.x, mM14.x, mM15.x, mM16.x, mM17.x, 
  mM18.x, mM19.x, mMZ1.x, mMZ2.x, mMZ3.x, mMZ4.x, mMZ5.x, mMZ6.x, mMZ7.x, mMZ8.x, mMZ9.x);
  oldVnode = patch(oldVnode, newVnode);
  return ret(v);
}



