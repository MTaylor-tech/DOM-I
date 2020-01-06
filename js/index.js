const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// Tasks 1 & 2
// Update the Nav
for (let i=1; i<=6; i++) {
    document.querySelector(`header > nav > a:nth-child(${i})`).textContent = siteContent["nav"][`nav-item-${i}`];
}

// Update CTA section
const h1 = document.getElementsByTagName('h1')[0]
h1.textContent = siteContent["cta"]["h1"];
const button = document.querySelector('.cta-text button');
button.textContent = siteContent["cta"]["button"];
document.getElementById("cta-img").setAttribute('src', siteContent["cta"]["img-src"]);

// Update Main Content section
const main_content_h4 = document.querySelectorAll('.main-content .text-content h4');
const main_content_p = document.querySelectorAll('.main-content .text-content p');
main_content_h4[0].textContent = siteContent["main-content"]["features-h4"];
main_content_p[0].textContent = siteContent["main-content"]["features-content"];
main_content_h4[1].textContent = siteContent["main-content"]["about-h4"];
main_content_p[1].textContent = siteContent["main-content"]["about-content"];
main_content_h4[2].textContent = siteContent["main-content"]["services-h4"];
main_content_p[2].textContent = siteContent["main-content"]["services-content"];
main_content_h4[3].textContent = siteContent["main-content"]["product-h4"];
main_content_p[3].textContent = siteContent["main-content"]["product-content"];
main_content_h4[4].textContent = siteContent["main-content"]["vision-h4"];
main_content_p[4].textContent = siteContent["main-content"]["vision-content"];
document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Update Contact section
document.querySelector('section.contact').style.width = '20%';
document.querySelector('.contact h4').textContent = siteContent["contact"]["contact-h4"];
const contact_p = document.querySelectorAll('.contact p');
contact_p[0].textContent = siteContent["contact"]["address"];
contact_p[1].textContent = siteContent["contact"]["phone"];
contact_p[2].textContent = siteContent["contact"]["email"];

// Update Footer
document.querySelector('footer p').textContent = siteContent["footer"]["copyright"];


// Task 3
// Navigation add items, text green
const nav = document.querySelector('header nav');
const newNavItem1 = document.createElement('a');
newNavItem1.setAttribute('href','#');
newNavItem1.textContent = "Support";
nav.appendChild(newNavItem1);
const newNavItem2 = document.createElement('a');
newNavItem2.setAttribute('href','#');
newNavItem2.textContent = "Home";
nav.prepend(newNavItem2);
const nav_items = document.querySelectorAll('header nav a');
nav_items.forEach(function (item) { item.style.color = 'green'; });

// Stretch
let buttonOn = false;
function switchButton () {
    if (buttonOn) {
        h1.textContent = siteContent["cta"]["h1"];
        h1.style.color = "black";
        buttonOn = false;
    } else {
        h1.textContent = "Now You\'re Cookin\'";
        h1.style.color = "red";
        buttonOn = true;
    }
}
button.addEventListener('click', switchButton);
