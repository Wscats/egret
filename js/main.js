class Main extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    onAddToStage(event) {
        let textfield = new egret.TextField();
        this.addChild(textfield);
        textfield.textColor = 0xff0000;
        textfield.text = 'hello world';

        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000, 1);
        shp.graphics.drawRect(0, 0, 100, 200);
        shp.graphics.endFill();
        shp.scaleX = 0.5; 
        shp.scaleY = 0.5;
        shp.rotation = 30;
        this.addChild(shp);
    }
}
window['Main'] = Main;
egret.runEgret();