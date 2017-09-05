
window.onload = function () {
    var xValue = 0;
    var yValue = 0;
    var domtd = document.querySelectorAll("td");
    domtd.forEach(function (value, index) {
        if (index % 4 == 0) { xValue++; yValue = 0; } yValue++;
        value.setAttribute("data-x", xValue);
        value.setAttribute("data-y", yValue);
    });
    //游戏对象
    var game2048 = {
        moveright:function () {//右边移动调用
           game2048.suiji2_4();
           this.moverightIsEq(document.querySelector("#row1"));
           this.moverightIsEq(document.querySelector("#row2"));
           this.moverightIsEq(document.querySelector("#row3"));
           this.moverightIsEq(document.querySelector("#row4"));
        },
        moverightIsEq:function (ele) {//右边移动判断是否有相等的情况
            var indexjj = 1;
            for ( var i =  ele.children.length-1; i >= 0 ; i-- ) {
                // 3
                indexjj++;
                if( !ele.children[i].innerHTML) {
                    for ( var a = ele.children.length-indexjj; a >= 0  ; a-- ) {
                        if (ele.children[a].innerHTML){
                            ele.children[i].innerHTML = ele.children[a].innerHTML;
                            ele.children[a].innerHTML = "";break;
                        }
                    }
                }else{
                    if ( i - 1 != -1) {
                        if (ele.children[i].innerHTML == ele.children[i-1].innerHTML ) {
                            ele.children[i].innerHTML = +ele.children[i].innerHTML + +ele.children[i-1].innerHTML;
                            ele.children[i-1].innerHTML = "";
                        }
                    }
                }

            } //for
        },
        suiji2_4:function () {//每次按键生成一个新的
            var domtdX = domtd[Math.floor(Math.random() * 16)];
            if (domtdX.innerHTML != "") {
                game2048.suiji2_4();
            }else{if ( Math.random() > 0.5){domtdX.innerHTML = 2}else{ domtdX.innerHTML = 4 };}
        }
    };

    // 开局先生成两个数
    domtd[Math.floor(Math.random() * 16)].innerHTML = Math.random() > 0.5 ? 2 : 4;
    domtd[Math.floor(Math.random() * 16)].innerHTML = Math.random() > 0.5 ? 2 : 4;
    document.onkeydown = function (e) {

        if (e.keyCode == 37) {//左键

        } else if (e.keyCode == 39) {//右键
            game2048.moveright();
        } else if (e.keyCode == 38) {//上

        } else if (e.keyCode == 40) {//下

        }
    }
}