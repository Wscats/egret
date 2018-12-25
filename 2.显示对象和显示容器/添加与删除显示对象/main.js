class Main extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    onAddToStage(event) {
        // 显示对象的坐标系是相对坐标系，而非绝对坐标系。
        // 当一个显示对象的x,y坐标值均设置为100的时候，该坐标值表示，当前显示对象居于父级原点100，100的位置。通过下面一个实例来说明具体区别。
        // 首先建立两个容器，为了能够方便的看清效果，将两个容器的宽高都设置为100*100，同时将两个容器分别设置为红色和绿色。
        // 绿色的容器x轴位置设置为120像素。
        // 红色的容器y轴位置设置为130像素
        // 将两个容器都添加到显示列表中，他们的父级都是文档类。下面是示例代码：
        var sprcon1 = new egret.Sprite();
        sprcon1.graphics.beginFill(0x00ff00);
        sprcon1.graphics.drawRect(0, 0, 100, 100);
        sprcon1.graphics.endFill();
        this.addChild(sprcon1);
        sprcon1.x = 120;
        var sprcon2 = new egret.Sprite();
        sprcon2.graphics.beginFill(0xff0000);
        sprcon2.graphics.drawRect(0, 0, 100, 100);
        sprcon2.graphics.endFill();
        this.addChild(sprcon2);
        sprcon2.y = 130;


        var spr = new egret.Sprite();
        spr.graphics.beginFill(0x0000ff);
        spr.graphics.drawRect(0, 0, 50, 50);
        spr.graphics.endFill();
        spr.x = 10;
        spr.y = 10;
        // 添加到文档类
        // this.addChild(spr);

        // 添加到sprcon1绿色容器中：
        // sprcon1.addChild(spr);

        // 添加到sprcon2红色容器中：
        sprcon2.addChild(spr);
    }
}
window['Main'] = Main;
egret.runEgret();