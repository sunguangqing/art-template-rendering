# art-template 模板引擎渲染静态页面

### 数据渲染

### 1. 引入template-web.js文件
```javascript
<script type="text/javascript" src="dist/template-web.js"></script>
```

### 2. 编写HTML模板
```html
<section class="history-cont" id="history">
    <script id="historytpl" type="text/html">
        {{each data dd index}}
            <div class="list">
                <img class="logo pos1" src="dist/images/logo.png" />
                <div class="txt-1"><span class="t1"><i class="f1">BTC</i>指数</span><span class="t2">/{{dd.day + ' ' + dd.time}}盘口</span></div>
                <div class="txt-2">{{if dd.type == 0}} 看空 {{else}} 看多 {{/if}}，投入{{dd.count + ' ' + dd.coinName}}</div>
                {{if dd.profit < 0}}
                    <div class="txt-3 down pos1">失败</div>
                    {{else}}
                        <div class="txt-3 up pos1">
                            <p class="t1">+{{dd.profit/100}}</p>
                            <p class="t2">+{{dd.odds * 100}}%</p>
                        </div>
                {{/if}}
            </div>
        {{/each}}
    </script>
</section>
```

### 3. 造假数据，输出到静态页面
```javascript
var $history = {
    init: function () {
		//模拟ajax获取数据
        var datas = {}, data = [];
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
        datas.data = data;

        //渲染数据
        $history.renderIndexDom("history", "historytpl", datas);
        $history.renderIndexDom("title", "", datas);
    },
    //渲染模板
    renderIndexDom: function (domid, tplid, data) {
        var html = template(tplid, data);
        document.getElementById(domid).innerHTML = html;
    }

}
```

### 4. 方便后面，ajax调接口
```javascript
var $history = {
    init:function(){
        //ajax获取数据
        $.ajax({
            url:"/data/art-template.json",
            type:"post",
            data:{pageNo: 1, selectType:1},
            dataType:"json",
            success:function(res){
                //渲染数据
                $history.renderIndexDom("history","historytpl",res.data);
            }
        });
    },
    //渲染模板
    renderIndexDom:function(domid,tplid,data){
        var html = template(tplid, data);
        document.getElementById(domid).innerHTML = html;
    }
}
```

### 5. 初始化数据
```
$(function () {
    //初始化数据
    $history.init();
});
```
