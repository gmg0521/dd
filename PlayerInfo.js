// 플레이어의 정보를 다루는 PlayerInfo객체
var PlayerInfo = function(pOrder, playerId) {
  var _this =  this;

  // 플레이어 ID
  this.playerId = playerId;

  this.pOrder = pOrder;

  this.playerLap = 0;

  this.img = null;

  this.x = 130;
  this.y = 515;

  this.location = 1;

  this.alcohol = 0;

  this.punishmentList = [];

  this.goldKey = 0,

  this.lab = 0,

  this.getGoldKey = function () {
    return this.goldKey;
  }

  this.setX = function (xx) {
    this.x = xx;
  }

  this.getX = function () {
    return this.x;
  }

  this.getPlayerId = function ()
  {
    return this.playerId;
  }

  this.getpOrder = function () {
    return this.pOrder;
  }

  this.setLocation = function setLocation(curLocation) {
    this.location = curLocation;
  }

  this.getLocation = function () {
    return this.location;
  }
};
