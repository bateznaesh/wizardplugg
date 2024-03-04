/*document.addEventListener("DOMContentLoaded", function () {
    const homeTab = document.getElementById("home-tab");
    const recipesTab = document.getElementById("recipes-tab");
    const aboutTab = document.getElementById("about-tab");
    const contactTab = document.getElementById("contact-tab");

    const homeContent = document.getElementById("home-content");
    const recipesContent = document.getElementById("recipes-content");
    const aboutContent = document.getElementById("about-content");
    const contactContent = document.getElementById("contact-content");

    // Display the Home content initially
    homeContent.style.display = "block";
    recipesContent.style.display = "none";
    aboutContent.style.display = "none";
    contactContent.style.display = "none";

    // Event listener for Home tab
    homeTab.addEventListener("click", function (event) {
        event.preventDefault();
        homeContent.style.display = "block";
        recipesContent.style.display = "none";
        aboutContent.style.display = "none";
        contactContent.style.display = "none";
    });

    // Event listener for Recipes tab
    recipesTab.addEventListener("click", function (event) {
        event.preventDefault();
        homeContent.style.display = "none";
        recipesContent.style.display = "block";
        aboutContent.style.display = "none";
        contactContent.style.display = "none";
    });

    // Event listener for About Us tab
    aboutTab.addEventListener("click", function (event) {
        event.preventDefault();
        homeContent.style.display = "none";
        recipesContent.style.display = "none";
        aboutContent.style.display = "block";
        contactContent.style.display = "none";
    });

    // Event listener for Contact Us tab
    contactTab.addEventListener("click", function (event) {
        event.preventDefault();
        homeContent.style.display = "none";
        recipesContent.style.display = "none";
        aboutContent.style.display = "none";
        contactContent.style.display = "block";
    });
});*/

var ran2 = false;

function delay2(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}


async function typeWriter2(speed, showLine) {
    var slowlyText = [];
    console.log('start');
    if (ran2) return;
    ran2 = true;

    var parSlowly = document.getElementsByClassName("slowTyping2");
    var slowly = [];


    
    var blinker = '<span class="blink_me">_</span>';

    blinker = document.createElement('span');
    blinker.className = 'blink_me';
    blinker.innerHTML = '_';

    for (let i = 0; i < parSlowly.length; i++) {
        slowly.push(parSlowly[i].lastElementChild);
    }

    for (let i = 0; i < slowly.length; i++) {
        slowlyText.push(slowly[i].innerHTML);
        slowly[i].innerHTML = '';
        console.log(slowlyText[i]);
    }

    for (let i = 0; i < slowly.length; i++) {
        if(showLine)
        parSlowly[i].appendChild(blinker);
        let currentStr = '';
        for (let j = 0; j < slowlyText[i].length; j++) {
            currentStr += slowlyText[i].charAt(j);
            slowly[i].innerHTML = currentStr;
            await delay2(speed);
        }
        if(showLine)
        parSlowly[i].removeChild(blinker);

        await delay2(speed);

    }
}