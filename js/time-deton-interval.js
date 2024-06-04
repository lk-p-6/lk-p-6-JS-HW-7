'use strict';

function detonatorTimer(delay){
  const timer = setInterval(() => {
    delay > 0 ? console.log(delay--) : (console.log("BOOM"), clearInterval(timer));
  }, 1000);
}

detonatorTimer(3);