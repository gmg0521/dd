var canvas = document.getElementById("marbleCanvas");
var ctx = canvas.getContext("2d");
var cFramePosX = canvas.width / 2;
var cFramePosY = canvas.height / 2;
ctx.font = "40px Arial";
ctx.textAlign = 'center';

var diceNumber = 0;

var timer = 2000;

var avatarFlag = false;

var endflag = false;

var Player = {
  // 스테이지의 발판 생성. 현재 무쓸모??
  /* stageCell = new function () {
    var cell = [];
    for (var i = 0; i < 10; i++) {
      cell[i] = i+1;
    }
    return cell;
  }; */

  playerNum: 0,

  // 플레이어의 객체
  playerObjList: [],

  // 플레이어의 게임 순서
  playerList: [],

  // 현재 플레이어의 인덱스
  curPlayerIndex: 0,

  // 게임 초기화
  init: function() {
    ctx.fillText("플레이어의 정보를 셋팅합니다.", cFramePosX, cFramePosY);
    console.log("플레이어의 정보를 셋팅 합니다.");
    setTimeout(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillText("참여 플레이어 수 : 4명.", cFramePosX, cFramePosY);
      console.log("참여 플레이어의 수는 4명");
    }, timer);
    Player.setPlayer(4); // 플레이어 수 설정
  },

  setPlayer: function(cPlayerNum) {
    setTimeout(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillText("플레이어의 수를 " + cPlayerNum + "으로 설정합니다.", cFramePosX, cFramePosY);
      console.log("플레이어의 수를 " + cPlayerNum + "으로 설정합니다.")
    }, timer * 2);
    Player.playerNum = cPlayerNum; // 플레이어 수 설정

    setTimeout(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillText("플레이어의 순서를 정하는 중입니다.", cFramePosX, cFramePosY);
      console.log("플레이어의 순서를 정합니다.");
      console.log("플레이어 배열 :");
      console.log(Player.playerList); // 플레이어 순서 배열 출력
    }, timer * 3);
    for (var i = 1; i <= Player.playerNum; i++) {
      Player.playerList.push(i); //플레이어 순서 정하고 플레이어 순서대로 리스트에 삽입
    }

    setTimeout(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillText("플레이어의 객체를 초기화중입니다.", cFramePosX, cFramePosY);
      console.log("플레이어의 객체를 초기화 합니다");
    }, timer * 4);
    for (var pOrder = 1; pOrder < Player.playerNum + 1; pOrder++) { // 플레이어 수만큼 객체 초기화. pOrder는 플레이어의 순서
      Player.addPlayer(pOrder, Player.playerList[pOrder - 1]); // playerList[pOrder-1]는 플레이어의 아이디가 됌(숫자 e.g.1)
    }

    setTimeout(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillText("게임을 시작합니다!.", cFramePosX, cFramePosY);
      console.log("게임을 시작합니다!");
    }, timer * 5);
    setTimeout(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillText("3", cFramePosX, cFramePosY);
      console.log("3");
    }, timer * 5 + 1000);
    setTimeout(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillText("2", cFramePosX, cFramePosY);
      console.log("2");
    }, timer * 6);
    setTimeout(function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillText("1", cFramePosX, cFramePosY);
      console.log("1");
    }, timer * 6 + 1000);
    setTimeout(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (avatarFlag == false) {
        Avatar.init(Player.playerObjList);
      }else {
        Avatar.refresh();
      }
    }, timer * 7);

  },

  // 플레이어 객체 추가
  addPlayer: function(pOrder, playerId) {
    // 플레이어 객체 생성 (플레이어 ID, 플레이어 순서(정수형 배열), 현재 위치)
    Player.playerObjList[pOrder - 1] = new PlayerInfo(pOrder, playerId);
  },

  // 다음 플레이어로
  nextPlayer: function() {

    if (Player.curPlayerIndex == 3) // 방금 플레이한 플레이어의 인덱스가 3일 경우
      Player.curPlayerIndex = 0; // 처음 플레이어로
    else
      Player.curPlayerIndex++; // 아니면 인덱스 1 증가

  },

  startGame: function() {

    for(var check = 0; check < Player.playerObjList.length; check++){
      if (Player.playerObjList[check].lab == 2) {
        endflag = true;
        alert('게임이 끝나서 움직일 수 없습니다.');
        console.log('게임이 끝나서 움직일 수 없습니다.');
      }
    }
    if (!endflag) {
      Player.Game();
    }
  },

  Game : function () {

    var curPlayer = Player.playerObjList[Player.curPlayerIndex]; // 현재 플레이어 객체 임시 저장
    // 프레임 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 아바타 초기 생성이면 init, 아니면 refresh
    if (avatarFlag == false) {
      Avatar.init(Player.playerObjList);
    }else {
      Avatar.refresh(Player.playerObjList);
    }

    console.log("현재 플레이어 : " + curPlayer.getPlayerId());
          diceNumber = Dice.rollDice(); // 주사위 굴리기
          console.log("주사위를 굴립니다.");
          console.log("나온 수 :" + diceNumber);
          PlayerMove.playerMove(diceNumber); // 플레이어 이동
          console.log("플레이어를 이동합니다");
          console.log(curPlayer.punishmentList); // 벌칙 기록 보여주기
          Player.nextPlayer(); // 다음 플레이어로
  }

};
