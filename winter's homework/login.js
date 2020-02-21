//实现点击“密码登录”和“短信登录”时页面的变化
let passwordLogin = document.getElementsByClassName("password-login");
let messageLogin = document.getElementsByClassName("message-login");
let method1 = document.getElementById("method1");
let method2 = document.getElementById("method2");
let forthIpt = document.getElementById("ipt4");
let firthIpt = document.getElementById("ipt5");
let tip3 = document.getElementById("tip3");
let tip4 = document.getElementById("tip4");
//验证邮箱的正则表达式
let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/g;
//验证手机号的正则表达式
let res =/^1[3456789]\d{9}$/g;
//验证密码格式，包含字母和数字且不少于六位
let setPassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/g;

passwordLogin[0].addEventListener("click",function () {
    passwordLogin[0].style.color = "#02A7D1";
    method1.style.display = "block";
    messageLogin[0].style.color = "#555555";
    method2.style.display = "none";
})
messageLogin[0].addEventListener("click",function () {
    messageLogin[0].style.color = "#02A7D1";
    method2.style.display = "block";
    passwordLogin[0].style.color = "#555555";
    method1.style.display = "none";
    //改变页面时给“登录”按钮绑定的点击事件
    firstBtn.addEventListener("click",function () {
        if(forthIpt.value == '' || forthIpt.value == null){
            tip3.innerHTML = `<span>手机号不能为空哦</span>`
        }else{
            if(res.test(forthIpt.value)){
                tip3.innerHTML = `<span></span>`
                if(firthIpt.value == '' || firthIpt == null){
                    tip4.innerHTML == `<span>短信验证码不能为空</span>`
                }else{
                    window.location.href = "demo.html";
                }
            }else{
                tip3.innerHTML = `<span>手机号格式不正确</span>`
                return
            }
        }
    })
})

//实现带点击“记住我”图标变化的效果
let rember = document.getElementById("rember");
let remberImage = document.getElementById("rember-image");
let counter = 0;
rember.addEventListener("click",function () {
    counter++;
    if(counter%2 == 1){
        rember.style.backgroundColor = "transparent";
        remberImage.style.display = "none";
        rember.style.backgroundColor = "transparent";
    }else{
        rember.style.backgroundColor = "#00a1d6";
        remberImage.style.display = "block";
        rember.style.backgroundColor = "#00a1d6";
        rember.style.color = "#ffffff";
    }
})

//给“登录按钮绑定点击事件
let firstIpt = document.getElementById("ipt1");
let secondIpt = document.getElementById("ipt2");
let tip1 = document.getElementById("tip1");
let tip2 = document.getElementById("tip2");
let firstBtn = document.getElementById("btn1");
let secondBtn = document.getElementById("btn2");
firstBtn.addEventListener("click",function () {
    let firstIptValue = firstIpt.value;
    if( firstIptValue == ''){
        tip1.innerHTML = `<span>请输入注册时用的邮箱或者手机号呀</span>`
     }else{
        if( res.test(firstIptValue)){
            tip1.innerHTML = `<span></span>`
            let secondIptValue = secondIpt.value;
            if( secondIptValue == '' || secondIptValue == null){
                tip2.innerHTML = `<span>喵，你没输入密码么？</span>`
            }else{
                if(setPassword.test(secondIptValue)){
                    tip2.innerHTML = `<span></span>`
                    window.location.href = "demo.html"
                }else{
                    tip2.innerHTML = `<span>密码至少包含六位数字和字母</span>`
                }
            }
        }else{
            tip1.innerHTML = `<span>输入的手机号或邮箱格式有误</span>`
        }
    } 
    
})
//给第一个输入框添加键盘事件
firstIpt.onkeydown = function () {
    tip1.innerHTML = `<span></span>`
}
//给第二个输入框添加键盘事件
secondIpt.onkeydown = function () {
    tip2.innerHTML = `<span></span>`
}










