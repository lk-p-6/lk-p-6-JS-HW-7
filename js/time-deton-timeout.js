'use strict';

function detonatorTimer(delay){
  setTimeout(() => {
    delay > 0 ? (console.log(delay--), detonatorTimer(delay)) : console.log("BOOM!");
  }, 1000);
}

detonatorTimer(3);