$(function () {
    //app原生交互
    $(document).on("click", ".lottery_btn2", function () {
        UserInfo();
    });
    //Recharge
    $(document).on("click", "#recharge", function () {
        Recharge();
    });
});

function UserInfo() {
    var u = navigator.userAgent,
        app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    var isIOS = !!u.match(/\(i[^;]+;( u;)? CPU.+Mac OS X/);

    if (isAndroid) {
        window.android.userInfo();
    } else if (isIOS) {
        window.webkit.messageHandlers.userInfo.postMessage('');
    }
}
function Recharge() {
    var u = navigator.userAgent,
        app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    var isIOS = !!u.match(/\(i[^;]+;( u;)? CPU.+Mac OS X/);

    if (isAndroid) {
        window.android.recharge();
    } else if (isIOS) {
        window.webkit.messageHandlers.recharge.postMessage('');
    }
}


//app那边调用方法 返回数据
function userInformation(data) {
    alert(data);
}