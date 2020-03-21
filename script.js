const goProjects = () => {
    document.getElementById("leftSideBar").style.background = "aqua";
};

const goPow = () => {
    document.getElementById("contentContainer").style.backgroundColor = "aqua";
};

var blurMessage = [
    "Come Back!!!",
    "WHY HAVE YOU FORSAKEN ME",
    "Fine I didnt need you anyways",
    "PLEASE PLEASE PLEASE",
    "Fine"
];

window.addEventListener("blur", () => {
    var rand = Math.floor((Math.random() * 5));
    document.title = blurMessage[rand];
})

window.addEventListener("focus", () => {
    document.title = "Will Thomas";
})