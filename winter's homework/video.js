let video = document.getElementById("video");
let play = document.getElementsByClassName("play");
let pause = document.getElementsByClassName("pause");
let totalTime = document.getElementById("total");
let currPlayTime = document.getElementById("current");
let volume = document.getElementById("volume");
let big = document.getElementById("big");
let small = document.getElementById("small");
let loaded = document.getElementById("loaded");
let point = document.getElementById("point");
let progress = document.getElementById("progress");

//播放和暂停,
play[0].onclick = function(){
        video.play();
        play[0].style.display = "none";
        pause[0].style.display = "block";   
        totalTime.innerHTML = getFormatTime(video.duration);
       
};
pause[0].onclick = function () {
    video.pause();
    play[0].style.display = "block";
    pause[0].style.display = "none";   
}
big.onclick = function () {
    video.webkitRequestFullScreen();
}

//时间单位转换
function getFormatTime(time) {
    var h = parseInt(time/3600),
        m = parseInt(time%3600/60),
        s = parseInt(time%60);
    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;

    return h+":"+m+":"+s;
}
//播放进度
video.ontimeupdate = function () {
    let currTime = this.currentTime;
    currPlayTime.innerHTML = getFormatTime(currTime);
    duration = this.duration;
    let pre = currTime / duration *100 + "%";
    loaded.style.display = "block";
    point.style.display = "block";
    loaded.style.width = pre;
    point.style.left = pre;
    if(pre == 100 + "%"){
        play[0].style.display = "block";
        pause[0].style.display = "none"; 
    }
}

//跳跃播放
progress.onclick = function (e) {
    video.currentTime = (e.offsetX/this.offsetWidth)*video.duration;
};
//拖拽进度
point.onmousedown = function(event){
    var event = event || window.event;
    var leftVal = event.clientX - this.offsetLeft;
    // var that = this;
    // 拖动一定写到 down 里面才可以
    document.onmousemove = function(event){
    var event = event || window.event;
    pointleft = event.clientX - leftVal;
    if(pointleft < 0)
    pointleft = 0;
    else if(pointleft > progress.offsetWidth - point.offsetWidth)
    pointleft = progress.offsetWidth - point.offsetWidth;
    loaded.style.width = pointleft +'px' ;
    point.style.left = pointleft + "px";
    
    let distance = parseInt(pointleft/(progress.offsetWidth-point.offsetWidth) * 100) + "%";
    video.currentTime = distance*video.duration;
    //防止选择内容--当拖动鼠标过快时候，弹起鼠标，point也会移动，修复bug
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    }
    document.onmouseup = function(){
        document.onmousemove = null; //弹起鼠标不做任何操作
       
        
        }

    }
let oVideoBox = document.getElementById("player");
let oContent = document.getElementById("content");
let oSend = document.getElementById("send");
oSend.onclick = function () {
    let content = oContent.value;
    createDanmu(content);
}
function createDanmu (content) {
    if(!content){
        alert("请输入内容后发送");
        return
    }
    //创建元素
    let oSpan = document.createElement("span");
    oSpan.className = "danmu"
    oSpan.innerHTML = content;
    oVideoBox.appendChild(oSpan);
    let maxTop = oVideoBox.clientHeight - oSpan.offsetWidth;
    oSpan.style.top = Math.round(Math.random() * maxTop) + "px";
    let timer = setInterval(function () {
        let start = oSpan.offsetLeft;
        start -=5;
        oSpan.style.left = start + 'px';
        if (start < -oSpan.offsetWidth){
            clearInterval(timer);
            oSpan.remove()
        }
    },50)
    oContent.value = '';
}
let list = document.getElementById("list");
let input = document.getElementById("input");
let text = document.getElementById("text");
input.onclick = function () {
    let textValue = text.value;
    creatComment(textValue);
    text.value = null;  
}
function creatComment (textValue) {
    if(!textValue){
        alert("请输入内容后发送");
        return
    }
    //创建元素
    let oLi = document.createElement("li");
    oLi.className = "comment";
    oLi.innerHTML = `<img src="./video.img/face.webp">`+textValue + `<button class="delete">删除评论</button>`;
    list.appendChild(oLi);
    let lose = document.querySelector(".delete");
    lose.onclick = function () {
        oLi.remove()
    }
    
    
}

