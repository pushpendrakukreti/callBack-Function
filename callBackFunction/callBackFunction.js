/* A callBack Function in JS is function i.e. called as an argument to
another function */

setTimeout(function () { console.log("timer") }, 1000);

function x(y) {
    console.log("x");
    y();
}

x(function y(){
    console.log("y");
});

//What is main-thread blocking in JS?
/* When any operation(eg. setTimeout) blocks the callstack that is known as blocking
the main-thread */