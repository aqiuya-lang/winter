//neck处轮播图
let slides = document.getElementsByClassName("slide")
let points = document.getElementsByClassName('point')
let lunIcons = document.getElementsByClassName('lun-icon');
let index = 0;
let time = 0;
function clearActive () {
     for(let i = 0; i < points.length; i++){
         points[i].className = 'point';
         slides[i].className = 'slide';
         lunIcons[i].style.display = 'none';
     }
}
function goNext () {
    if(index < 4){
        index++;
    }else{
        index = 0;
    }
    goIndex();
}
function goIndex () {
    clearActive();
    points[index].className = "point active";
    slides[index].className = 'slide active';
    lunIcons[index].style.display = 'block';
}
for(let i = 0; i < points.length; i++){
    points[i].addEventListener('click',function () {
        let pointIndex = this.getAttribute('data-index')
        index = pointIndex;
       goIndex();
       time = 0;
    })
}
//自动轮播
setInterval(function () {
    time++;
    if(time == 20){
        goNext();
        time = 0;
    }
},100)

//实现点击按钮切换效果
let leftBtn = document.getElementById('lun-left-btn');
let rightBtn = document.getElementById('lun-right-btn');
let firstFloor = document.getElementsByClassName('first-floor');
let secondFloor = document.getElementsByClassName('second-floor');
let count = 0;
leftBtn.addEventListener('click',function () {
    count++;
    if(count%2 == 1){
            for(let i = 0; i < 6 ; i++){
                firstFloor[i].style.display = 'block';
                secondFloor[i].style.display = 'none';
        }
    }else{
        for(let i = 0; i < 6 ; i++){
            firstFloor[i].style.display = 'none';
            secondFloor[i].style.display = 'block';
    }
   }
})
rightBtn.addEventListener('click',function () {
    count++;
    if(count%2 == 1){
            for(let i = 0; i < 6 ; i++){
                firstFloor[i].style.display = 'block';
                secondFloor[i].style.display = 'none';
        }
    }else{
        for(let i = 0; i < 6 ; i++){
            firstFloor[i].style.display = 'none';
            secondFloor[i].style.display = 'block';
    }
   }
})

//推广板块和新年祭板块的文本渲染
let spreadSp1 = document.getElementById('spread-bottom-sp1');
let spreadSp2 = document.getElementById('spread-bottom-sp2');
let spreadSp3 = document.getElementById('spread-bottom-sp3');
let spreadSp4 = document.getElementById('spread-bottom-sp4');
let newyearSp1 = document.getElementById('newyear-bottom-sp1');
let newyearSp2 = document.getElementById('newyear-bottom-sp2');
let newyearSp3 = document.getElementById('newyear-bottom-sp3');
let newyearSp4 = document.getElementById('newyear-bottom-sp4');
//单个插入
function ajax (url,spread){
    let xhr = new XMLHttpRequest ();
    xhr.open("GET",url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200){
            let res =JSON.parse(xhr.responseText);
            console.log(res);
            spread.innerHTML = `<span>${res.text}</span>`;
        }            
    }
}
ajax("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/spread1",spreadSp1);
ajax("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/spread2",spreadSp2);
ajax("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/spread3",spreadSp3);
ajax("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/spread4",spreadSp4);
ajax("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/spread1",newyearSp1);
ajax("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/spread2",newyearSp2);
ajax("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/spread3",newyearSp3);
ajax("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/spread4",newyearSp4);

//直播板块的文本
let themeLiveSps = document.getElementsByClassName("theme-live-sp");
let themeLiveis = document.getElementsByClassName("theme-live-i");
let themeLiveps = document.getElementsByClassName("theme-live-p");
//多个遍历
function getData (url,data){
    let xml = new XMLHttpRequest ();
    xml.open("GET",url);
    xml.send(null);
    xml.onload = function () {
        if (xml.status == 200 && xml.readyState == 4){
            var res = JSON.parse(xml.responseText);
            console.log(res);
            function showData () {
                for(let i = 0; i < data.length; i++){
                        data[i].innerHTML = res.text[i];
                    }
            }
                showData(res)
        }
    }
}
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/livespan",themeLiveSps);
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/livei",themeLiveis);
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/livea",themeLiveps)
let seniorityp = document.getElementsByClassName("seniority-content-p");
let senioritysp = document.getElementsByClassName("seniority-content-sp");
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/seniority",seniorityp);
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/seniority1",senioritysp);
let seniority = document.getElementById("seniority");
let care = document.getElementById("care");
let introduce = document.getElementById("introduce");
let seniroityContent = document.getElementsByClassName("seniority-content");
let careContent = document.getElementsByClassName("care-content");
let introduceContent = document.getElementsByClassName("introduce-content");
//为“正在直播”板块右侧的实现点击切换效果
care.addEventListener('click',function () {
    care.style.color = "#00a1d6";
    care.style.borderBottomColor= "#00a1d6";
    seniority.style.borderBottomColor = "transparent";
    seniority.style.color ="#505050";
    introduce.style.borderBottomColor = "transparent";
    introduce.style.color = "#505050";
    careContent[0].style.display = "block";
    introduceContent[0].style.display = "none";
    seniroityContent[0].style.display = "none";
});
introduce.addEventListener('click',function () {
    introduce.style.color = "#00a1d6";
    introduce.style.borderBottomColor= "#00a1d6";
    seniority.style.borderBottomColor = "transparent";
    seniority.style.color ="#505050";
    care.style.borderBottomColor = "transparent"
    care.style.color = "#505050";
    introduceContent[0].style.display = "block";
    careContent[0].style.display = "none";
    seniroityContent[0].style.display = "none";
});
seniority.addEventListener("click",function () {
    seniority.style.color = "#00a1d6";
    seniority.style.borderBottomColor= "#00a1d6";
    care.style.borderBottomColor = "transparent"
    care.style.color = "#505050";
    introduce.style.borderBottomColor = "transparent";
    introduce.style.color = "#505050";
    seniroityContent[0].style.display = "block";
    careContent[0].style.display = "none";
    introduceContent[0].style.display = "none";
})
//“正在直播”板块中右侧“为你推荐”的轮播图
let introducePics = document.getElementsByClassName("introduce-pic");
let introduceIcons = document.getElementsByClassName("introduce-icon");
let introduceLis  = document.getElementsByClassName("introduce-li")
let counter = 0;
let timer = 0;
function clearChange () {
    for(let i = 0; i < introducePics.length; i++){
        introducePics[i].className = "introduce-pic";
        introduceLis[i].className = "introduce-li";
        introduceIcons[i].style.display = "none";
    }
}

function next () {
    if (counter < 1){
        counter++;
    }else{
        counter = 0;
    }
    nextChange();
}
function nextChange () {
    clearChange();
    introducePics[counter].className = "introduce-pic act";
    introduceLis[counter].className = "introduce-li act";
    introduceIcons[counter].style.display = "block";
}

for(let i = 0; i<introduceIcons.length; i++){
    introduceLis[i].addEventListener("click",function () {
        let liCounter = this.getAttribute("data-change");
        counter = liCounter;
        nextChange();
        timer = 0;
    })
}
setInterval(function () {
    timer++;
    if(timer == 40){
        next();
        timer = 0;
    }
},100)

//“动画”板块的文本
let themeCartoonSps = document.getElementsByClassName("theme-cartoon-sp");
let themeCartoonps = document.getElementsByClassName("theme-cartoon-p");
let cartoonSpecialSp = document.getElementsByClassName("cartoon-special-sp");
let cartoonRightSps = document.getElementsByClassName("cartoon-right-sp");
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/left",themeCartoonSps);
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/leftexplain",themeCartoonps);
ajax("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/sheep",cartoonSpecialSp[0]);
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/right",cartoonRightSps);
let dramaRightSps = document.getElementsByClassName("drama-right-sp");
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/right1",dramaRightSps);

//“番剧”板块
let dramaListOne = document.getElementById("drama-list-one");
let dramaListTwo = document.getElementById("drama-list-two");
let dramaListThree = document.getElementById("drama-list-three");
let dramaListFour = document.getElementById("drama-list-four");
let dramaListFive = document.getElementById("drama-list-five");
let dramaListSix = document.getElementById("drama-list-six");
let dramaListSeven = document.getElementById("drama-list-seven");
let dramaListEight = document.getElementById("drama-list-eight");

let dramaLatest = document.getElementsByClassName("drama-latest");
let dramaMonday = document.getElementsByClassName("drama-monday");
let dramaTuesday = document.getElementsByClassName("drama-tuesday");
let dramaWendesday = document.getElementsByClassName("drama-wendesday");
let dramaTursday = document.getElementsByClassName("drama-thursday");
let dramaFirday = document.getElementsByClassName("drama-firday");
let dramaSaturday = document.getElementsByClassName("drama-saturday");
let dramaSunday = document.getElementsByClassName("drama-sunday");
//实现“番剧”板块的周一至周日的点击效果
function clearMonitor (clearDramaData,clearDramaContent) {
        clearDramaData.style.color = "#212121";
        clearDramaData.style.borderBottomColor = "transparent";
        clearDramaContent[0].style.display = "none";
}

dramaListOne.addEventListener("click",function () {
            dramaListOne.style.color = "#00a1d6";
            dramaListOne.style.borderBottomColor = "#00a1d6";
            dramaLatest[0].style.display = "block";
            clearMonitor(dramaListTwo,dramaMonday);
            clearMonitor(dramaListThree,dramaTuesday);
            clearMonitor(dramaListFour,dramaWendesday);
            clearMonitor(dramaListFive,dramaTursday);
            clearMonitor(dramaListSix,dramaFirday);
            clearMonitor(dramaListSeven,dramaSaturday);
            clearMonitor(dramaListEight,dramaSunday);
        })

           
       
dramaListTwo.addEventListener("click",function () {
            dramaListTwo.style.color = "#00a1d6";
            dramaListTwo.style.borderBottomColor = "#00a1d6";
            dramaMonday[0].style.display = "block";
            clearMonitor(dramaListOne,dramaLatest);
            clearMonitor(dramaListThree,dramaTuesday);
            clearMonitor(dramaListFour,dramaWendesday);
            clearMonitor(dramaListFive,dramaTursday);
            clearMonitor(dramaListSix,dramaFirday);
            clearMonitor(dramaListSeven,dramaSaturday);
            clearMonitor(dramaListEight,dramaSunday);
           
        })


dramaListThree.addEventListener("click",function () {
            dramaListThree.style.color = "#00a1d6";
            dramaListThree.style.borderBottomColor = "#00a1d6";
            dramaTuesday[0].style.display = "block";
            clearMonitor(dramaListOne,dramaLatest);
            clearMonitor(dramaListTwo,dramaMonday);
            clearMonitor(dramaListFour,dramaWendesday);
            clearMonitor(dramaListFive,dramaTursday);
            clearMonitor(dramaListSix,dramaFirday);
            clearMonitor(dramaListSeven,dramaSaturday);
            clearMonitor(dramaListEight,dramaSunday);
        })
dramaListFour.addEventListener("click",function () {
            dramaListFour.style.color = "#00a1d6";
            dramaListFour.style.borderBottomColor = "#00a1d6";
            dramaWendesday[0].style.display = "block";
            clearMonitor(dramaListOne,dramaLatest);
            clearMonitor(dramaListTwo,dramaMonday);
            clearMonitor(dramaListThree,dramaTuesday);
            clearMonitor(dramaListFive,dramaTursday);
            clearMonitor(dramaListSix,dramaFirday);
            clearMonitor(dramaListSeven,dramaSaturday);
            clearMonitor(dramaListEight,dramaSunday);
        })
dramaListFive.addEventListener("click",function () {
            dramaListFive.style.color = "#00a1d6";
            dramaListFive.style.borderBottomColor = "#00a1d6";
            dramaTursday[0].style.display = "block";
            clearMonitor(dramaListOne,dramaLatest);
            clearMonitor(dramaListTwo,dramaMonday);
            clearMonitor(dramaListThree,dramaTuesday);
            clearMonitor(dramaListFour,dramaWendesday);
            clearMonitor(dramaListSix,dramaFirday);
            clearMonitor(dramaListSeven,dramaSaturday);
            clearMonitor(dramaListEight,dramaSunday);
        })
dramaListSix.addEventListener("click",function () {
            dramaListSix.style.color = "#00a1d6";
            dramaListSix.style.borderBottomColor = "#00a1d6";
            dramaFirday[0].style.display = "block";
            clearMonitor(dramaListOne,dramaLatest);
            clearMonitor(dramaListTwo,dramaMonday);
            clearMonitor(dramaListThree,dramaTuesday);
            clearMonitor(dramaListFour,dramaWendesday);
            clearMonitor(dramaListFive,dramaTursday);
            clearMonitor(dramaListSeven,dramaSaturday);
            clearMonitor(dramaListEight,dramaSunday);
        })
dramaListSeven.addEventListener("click",function () {
            dramaListSeven.style.color = "#00a1d6";
            dramaListSeven.style.borderBottomColor = "#00a1d6";
            dramaSaturday[0].style.display = "block";
            clearMonitor(dramaListOne,dramaLatest);
            clearMonitor(dramaListTwo,dramaMonday);
            clearMonitor(dramaListThree,dramaTuesday);
            clearMonitor(dramaListFour,dramaWendesday);
            clearMonitor(dramaListFive,dramaTursday);
            clearMonitor(dramaListSix,dramaFirday);
            clearMonitor(dramaListEight,dramaSunday);
        })
dramaListEight.addEventListener("click",function () {
            dramaListEight.style.color = "#00a1d6";
            dramaListEight.style.borderBottomColor = "#00a1d6";
            dramaSunday[0].style.display = "block";
            clearMonitor(dramaListOne,dramaLatest);
            clearMonitor(dramaListTwo,dramaMonday);
            clearMonitor(dramaListThree,dramaTuesday);
            clearMonitor(dramaListFour,dramaWendesday);
            clearMonitor(dramaListFive,dramaTursday);
            clearMonitor(dramaListSix,dramaFirday);
            clearMonitor(dramaListSeven,dramaSaturday);
        })
//番剧右侧文本
let themeDrama_Sps = document.getElementsByClassName("theme-drama2-sp");
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/active",themeDrama_Sps);
//番剧动态的轮播图
let wraps = document.getElementsByClassName("wrap");
let drops = document.getElementsByClassName("drop");
let icos = document.getElementsByClassName("ico");
let scaler = 0;
let calculagraph = 0;
function clearVisable () {
    for(let i = 0; i < wraps.length; i++ ){
        wraps[i].className = "wrap";
        drops[i].className = "drop";
        icos[i].style.display = "none";
    }
}
function theLast () {
    if(scaler < 2){
        scaler++
    }else{
        scaler = 0
    }
    nextPic();
}
function nextPic () {
    clearVisable();
    wraps[scaler].className = "wrap vis";
    drops[scaler].className = "drop vis";
    icos[scaler].style.display = "block";
}
for(let i = 0; i < wraps.length; i++){
    drops[i].addEventListener("click",function () {
        let dropScaler = this.getAttribute("data-scaler");
        scaler = dropScaler;
        nextPic();
        calculagraph = 0;
    })
}
setInterval(function () {
    calculagraph++;
    if(calculagraph == 10){
        theLast();
        calculagraph = 0;
    }
},300)
//音乐板块的文本
let themeMusicSps = document.getElementsByClassName("theme-music-sp");
let themeMusips = document.getElementsByClassName("theme-music-p");
let musicRightSps = document.getElementsByClassName("music-right-sp");
let musicSpecialSp = document.getElementsByClassName("music-special-sp");
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/musicspan",themeMusicSps);
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/musicp",themeMusips);
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/musicright",musicRightSps);
ajax("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/music'special",musicSpecialSp[0]);

//漫画板块
let popular = document.getElementById("popular");
let todayChange = document.getElementById("today-change");
let recommend = document.getElementsByClassName("recommend");
let updata = document.getElementsByClassName("updata");
let fashion = document.getElementById("fashion");
let help = document.getElementById("help");
let free = document.getElementById("free");
let fashionContent = document.getElementsByClassName("fashion-content");
let helpContent = document.getElementsByClassName("help-content");
let freeContent = document.getElementsByClassName("free-content");
let fashionRightSps = document.getElementsByClassName("fashion-right-sp");
let helpRightSps = document.getElementsByClassName("help-right-sp");
let freeRightSps = document.getElementsByClassName("free-right-sp");
//实现漫画板块点击切换效果
popular.addEventListener("click",function () {
    popular.style.color = "#00a1d6";
    popular.style.borderBottomColor = "#00a1d6";
    recommend[0].style.display = "block";
    updata[0].style.display = "none";
    todayChange.style.color = "#212121";
    todayChange.style.borderBottom = "transparent";
})
todayChange.addEventListener("click",function () {
    todayChange.style.color = "#00a1d6";
    todayChange.style.borderBottomColor = "#00a1d6";
    updata[0].style.display = "block";
    recommend[0].style.display = "none";
    popular.style.color = "#212121";
    popular.style.borderBottom = "transparent";
})
fashion.addEventListener("click",function () {
    fashion.style.color = "#00a1d6";
    fashion.style.borderBottomColor = "#00a1d6";
    fashionContent[0].style.display = "block";
    help.style.color = "#212121";
    help.style.borderBottomColor = "transparent";
    helpContent[0].style.display = "none";
    free.style.color = "#212121";
    free.style.borderBottomColor = "transparent";
   freeContent[0].style.display = "none";
})
help.addEventListener("click",function () {
    fashion.style.color = "#212121";
    fashion.style.borderBottomColor = "transparent";
    fashionContent[0].style.display = "none";
    help.style.color = "#00a1d6";
    help.style.borderBottomColor = "#00a1d6";
    helpContent[0].style.display = "block";
    free.style.color = "#212121";
    free.style.borderBottomColor = "transparent";
    freeContent[0].style.display = "none";
})
free.addEventListener("click",function () {
    fashion.style.color = "#212121";
    fashion.style.borderBottomColor = "transparent";
    fashionContent[0].style.display = "none";
    help.style.color = "#212121";
    help.style.borderBottomColor = "transparent";
    helpContent[0].style.display = "none";
    free.style.color = "#00a1d6";
    free.style.borderBottomColor = "#0a1d6";
    freeContent[0].style.display = "block";
})
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/first",fashionRightSps);
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/second",helpRightSps);
getData("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/third",freeRightSps);
let fashionSpecialSp =document.getElementsByClassName("fashion-special-sp");
let freeSpecialSp = document.getElementsByClassName("free-special-sp");
let helpSpecialSp = document.getElementsByClassName("help-special-sp");
ajax("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/one",fashionSpecialSp[0]);
ajax("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/two",freeSpecialSp[0]);
ajax("https://www.fastmock.site/mock/0e6848507c798e47b681311ea27ebc47/bilibili/three",helpSpecialSp[0]);



//侧边栏
window.onscroll = function () {
    let bodyScroll = document.documentElement.scrollTop;
    let option = document.getElementsByClassName("option");
    for(let i = 0; i < option.length; i++){
        option[i].className = "option"
    }
    if(bodyScroll > 1200 && bodyScroll < 1850){
        option[0].className = 'option fix'
    }else if(bodyScroll > 1850 && bodyScroll < 2390){
        option[1].className = "option fix"
     }else if(bodyScroll > 2390 && bodyScroll < 3370){
         option[2].className = "option fix"
    }else if(bodyScroll > 3370 && bodyScroll < 3850){
        option[3].className = "option fix"
    }else if(bodyScroll > 3850){
        option[4].className = "option fix"
    }
}