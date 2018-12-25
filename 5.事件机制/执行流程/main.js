class Main extends egret.DisplayObjectContainer {
    constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    onAddToStage(event) {
        //创建一个男朋友
        var boy = new Boy();
        boy.name = "男朋友";
        //创建一个女朋友
        var girl = new Girl();
        girl.name = "女朋友";
        //注册侦听器
        boy.addEventListener(DateEvent.DATE, girl.getDate, girl);
        //男朋友发送要求
        boy.order();
        //约会邀请完成后，移除侦听器
        boy.removeEventListener(DateEvent.DATE, girl.getDate, girl);
    }
}
class Boy extends egret.Sprite {
    constructor() {
        super();
    }
    order() {
        //生成约会事件对象
        var daterEvent = new DateEvent(DateEvent.DATE);
        //添加对应的约会信息
        daterEvent._year = 2014;
        daterEvent._month = 8;
        daterEvent._date = 2;
        daterEvent._where = "肯德基";
        daterEvent._todo = "共进晚餐";
        //发送要求事件
        this.dispatchEvent(daterEvent);
    }
}
class Girl extends egret.Sprite {
    constructor() {
        super();
    }
    getDate(evt) {
        console.log("得到了" + evt.target.name + "的邀请！");
        console.log("会在" + evt._year + "年" + evt._month + "月" + evt._date + "日，在" + evt._where + evt._todo);
    }
}

class DateEvent extends egret.Event {
    DATE = "约会";
    _year = 0;
    _month = 0;
    _date = 0;
    _where = "";
    _todo = "";
    constructor(type, bubbles = false, cancelable = false) {
        super(type, bubbles, cancelable);
    }
}
window['Main'] = Main;
egret.runEgret();