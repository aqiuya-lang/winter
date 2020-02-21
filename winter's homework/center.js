let issue = document.getElementById("issue");
let broadcast = document.getElementById("broadcast");
let collect = document.getElementById("collect");
let issueContent = document.getElementsByClassName("issue-content");
let broadcastContent =document.getElementsByClassName("broadcast-content");
let collectContent = document.getElementsByClassName("collect-content");
issue.addEventListener("click",function () {
    issue.style.color = "#00a1d6";
    issue.style.borderBottomColor = "#00a1d6";
    broadcast.style.color = "#222222";
    broadcast.style.borderBottomColor = "transparent";
    collect.style.color = "#222222";
    collect.style.borderBottomColor = "transparent";
    issueContent[0].style.display = "block";
    broadcastContent[0].style.display = "none";
    collectContent[0].style.display = "none";

})
broadcast.addEventListener("click",function () {
    broadcast.style.color = "#00a1d6";
    broadcast.style.borderBottomColor = "#00a1d6";
    issue.style.color = "#222222";
    issue.style.borderBottomColor = "transparent";
    collect.style.color = "#222222";
    collect.style.borderBottomColor = "transparent";
    issueContent[0].style.display = "none";
    broadcastContent[0].style.display = "block";
    collectContent[0].style.display = "none";
})
collect.addEventListener("click",function () {
    collect.style.color = "#00a1d6";
    collect.style.borderBottomColor = "#00a1d6";
    issue.style.color = "#222222";
    issue.style.borderBottomColor = "transparent";
    broadcast.style.color = "#222222";
    broadcast.style.borderBottomColor = "transparent";
    issueContent[0].style.display = "none";
    broadcastContent[0].style.display = "none";
    collectContent[0].style.display = "block";
})
let title = document.getElementsByClassName("title");

window.onscroll = function () {
    let bodyScroll = document.documentElement.scrollTop;
    if( bodyScroll > 290){
        title[0].style.display = "block";
    }
    if( bodyScroll < 290){
        title[0].style.display = "none";
    }
}
