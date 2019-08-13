var sign=document.getElementById('sign')
var login=document.getElementById('login')
function sign_in(){
 
    sign.setAttribute("style","display:block"); 
    login.setAttribute("style","bdisplay:none")
      

}
function sign_on() {
    sign.setAttribute("style","display:none"); 
    login.setAttribute("style","display:block")
}
//denglu 
function sn() {
    var sname = lname.value
    var spwsd = lpwsd.value
    console.log(sname)
    console.log(spwsd)
    if (sname != "" && spwsd != "") {
        //var xhr = new XMLHttpRequest();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.status == 200 && xhr.readyState == 4) {
                var result = JSON.parse(xhr.responseText);
                console.log(result)
                var uid = result[0].uid
                console.log(result[0].uid)
                sessionStorage.uid = uid
                console.log(sessionStorage.uid)
                window.location.href = '../index/index.html'; //正确登录后
            }
        }
        xhr.open("post", "http://127.0.0.1:3000/login/sgin", true);
        var formdata = "uname=" + sname + "&upwd=" + spwsd;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(formdata);
    }
}
// 注册
//函数设定
var k_phone = phone.value;
var k_uname = uname.value;
var k_upwd = upwd.value;
//邮箱设定
var notemail = 0

function notemail_show() {
    var str = email.value;
    if (!str) {
        email_msg.innerHTML = "邮箱不能为空"
    } else {
        email_msg.innerHTML = "✔"
        return notemail = 1
    }
}
//密码设定
var notupwd = 0;

function notupwd_show() {
    var str = upwd.value;
    if (!str) {
        upwd_msg.innerHTML = "密码不能为空";
    } else if (str.length > 5 && str.length < 13) {
        upwd_msg.innerHTML = "✔";
        return notupwd = 1;
    } else {
        upwd_msg.innerHTML = "密码不符合要求";
    }
}
var notcpwd = 0;

function notcpwd_show() {
    var str = cpwd.value;
    if (!str) {
        cpwd_msg.innerHTML = "请确认密码";

    } else if (str == upwd.value) {
        cpwd_msg.innerHTML = "✔";
        return notcpwd = 1;
    } else {
        cpwd_msg.innerHTML = "前后密码不一致";
    }
}
//用户名验证
var notuname = 0;

function notuname_show() {
    if (!uname.value) {
        uname_msg.innerHTML = "用户名不能为空";
    } else if (uname.value.length < 5 || uname.value.length > 20) {
        uname_msg.innerHTML = "用户名不符合要求";
    } else {
        var str = uname.value;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var result = xhr.responseText;
                console.log(result)
                if (result == 1) {
                    uname_msg.innerHTML = "✔";
                    return notuname = 1;
                } else {
                    uname_msg.innerHTML = "用户名已被注册"
                }
            }
        }
        xhr.open("post", "http://127.0.0.1:3000/login/reg", true);
        var formdata = "uname=" + str;
        console.log(formdata)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(formdata);
    }
}
//手机号码长度验证
var notphone = 0;

function notphone_show() {
    if (!phone.value) {
        phone_msg.innerHTML = "手机号码不能为空";
    } else if (phone.value.length !== 11) {
        phone_msg.innerHTML = "请输入合法号码";
    } else if (phone.value.length == 11 && phone.value > 0) {
        phone_msg.innerHTML = "✔";
        return notphone = 1;
    }
}
//提交设定
function fn() {
    if (notphone == 1) {
        if (notuname == 1) {
            if (notupwd == 1) {
                if (notcpwd == 1) {
                    if (notemail == 1) {
                        var xhr = new XMLHttpRequest();
                        console.log(xhr)
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4 && xhr.status == 200) {
                                var result = xhr.responseText;
                                console.log(result)
                                sign.setAttribute("style","display:block"); 
                                login.setAttribute("style","bdisplay:none")
      

                                
                            }
                        }
                        xhr.open("post", "http://127.0.0.1:3000/login/ajaxreg", true)
                        var formdata = "uname=" + uname.value + "&upwd=" + upwd.value + "&email=" + email
                            .value + "&phone=" + phone.value;
                        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                        xhr.send(formdata)
                        console.log(formdata)
                    }
                }
            }
        }
    }
    else{
        alert("请按要求输入")
    }







}