class Main extends egret.DisplayObjectContainer {
    constructor() {
        super();
        //创建一个计时器对象
        var timer = new egret.Timer(500, 5);
        //注册事件侦听器
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        //开始计时
        //三个方法为 start, reset 和 stop。作用分别是开始计时，重新计时和暂停计时
        timer.start();
    }
    timerFunc() {
        console.log("计时");
    }
    timerComFunc() {
        console.log("计时结束");
    }
}
window['Main'] = Main;
egret.runEgret();