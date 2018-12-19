var p1 = null;
var p2 = null;
var p3 = null;
var p4 = null;
var imageObj = null;
var Avatar = {
    init: function(cPlayerObjList) {
      imageObj = new Image();
      imageObj.src = 'img/marble.png';
      imageObj.onload = function () {
        ctx.drawImage(imageObj, 81, 133, 1086, 466);
        Avatar.malmal(cPlayerObjList);
      }
    },
      malmal : function(cPlayerObjList) {
        switch (Player.playerNum) {
          case 2:
              p1 = new Image();
              p2 = new Image();
              ctx.drawImage(p1, 81, 133, 102, 466);
              ctx.drawImage(p2, 81, 133, 108, 466);
              p1.src = 'img/p_1.png';
              p2.src = 'img/p_2.png';
              break;
            case 3:
              p1 = new Image();
              p2 = new Image();
              p3 = new Image();
              ctx.drawImage(p1, 81, 133, 1086, 466);
              ctx.drawImage(p2, 81, 133, 1086, 466);
              ctx.drawImage(p3, 81, 133, 1086, 466);
              p1.src = 'img/p_1.png';
              p2.src = 'img/p_2.png';
              p3.src = 'img/p_3.png';
              break;
            case 4:
              var p1 = new Image();
              var p2 = new Image();
              var p3 = new Image();
              var p4 = new Image();
              p1.src = 'img/p_1.png';
              p2.src = 'img/p_2.png';
              p3.src = 'img/p_3.png';
              p4.src = 'img/p_4.png';
              p4.onload = function () {
                var c = 1;
                for (var i = 0; i < cPlayerObjList.length; i++) {
                  cPlayerObjList[i].img = eval("p"+c);
                  ctx.drawImage(cPlayerObjList[i].img, cPlayerObjList[i].x, cPlayerObjList[i].y);
                  c++;
                }
                Avatar.infoRefresh(cPlayerObjList);
              }
              break;
            }
        },

      refresh: function(cPlayerObjList) {
        imageObj = new Image();
        imageObj.src = 'img/marble.png';
        imageObj.onload = function () {
          ctx.drawImage(imageObj, 81, 133, 1086, 466);
          Avatar.avatarRefresh(cPlayerObjList);
          Avatar.infoRefresh(cPlayerObjList);
        }
        },

        avatarRefresh: function(cPlayerObjList) {
          var c = 1;
          for (var i = 0; i < cPlayerObjList.length; i++) {
            ctx.drawImage(cPlayerObjList[i].img, cPlayerObjList[i].x, cPlayerObjList[i].y);
            c++;
          }
        },

        infoRefresh: function(cPlayerObjList) {
          ctx.beginPath();
          ctx.rect(10, 10, 400, 100);
          ctx.rect(canvas.width - 410, 10, 400, 100);
          ctx.rect(10, canvas.height - 110, 400, 100);
          ctx.rect(canvas.width - 410, canvas.height - 110, 400, 100);
          ctx.strokeType = "#FFF000";
          ctx.fillStyle = "#FFFFFF";
          ctx.lineWidth = 3;
          ctx.fill();
          ctx.stroke();
          ctx.closePath();
        }
    };
