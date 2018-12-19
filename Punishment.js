var Punishment = new (function () {
  var _this = this;

  // 말판의 정보를 저장한 배열. 술을 마시는 칸과 황금열쇠 칸, 순간이동 칸을 type으로 구분.
    var MAP_DATA = [
      null,
    { type : "none", title : "시작칸", alcohol : 0},
    { type : "soju1", title : "소주 1 잔", alcohol : 1},
    { type : "rest", title : "쉬어가기", alcohol : 0},
    { type : "beer1", title : "맥주 1 잔 원샷", alcohol : 1.1},
    { type : "key", title : "황금열쇠", alcohol : 0},
    { type : "beer1", title : "맥주 1 잔 원샷", alcohol : 1.1},
    { type : "sing", title : "일어나서 노래 부르기", alcohol : 0},
    { type : "key", title : "황금열쇠", alcohol : 0},
    { type : "beerhalf", title : "맥주 반병 원샷", alcohol : 1.375},
    { type : "soju1", title : "소주 1 잔 원샷", alcohol : 1},
    { type : "sojuhalf", title : "소주 반병 원샷", alcohol : 3.75},
    { type : "key", title : "황금열쇠", alcohol : 0},
    { type : "beer1", title : "맥주 1 잔 원샷", alcohol : 1.1},
    { type : "sojufull", title : "소주 1 병 원샷", alcohol : 0},
    { type : "jebi", title : "공중제비 돌기", alcohol : 0},
    { type : "soju3", title : "소주 3 잔 원샷", alcohol : 3},
    { type : "rest", title : "쉬어가기", alcohol : 0},
    { type : "sojufull", title : "소주 한병 원샷", alcohol : 7.5},
    { type : "key", title : "황금열쇠", alcohol : 0},
    { type : "beer2", title : "맥주 2 잔 원샷", alcohol : 2.2}
    ];

  // 도착한 셀 정보 받아오기
    this.getCell = function (index) {
      return MAP_DATA[index];
    }

  /* 혈중 알콜농도 구하는 메소드. 위드마크 계산법으로 계산함.
  *  마신 술의 양을 모두 소주양으로 환산하고, 체중은 70KG과 가중치는 0.6 상수로 고정함.
  */
    this.getBloodAlcohol = function (alcohol) {
      var cal = (alcohol*48*0.017*0.7894)/(70*0.6);
      return cal.toFixed(2);
    }
  });
