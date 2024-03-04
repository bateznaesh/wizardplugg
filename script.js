var ran = false;

function closeAd(clickedElement) {
    // Get the parent div of the clicked element (the ad container)
    var adContainer = clickedElement.parentElement;

    // Check if the adContainer exists
    if (adContainer) {
      // Remove the ad container
      adContainer.remove();
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}


async function typeWriter(speed, showLine) {
    var slowlyText = [];
    console.log('start');
    if (ran) return;
    ran = true;

    var parSlowly = document.getElementsByClassName("slowTyping");
    var slowly = [];


    
    var blinker = '<span class="blink_me">_</span>';

    blinker = document.createElement('span');
    blinker.className = 'blink_me';
    blinker.innerHTML = '▮';

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
            await delay(speed);
        }
        if(showLine)
        parSlowly[i].removeChild(blinker);

        await delay(speed);

    }
}