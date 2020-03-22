const displayHome = () => {
    document.getElementById("contentContainer").innerHTML = `
    <h1>Howdy</h1>
    <h2>Me</h2>
    `;
};

setInterval(() => {
    let likeArray = [
        "CODE",
        "DANCE",
        "SING",
        "ANALYZE",
        "PROGRAM",
        "BAKE",
        "COOK"
    ]
    let rand = Math.floor(Math.random()*likeArray.length);
    document.getElementById("randomLike").innerHTML = `${likeArray[rand]}`;
}, 10000)

window.addEventListener("blur", () => {
    document.title = "Come Back Soon!!!";
})

window.addEventListener("focus", () => {
    document.title = "Will Thomas";
})