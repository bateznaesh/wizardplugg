function ClickedItem(caller)
{
    let blurElement = document.getElementById('blur');

    console.log(caller.text);

    let title = caller.text;
    let callerParent = caller.parentElement.parentElement;
    let callerGrandparent = callerParent.parentElement;

    let cakeImage = callerGrandparent.getElementsByTagName('img')[0];
    let description = callerParent.getElementsByTagName('p')[0];
    let cakeType = callerParent.getElementsByTagName('span')[0];
    let category = callerParent.getElementsByTagName('div')[0].getElementsByTagName('div')[0];
    console.log(cakeImage);
    console.log(description.innerHTML);
    console.log(cakeType);

    let newTitle = document.getElementById('blurtitle');

    let newImage = document.getElementById('blurimg');

    let newDescription = document.getElementById('blurdescription');

    let newType = document.getElementById('blurtype');
    let newCategory = document.getElementById('blurcategory');

    newTitle.innerHTML = title;
    newImage.src = cakeImage.src;
    newDescription.innerHTML = description.innerHTML;
    newType.innerHTML = category.innerHTML;
    newCategory.innerHTML = cakeType.innerHTML;
    newType.classList = category.classList;

    blurElement.style.display = 'block';
}

function CloseBlur(clickedElement) {

     let blurElement = document.getElementById('blur');

    // Check if the adContainer exists
    if (blurElement) {
      // Remove the ad container
      blurElement.style.display = "none";
    }
}