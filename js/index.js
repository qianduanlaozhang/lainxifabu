let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
ctx.fillStyle = "rgb(0,0,0)";
//绘制矩形
// ctx.fillRect (10, 10, 50, 50);
// ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
// ctx.fillRect (30, 30, 55, 50);
// ctx.fillRect(10, 10, 100, 50);  //绘制矩形,填充的默认颜色为黑色
// ctx.strokeRect(10, 70, 100, 50);  //绘制矩形边框
// ctx.clearRect(15, 15, 50, 25);

// 线性
ctx.beginPath(); //新建一条path
ctx.moveTo(50, 50); //把画笔移动到指定的坐标
ctx.lineTo(200, 50);  //绘制一条从当前位置到指定坐标(200, 50)的直线.
// 三角形
ctx.lineTo(200, 200);
//闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
// ctx.closePath();
// ctx.stroke(); //绘制路径。
// 三角填充
// ctx.fill(); 

// ctx.beginPath(); //新建一条path
// ctx.moveTo(0, 5); //把画笔移动到指定的坐标
// ctx.lineTo(10, 200);  //绘制一条从当前位置到指定坐标(200, 50)的直线.
// //闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
// ctx.closePath();
// ctx.stroke(); //绘制路径。

// 圆弧
function draw(){
    var canvas = document.getElementById('canvas');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, Math.PI / 1, true);
    ctx.arc(50, 50, 30, 0, Math.PI / 1, true);
    ctx.stroke();
}
// draw();
function draw1(){
    var canvas = document.getElementById('canvas');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(50, 50, 40, 0, Math.PI / 2, true);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(150, 50, 40, 0, -Math.PI / 1, true);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(50, 150, 40, -Math.PI / 2, Math.PI / 2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(150, 150, 40, 0, Math.PI, false);
    ctx.fill();

}
// draw1();


function draw2(){
    var canvas = document.getElementById('canvas');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(50, 50);
    //参数1、2：控制点1坐标   参数3、4：控制点2坐标  参数4：圆弧半径
    ctx.arcTo(200, 50, 200, 200, 100);
    ctx.lineTo(200, 200)
    ctx.stroke();
    
    ctx.beginPath();
    ctx.rect(50, 50, 10, 10);
    ctx.rect(200, 50, 10, 10)
    ctx.rect(200, 200, 10, 10)
    ctx.fill()
}
draw2();
