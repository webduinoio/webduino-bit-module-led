+(function (window, webduino) {

  'use strict';

  window.getLed = function (board, pin) {
    return new webduino.module.Led(board, board.getDigitalPin(pin));
  }

}(window, window.webduino));
