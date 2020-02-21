let user = document.getElementById("ipt1");
let password = document.getElementById("ipt2");
let agree = document.getElementsByClassName("agree");
let counter = 0;
let control;
let agreeImage = document.getElementsByClassName("agree-pic");
let enroll = document.getElementById("enroll");
let tip = document.getElementById("tip");
let confirmusername = new RegExp ("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9]){3,}$")
let confirmPassword = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/g;
agree[0].addEventListener("click",function () {
    counter++;
    if(counter%2 == 1){
        agree[0].style.backgroundColor = "#00a1d6";
        agreeImage[0].style.display = "block";
        enroll.style.backgroundColor = "#00a1d6";
        enroll.style.color = "#ffffff";
        control = "0";
    }else{
        agree[0].style.backgroundColor = "transparent";
        agreeImage[0].style.display = "none";
        enroll.style.backgroundColor = "transparent";
        control = "";
    }
})
console.log("aifsdnc")
function checkUsername () {
    let xml = new XMLHttpRequest();
    xml.open("GET","https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/spread1");
    xml.send();
    xml.onreadystatechange = function () {
        console.log('dfgsd')
        if(xml.readyState == 4 && xml.status == 200){
            console.log('uhgdigh')
        }
      
    }
   
}
enroll.addEventListener("click",function () {
    if(control){
        let usernameValue = user.value;
        if(confirmusername.test(usernameValue)){
            checkUsername() 
            if(confirmPassword.test(password.value)){
                alert("注册成功")
                window.location.href = "demo.html"
            }else{
                tip.innerHTML = `<span>密码至少包括六位字符或数字</span>`
            }
        }else{
            suggest.innerHTML = `<span>昵称不能为空</span>`
        }
    }else{
        alert("请先勾选协议")
    }
})
user.onkeydown = function (){
    suggest.innerHTML = `<span></span>`
}
password.onkeydown = function () {
    tip.innerHTML = `<span></span>`
}

let changePage = document.getElementsByClassName("had-own");
changePage[0].addEventListener("click",function () {
    window.location.href = "login.html"
})




