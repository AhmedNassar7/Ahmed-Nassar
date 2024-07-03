// Form submission handling (basic example)
document.querySelector('.contact form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent! Thank you for contacting me.');
    this.reset();
});

function refreshPage() {
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: [
            "Junior Computer Science Student",
            "Software Engineer",
            "Web Developer",
        ],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        smartBackspace: true, // Enable smart backspace to delete only the characters added by typing
        showCursor: false, // Hide the cursor
        onComplete: function () { // Add a callback function to handle completion of typing
            setTimeout(function () {
                typedInstance.reset(); // Reset Typed.js to start typing again without line break
            }, 1000); // Adjust the delay as needed
        },
        preStringTyped: function () {
            // Get the width of the typed string and adjust the line width accordingly
            var typedTextWidth = document.getElementById('typing').offsetWidth;
            document.querySelector('.typing-line').style.width = typedTextWidth + 'px';
        }
    };

    var typed = new Typed("#typing", options);
});

// Function to update the profile views count
function updateProfileViews() {
    const profileViewsCountElement = document.getElementById('viewers-count');
    let views = localStorage.getItem('viewersCount') || 0;
    views = parseInt(views, 10) + 1;
    localStorage.setItem('viewersCount', views);
    profileViewsCountElement.textContent = views.toLocaleString();
}

// Call the function to update the profile views on page load
document.addEventListener('DOMContentLoaded', updateProfileViews);

/*function toggleAuth() {
    var signInButton = document.getElementById("sign-in-btn");
    if (signInButton.innerHTML === "Sign in") {
        signInButton.innerHTML = "Sign out";
    } else {
        signInButton.innerHTML = "Sign in";
    }
}*/

let currentQuote = 0;
const quotes = document.querySelectorAll('.quote');
const indicators = document.querySelectorAll('.indicator');

function showQuote(index) {
    quotes.forEach((quote, i) => {
        if (i === index) {
            quote.classList.add('active');
        } else {
            quote.classList.remove('active');
        }
    });
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

function nextQuote() {
    currentQuote = (currentQuote + 1) % quotes.length;
    showQuote(currentQuote);
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentQuote = index;
        showQuote(currentQuote);
    });
});

setInterval(nextQuote, 5000); // Change quote every 5 seconds

// Initialize the first quote
showQuote(currentQuote);