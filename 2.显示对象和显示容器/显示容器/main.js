class Main extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    onAddToStage(event) {
        // 在文档类中，实例化 GridSprite 即可。
        var _myGrid = new GridSprite();
        this.addChild(_myGrid);
    }
}
// 自定义容器，可编写一个类，继承 DisplayObjectContainer 。如果要同时实现Graphics绘图功能，可继承 Sprite
// 下面是一个自定义容器类的示例，该示例定义了一个GridSprite类。这个类默认绘制一个红蓝相间的格子
class GridSprite extends egret.Sprite {
    constructor() {
        super();
        this.drawGrid();
    }
    drawGrid() {
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(0, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(50, 50, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(50, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(0, 50, 50, 50);
        this.graphics.endFill();
    }
}
window['Main'] = Main;
egret.runEgret();