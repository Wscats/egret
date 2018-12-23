class Main extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    onAddToStage(event) {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        this.addChild(shp);


        var shp2 = new egret.Shape();
        shp2.graphics.beginFill(0x00ff00);
        shp2.graphics.drawCircle(0, 0, 20);
        shp2.graphics.endFill();
        this.addChild(shp2);
        
        shp2.x = 20;
        shp2.y = 20;

        // 将被遮罩显示对象的 mask 属性设置为遮罩对象
        shp.mask = shp2;
        // 通过将 mask 属性设置为 null 可以删除遮罩：
        // shp.mask = null;
    }
}
window['Main'] = Main;
egret.runEgret();