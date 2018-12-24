class Main extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    onAddToStage(event) {
        // 矩形
        var shp = new egret.Shape();
        shp.x = 200;
        shp.y = 20;
        shp.graphics.lineStyle(10, 0x00ff00); // 设置线条的样式，通过 lineStyle() 方法实现。该方法的第一个参数是描边的线条宽度，第二个参数是描边的颜色
        shp.graphics.beginFill(0xff0000, 0.5); // 调用 beginFill() 方法设置矩形的填充颜色，这里将填充颜色设置为红色（颜色值0xff0000），同时将alpha设置为1，表示完全不透明。
        shp.graphics.drawRect(0, 0, 100, 200); // 调用 drawRect() 方法设置矩形的位置和大小，前两个参数分别为矩形左上角的X、Y轴坐标（相对于 shp 的锚点计算），后两个参数分别为矩形的宽和高，这里在 (0, 0) 点绘制了一个 100*200 的矩形
        shp.graphics.endFill(); // 调用 endFill() 方法结束当前绘制操作
        shp.scaleX = 0.5;
        shp.scaleY = 0.5;
        shp.rotation = 30;
        this.addChild(shp);

        // 圆形
        var shp = new egret.Shape();
        shp.x = 80;
        shp.y = 100;
        shp.graphics.lineStyle(10, 0x00ff00);
        shp.graphics.beginFill(0xff0000, 1);
        shp.graphics.drawCircle(0, 0, 50); // 绘制圆形的方法与绘制矩形类似，只需将 drawRect() 方法改为 drawCircle() 方法x
        // 圆心的X轴和Y轴位置是相对于 Shape 对象的锚点计算的
        // drawCircle() 方法接受三个参数，第一个参数为圆心的X轴坐标，第二个参数为圆心的Y轴坐标，第三个参数为半径
        shp.graphics.endFill();
        this.addChild(shp);

        // 直线
        // moveTo() 和 lineTo()，它们输入参数是一对坐标值。moveTo() 负责绘制直线的起始点，lineTo() 负责绘制直线的终点
        var shp = new egret.Shape();
        // 在绘图直线前，需要先制定线条的样式，设置 lineStyle() 方法
        shp.graphics.lineStyle(2, 0x00ff00);
        // 然后使用 moveTo() 来设定线条的起始点，使用 lineTo() 来设定线条的终点
        shp.graphics.moveTo(10, 10);
        shp.graphics.lineTo(100, 20);
        shp.graphics.endFill();
        this.addChild(shp);

        // 多直线组成的折线
        var shp = new egret.Shape();
        shp.graphics.lineStyle(2, 0x00ff00);
        shp.graphics.moveTo(68, 84);
        // 绘制折线时，无需多次使用 moveTo() 方法，连续使用 lineTo() 方法即可
        shp.graphics.lineTo(167, 76);
        shp.graphics.lineTo(221, 118);
        shp.graphics.lineTo(290, 162);
        shp.graphics.lineTo(297, 228);
        shp.graphics.lineTo(412, 250);
        shp.graphics.lineTo(443, 174);
        shp.graphics.endFill();
        this.addChild(shp);

        // 曲线
        var shp = new egret.Shape();
        shp.graphics.lineStyle( 2, 0x00ff00 );
        shp.graphics.moveTo( 50, 50);
        shp.graphics.curveTo( 100,100, 200,50);
        shp.graphics.endFill();
        this.addChild( shp );

        // 圆弧
        var shp = new egret.Shape();
        shp.graphics.beginFill( 0x1122cc );
        // 前两个参数是圆弧路径的圆心位置，radius 是圆弧半径。startAngle 是圆弧起点的角度，从x 轴方向开始计算，以弧度为单位，endAngle 是圆弧终点的角度，anticlockwise 控制绘制方向，如果为 true，逆时针绘制圆弧，反之，顺时针绘制
        shp.graphics.drawArc(150,200,20,0,Math.PI,true);
        shp.graphics.endFill();
        this.addChild( shp );
    }
}
window['Main'] = Main;
egret.runEgret();