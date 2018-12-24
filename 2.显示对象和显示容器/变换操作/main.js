class Main extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    onAddToStage(event) {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0x00ff00);
        shp.graphics.drawRect(0, 0, 100, 100);
        shp.graphics.endFill();
        // 1.位置和平移
        // 绘制了一个绿色的正方形，锚点默认在正方形的左上角位置，通过设置 shp 的 x、y属性来改变正方形的位置
        shp.x = 100;
        shp.y = 100;

        // 2.修改锚点
        // 可通过anchorOffsetX和 anchorOffsetY属性访问修改锚点的位置
        // 修改上例锚点的位置，让锚点居于正方形左上角x轴 50 像素的位置
        shp.anchorOffsetX = 50;
        this.addChild(shp);

        // 3.本地坐标和舞台坐标
        // this.makeContainer();


        // 4.平移
        this.makeCircle();
        this.makeCircle();

        // 5.改变圆的大小
        this.changeCircleSize();
    }
    makeContainer() {
        // 创建一个空的 DisplayObjectContainer，把它的 x 和 y 坐标都改为
        var container = new egret.DisplayObjectContainer();
        container.x = 200;
        container.y = 200;
        this.addChild(container);
        //画一个红色的圆，添加到 container 中
        var circle = new egret.Shape();
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(25, 25, 25);
        circle.graphics.endFill();
        container.addChild(circle);
        //给圆增加点击事件
        circle.touchEnabled = true;
        circle.addEventListener(egret.TouchEvent.TOUCH_TAP, onClick, this);

        function onClick() {
            //把舞台左上角的坐标(0,0)转换为 container 内部的坐标
            var targetPoint = container.globalToLocal(0, 0);
            //重新定位圆，可以看到圆形移到了屏幕的左上角
            circle.x = targetPoint.x;
            circle.y = targetPoint.y;
        }
    }
    makeCircle() {
        //设定2个偏移量
        var offsetX;
        var offsetY;
        //画一个红色的圆
        var circle = new egret.Shape();
        circle.graphics.beginFill(0xff0000);
        circle.graphics.drawCircle(25, 25, 25);
        circle.graphics.endFill();
        this.addChild(circle);
        //手指按到屏幕，触发 startMove 方法
        circle.touchEnabled = true;
        circle.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this);
        //手指离开屏幕，触发 stopMove 方法
        circle.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this);

        function startMove(e) {
            //计算手指和圆形的距离
            offsetX = e.stageX - circle.x;
            offsetY = e.stageY - circle.y;
            //手指在屏幕上移动，会触发 onMove 方法
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }

        function stopMove(e) {
            console.log(22);
            //手指离开屏幕，移除手指移动的监听
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }

        function onMove(e) {
            //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
            circle.x = e.stageX - offsetX;
            circle.y = e.stageY - offsetY;
        }
    }

    changeCircleSize() {
        var circle = new egret.Shape();
        circle.graphics.beginFill(0xff6666);
        circle.graphics.drawCircle(80, 60, 25);
        circle.graphics.endFill();
        console.log(circle);
        this.addChild(circle);
        //手指按到屏幕，触发 startMove 方法
        circle.touchEnabled = true;
        circle.addEventListener(egret.TouchEvent.TOUCH_TAP, changeSize, this);

        function changeSize() {
            circle.scaleX = 2;
            circle.scaleY = 2;
        }
    }
}

window['Main'] = Main;
egret.runEgret();