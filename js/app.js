const { education } = window;

window.onload = () => {
    initFunc();
}

function initFunc () {
    // ABOUT ME
    var todayDate = document.querySelector("#today");
    todayDate.innerHTML = new Date().toLocaleDateString("en-CA");
    
    // EDUCATION
    var degreeContainer = document.querySelector("#container-degree");
    degreeContainer.appendChild(getDegreeElements());
    
    // CONTACT ME
    var contactForm = document.querySelector("#form-contact-me");
    contactForm.addEventListener("submit", e => {
        e.preventDefault();
    })
}

