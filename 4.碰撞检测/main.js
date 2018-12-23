class Main extends egret.DisplayObjectContainer {
    infoText; // 私有变量
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    onAddToStage(event) {
        // 碰撞检测
        this.drawText();

        // var shp = new egret.Shape();
        // shp.graphics.beginFill(0xff0000);
        // shp.graphics.drawRect(0, 0, 100, 100);
        // shp.graphics.endFill();
        // shp.width = 100;
        // shp.height = 100;
        // this.addChild(shp);

        // 矩形碰撞检测
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawCircle(0, 0, 20);
        shp.graphics.endFill();
        shp.width = 100;
        shp.height = 100;
        this.addChild(shp);
        // shp 是待检测的显示对象，(x, y)是待检测的点的位置。如果发生碰撞，则方法返回 true,如果没有发生碰撞，则返回 false
        // var isHit = shp.hitTestPoint(10, 10); // true
        // var isHit = shp.hitTestPoint(101, 101); //false

        var isHit = shp.hitTestPoint(1, 1, true); // 相比于矩形碰撞检测，增加了第三个参数 true ，表示要使用像素碰撞检测
        this.infoText.text = "isHit: " + isHit;
    }
    drawText() {
        this.infoText = new egret.TextField();
        this.infoText.y = 200;
        this.infoText.text = "isHit";
        this.infoText.textColor = 0xff0000;
        this.addChild(this.infoText);
    }
}
window['Main'] = Main;
egret.runEgret();