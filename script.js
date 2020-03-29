const displayHome = () => {
    document.getElementById("contentContainer").innerHTML = `
    <h1>Howdy</h1>
    <h2>Me</h2>
    `;
};

const displayProjects = () => {
    document.getElementById("contentContainer").innerHTML = `
    <h1>My Favorite Projects</h1>
    `;
};

const displaySkills = () => {
    document.getElementById("contentContainer").innerHTML = `
    <h1>Skills</h1>
    <table style='width: 100%'>
        <tr>
            <th>Language</th>
            <th>Expertise</th>
        </tr>
        <tr>
            <td>C#</td>
            <td>45%</td>
        </tr>
    </table>
    `;
};

const displayContact = () => {
    document.getElementById("contentContainer").innerHTML = `
    <h1 style="text-decoration: underline; color: red;">RED ALERT</h1>
    <p style="margin-top: .5em">This section is still <b>in-progress</b>, 
    please contact me directly through my email or by my LinkedIn
    </p>
    `;
}

setInterval(() => {
    let likeArray = [
        "CODE",
        "ANALYZE",
        "PROGRAM",
        "LEARN",
        "ADAPT"
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