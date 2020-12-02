
$(document).ready(function () {

    function ChangeActive() {
        let AllHeading = Array.from($(".slide-intro h1"));
        AllHeading.forEach(element => {
            element.classList.remove("active");
        });
        AllHeading[Math.floor(Math.random() * AllHeading.length)].classList.add("active");
        $(".slide-intro h1").hide();
        $(".slide-intro .active").fadeIn(2000);
        $(".slide-intro .active").css('display', 'block');

    } 
    let ChangeHeading = setInterval(ChangeActive,3000);
});
function animateSkills () {
        //Select Skills
        let ourSkills = document.querySelector(".skills");
        // skills offset Top
        let offsetTop = ourSkills.offsetTop;

        // Skills Outer Height
        let offsetHeight = ourSkills.offsetHeight;
    
        // Window Height
        let windowHeight = window.innerHeight;
    
        // Window Scroll Top
        let windowScrollTop = window.pageYOffset;
    
        if (windowScrollTop >= (offsetTop + offsetHeight - windowHeight)) {
    
            let allSkills = document.querySelectorAll(".skills-box .skill-progress span");
            allSkills.forEach(element => {
    
                element.style.width = element.dataset.progress;
    
            });
    
        }
}


window.onscroll = function()  {

    animateSkills();
};

// create Popup With The Image
let ourGallery = document.querySelectorAll("img");

ourGallery.forEach(img => {
    if(img.classList.contains('no-pop') == 0){
        img.style.cursor = 'pointer';
        img.addEventListener('click', (e) => {
            
            // create overlay element
            let overlay = document.createElement('div');
    
            // Add Class To Overlay
            overlay.className = 'popup-overlay';
    
            // Append Overlay To Body
            document.body.appendChild(overlay);
    
            // Create Popup Box
            let popupBox = document.createElement('div');
    
            // Add Class To Popup Box
            popupBox.className = 'popup-box';
    
            // Checkm If Isset Alt
    
            if (img.alt !== null) {
    
                // create Heading
                let popupHeading = document.createElement('h2');
    
                // Create Text For Heading
                let textHeading = document.createTextNode(img.alt);
    
                // Append text In Heading
                popupHeading.appendChild(textHeading);
    
                // Add Class For Heading
                popupHeading.className = 'img-heading';
    
                // Append The Heading To Popup Box
                popupBox.appendChild(popupHeading);
    
            }
    
            // Create The Image
            let popupImage = document.createElement('img');
    
            // Set Src For Image
            popupImage.src = img.src;
    
            //Add image In Popup Box
            popupBox.appendChild(popupImage);
    
            // Append The Popup Box In The Body
            document.body.appendChild(popupBox);
    
            // Create The Close Span
            let closeSpan = document.createElement('span');
    
            // Add Class For Span
            closeSpan.classList.add('fa', 'fa-close','close');
    
            // Append In The Body
            document.body.appendChild(closeSpan);
    
            // Add Close Button To Popup Box
            popupBox.appendChild(closeSpan);
    
    
        });
    }

});

//close popup box
document.addEventListener('click', function (e)  {
    
    if (e.target.classList.contains('close')) {

        // Remove The Current Popup
        e.target.parentNode.remove();

        // Remove Overlay
        document.querySelector(".popup-overlay").remove();

    }

});

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullets");
const allLinks = document.querySelectorAll(".menu li a");
function scrollToElement(elements) {
    elements.forEach(ele => {

        ele.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.getAttribute("data-section")).scrollIntoView({
                behavior: "smooth"
            });
    
        });
    
    });
}
scrollToElement(allBullets);
scrollToElement(allLinks);
// Toggle Menu
let toggleMenu = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".menu");
toggleMenu.onclick = () => {
    toggleMenu.classList.toggle('menu-active');
    tlinks.classList.toggle("open");
};
