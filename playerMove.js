// 나온 주사위 값을 받아서 그 칸 만큼 움직이는 메소드 setPlayPosition 실행
var PlayerMove = new(function() {
      var _this = this;

      this.moveX = 181;
      this.moveY = 75;

      this.playerMove = function(diceNumber) {
        var curPlayer = Player.playerObjList[Player.curPlayerIndex];
        var curPosition = curPlayer.location;

        console.log(curPlayer.getPlayerId() + "플레이어는");
        console.log("현재 " + curPosition + "칸에 있습니다!");
        console.log("이제 " + diceNumber + "칸 만큼 움직입니다!");

        var toMovePosition = curPosition + diceNumber;
    if (toMovePosition > 20) {
      toMovePosition -= 20;
      // 바퀴수 설정
      Player.lab += 1;
      if (Player.lab = 2) {
        this.endGame(curPlayer);
      }
    }
        curPlayer.setLocation(toMovePosition);

        for (var i = 0; i < diceNumber; i++) {
          if (curPlayer.x != 1035 && curPlayer.y == 515) {
            curPlayer.setX(curPlayer.x + this.moveX);
          } else if (curPlayer.x == 1035 && curPlayer.y != 140) {
            curPlayer.y = curPlayer.y - this.moveY;
          } else if (curPlayer.x != 130 && curPlayer.y == 140) {
            curPlayer.setX(curPlayer.x - this.moveX);
          } else if (curPlayer.x == 130 && curPlayer.y != 515) {
            curPlayer.y = curPlayer.y + this.moveY;
          }
        }

        Avatar.refresh(Player.playerObjList);

        console.log(toMovePosition + "칸에 왔습니다!");

        this.playerArrived(curPlayer, toMovePosition);

      }

      // 플레이어가 칸에 도착했을 때 이벤트를 처리하는 메소드.
  this.playerArrived = function(curPlayer, toMovePosition) {
    if(curPlayer.getGoldKey() > 0) {
      if(confirm("황금열쇠 사용하시겠습니까? 현재 "+curPlayer.getGoldKey()+"개")) {
        curPlayer.goldKey -= 1;
        return;
      }
    }
    this.getGoldKey = function (curPlayer) {
      curPlayer.goldKey++;
    }


    var img = new Image();
    var cellType = Punishment.getCell(toMovePosition);
    // 칸 정보에서 type을 받아와 case문으로 처리한다.
    switch (cellType.type) {

      case "soju1":
        this.putAlcohol(curPlayer, cellType);
        img.src = "img/soju1.png";
        img.onload = function() {
          setTimeout(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            Avatar.refresh(Player.playerObjList);
          }, 2000);
          ctx.drawImage(img, 260, 50, 650, 600);
        }
        break;

      case "beer1":
        this.putAlcohol(curPlayer, cellType);
        img.src = "img/beer1.png";
        img.onload = function() {
          setTimeout(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            Avatar.refresh(Player.playerObjList);
          }, 2000);
          ctx.drawImage(img, 260, 50, 650, 600);
        }
        break;

      case "beer1":
        this.putAlcohol(curPlayer, cellType);
        img.src = "img/beer2.png";
        img.onload = function() {
          setTimeout(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            Avatar.refresh(Player.playerObjList);
          }, 2000);
          ctx.drawImage(img, 260, 50, 650, 600);
        }
        break;

      case "beerhalf":
        this.putAlcohol(curPlayer, cellType);
        img.src = "img/beerhalf.png";
        img.onload = function() {
          setTimeout(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            Avatar.refresh(Player.playerObjList);
          }, 2000);
          ctx.drawImage(img, 260, 50, 650, 600);
        }
        break;

      case "sojuhalf":
        this.putAlcohol(curPlayer, cellType);
        img.src = "img/sojuhalf.png";
        img.onload = function() {
          setTimeout(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            Avatar.refresh(Player.playerObjList);
          }, 2000);
          ctx.drawImage(img, 260, 50, 650, 600);
        }
        break;

      case "soju3":
        this.putAlcohol(curPlayer, cellType);
        img.src = "img/soju3.png";
        img.onload = function() {
          setTimeout(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            Avatar.refresh(Player.playerObjList);
          }, 2000);
          ctx.drawImage(img, 260, 50, 650, 600);
        }
        break;

      case "sojufull":
        this.putAlcohol(curPlayer, cellType);
        img.src = "img/sojufull.png";
        img.onload = function() {
          setTimeout(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            Avatar.refresh(Player.playerObjList);
          }, 2000);
          ctx.drawImage(img, 260, 50, 650, 600);
        }
        break;

      case "key":
        // 황금카드일경우
        this.getGoldKey(curPlayer);
        img.src = "img/key.png";
        img.onload = function() {
          setTimeout(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            Avatar.refresh(Player.playerObjList);
          }, 2000);
          ctx.drawImage(img, 260, 50, 650, 600);
        }
        console.log("황금카드를 얻었습니다!");
        break;

      case "sing":
        // 노래부르기
        img.src = "img/sing.png";
        img.onload = function() {
          setTimeout(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            Avatar.refresh(Player.playerObjList);
          }, 2000);
          ctx.drawImage(img, 260, 50, 600, 600);
        }
        break;

      case "jebi":
        // 공중제비
        img.src = "img/jebi.png";
        img.onload = function() {
          setTimeout(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            Avatar.refresh(Player.playerObjList);
          }, 2000);
          ctx.drawImage(img, 260, 50, 750, 650);
        }
        break;

      case "rest":
        // 한 번 쉬기
        img.src = "img/rest.png";
        img.onload = function() {
          setTimeout(function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            Avatar.refresh(Player.playerObjList);
          }, 2000);
          ctx.drawImage(img, 260, 50, 750, 650);
        }

        break;

      default:
        console.log(cellType.title + "!");
    }

  }



// 혈중 알콜농도 계산 메소드
  this.putAlcohol = function(curPlayer, cellType) {
    curPlayer.alcohol += cellType.alcohol;
    Punishment.getBloodAlcohol(curPlayer.alcohol);
    console.log(cellType.title);
    console.log("현재까지 총 소주 " + curPlayer.alcohol + " 잔");
    console.log("혈중 알코올농도 : " + Punishment.getBloodAlcohol(curPlayer.alcohol));
  }

// 게임끝 메소드
  this.endGame = function(curPlayer) {
    console.log("게임 끝!!");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText("게임 끝!!! \n" + "승자 : 플레이어 " + curPlayer.getPlayerId(), cFramePosX, cFramePosY);
  }

});
