class Main extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    onAddToStage(event) {
        // 1.普通文本
        // 普通文本是用于显示标准文本内容的文本类型。
        var label = new egret.TextField();
        label.text = "This is a text!";
        label.textColor = 0x000000;
        this.addChild(label);

        // 2.输入文本
        // 输入文本是允许用户输入的文本类型。
        // 将文本框设置为可输入的代码如下：
        var txInput = new egret.TextField();
        txInput.type = egret.TextFieldType.INPUT;
        txInput.width = 282;
        txInput.height = 43;
        txInput.x = 134;
        txInput.y = 592;
        txInput.textColor = 0x000000;
        /// 注意_container是事先建立好的一个显示容器，即 egret.Sprite，并且已经添加到显示列表中
        this.addChild(txInput);
        var _myGrid = new GridSprite();
        this.addChild(_myGrid);
    }
}
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