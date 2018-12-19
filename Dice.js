// 주사위 처리 함수

var Dice = new (function ()
{
  var _this = this;

  this.rollDice = function () {

    this.randomNumber = Math.floor(Math.random()*6) + 1;  // 주사위 1~6 랜덤 생성

    return this.randomNumber; // 주사위 수 반환
  }

});
