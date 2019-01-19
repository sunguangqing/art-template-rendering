var $history = {
    init: function () {
        var datas = {};
        var title = '历史记录';
        var data = [];
        for(var i = 1; i < 15; i++){
            var dd = {};
            if(i % 3 === 0){
                dd.type = 0;
                dd.profit = i * i;
            }else{
                dd.type = 1;
                dd.profit = -1;
            }
            dd.day = '2018-01-04';
            dd.time = '01:04:18';
            dd.count = i;
            dd.coinName = 'BTC';
            dd.odds = i / 10;
            data.push(dd);
        }
        datas.title = title;
        datas.data = data;
        //渲染数据
        $history.renderIndexDom("title", "titletpl", datas);
        $history.renderIndexDom("history", "historytpl", datas);
    },
    //渲染模板
    renderIndexDom: function (domid, tplid, data) {
        var html = template(tplid, data);
        document.getElementById(domid).innerHTML = html;
    }

}

$(function () {
    //初始化数据
    $history.init();
});
