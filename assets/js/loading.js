console.log(document.readyState);

window.onload = function () {
        var obj = document.getElementById("loading");
        obj.innerHTML = "";//删除div内容
        //删除div
        var parentObj = obj.parentNode;//获取div的父对象
        parentObj.removeChild(obj);//通过div的父对象把它删除
        console.log("loading completed.");
}