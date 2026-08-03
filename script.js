console.log("JS file connected");


window.onload = function () {

    const themeBtn = document.getElementById("theme-btn");

    console.log("Theme button =", themeBtn);


    if (themeBtn) {

        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            themeBtn.innerHTML = "☀️ Light Mode";
        }


        themeBtn.addEventListener("click", function () {

            console.log("Button clicked");

            document.body.classList.toggle("dark-mode");


            if (document.body.classList.contains("dark-mode")) {

                themeBtn.innerHTML = "☀️ Light Mode";
                localStorage.setItem("theme", "dark");

            } else {

                themeBtn.innerHTML = "🌙 Dark Mode";
                localStorage.setItem("theme", "light");

            }

        });

    }

};

function searchWebsite() {

    let search = document.getElementById("searchInput").value.toLowerCase();

    if (search == "notes") {

        window.location.href = "notes.html";

    }

    else if (search == "about") {

        window.location.href = "about.html";

    }

    else if (search == "question papers") {

        window.location.href = "question-papers.html";

    }

 else if (
    search == "semester 1" ||
    search == "first semester" ||
    search == "1st semester" ||
    search == "sem 1"
) {

    window.location.href = "semesters/semester1.html";

}

else if (
    search == "semester 2" ||
    search == "second semester" ||
    search == "2nd semester" ||
    search == "sem 2"
) {

    window.location.href = "semesters/semester2.html";

}

else if (
    search == "semester 3" ||
    search == "third semester" ||
    search == "3rd semester" ||
    search == "sem 3"
) {

    window.location.href = "semesters/semester3.html";

}

else if (
    search == "semester 4" ||
    search == "fourth semester" ||
    search == "4th semester" ||
    search == "sem 4"
) {

    window.location.href = "semesters/semester4.html";

}

else if (
    search == "semester 5" ||
    search == "fifth semester" ||
    search == "5th semester" ||
    search == "sem 5"
) {

    window.location.href = "semesters/semester5.html";

}

else if (
    search == "semester 6" ||
    search == "sixth semester" ||
    search == "6th semester" ||
    search == "sem 6"
) {

    window.location.href = "semesters/semester6.html";

}

else if (
    search == "semester 7" ||
    search == "seventh semester" ||
    search == "7th semester" ||
    search == "sem 7"
) {

    window.location.href = "semesters/semester7.html";

}

else if (
    search == "semester 8" ||
    search == "eighth semester" ||
    search == "8th semester" ||
    search == "sem 8"
) {

    window.location.href = "semesters/semester8.html";

  }
 
/* =========================
   Semester 1
========================= */
else if (
    search == "computer fundamental and office automation" ||
    search == "computer fundamentals" ||
    search == "office automation" ||
    search == "bcacs101" ||

    search == "english for computing and information technology" ||
    search == "english" ||
    search == "bcaen102" ||

    search == "mathematics i" ||
    search == "math i" ||
    search == "bcamt103" ||

    search == "programming techniques using c" ||
    search == "c programming" ||
    search == "programming in c" ||
    search == "bcacs104" ||

    search == "logic and computer design" ||
    search == "digital logic" ||
    search == "bcacs105"
) {
    window.location.href = "semesters/semester1.html";
}

/* =========================
   Semester 2
========================= */
else if (
    search == "the art of social engagement and technology" ||
    search == "social engagement" ||
    search == "bcaso111" ||

    search == "ui/ux using uml" ||
    search == "ui ux" ||
    search == "uml" ||
    search == "bcacs112" ||

    search == "mathematics ii" ||
    search == "math ii" ||
    search == "bcamt113" ||

    search == "oop in java" ||
    search == "oop" ||
    search == "java" ||
    search == "java programming" ||
    search == "bcacs114" ||

    search == "microprocessor and computer architecture" ||
    search == "microprocessor" ||
    search == "computer architecture" ||
    search == "bcacs115"
) {
    window.location.href = "semesters/semester2.html";
}

/* =========================
   Semester 3
========================= */
else if (
    search == "financial accounting" ||
    search == "accounting" ||
    search == "bcamg201" ||

    search == "data structures & algorithm" ||
    search == "data structures" ||
    search == "algorithm" ||
    search == "bcacs202" ||

    search == "operating system" ||
    search == "os" ||
    search == "bcacs203" ||

    search == "discrete structure" ||
    search == "bcacs204" ||

    search == "web technology i" ||
    search == "web technology 1" ||
    search == "bcacs205"
) {
    window.location.href = "semesters/semester3.html";
}

/* =========================
   Semester 4
========================= */
else if (
    search == "advance java programming" ||
    search == "advanced java" ||
    search == "bcacs211" ||

    search == "database management system" ||
    search == "dbms" ||
    search == "bcacs212" ||

    search == "numerical method" ||
    search == "bcacs213" ||

    search == "system analysis and design" ||
    search == "sad" ||
    search == "bcacs214" ||

    search == "web technology ii" ||
    search == "web technology 2" ||
    search == "bcacs215" ||

    search == "project i" ||
    search == "project 1" ||
    search == "bcapj216"
) {
    window.location.href = "semesters/semester4.html";
}

/* =========================
   Semester 5
========================= */
else if (
    search == "data communication and computer networking" ||
    search == "computer networking" ||
    search == "networking" ||
    search == "bcacs301" ||

    search == "probability and statistics" ||
    search == "statistics" ||
    search == "bcast302" ||

    search == "artificial intelligence" ||
    search == "ai" ||
    search == "bcacs303" ||

    search == "software engineering" ||
    search == "bcacs304" ||

    search == "programming in python" ||
    search == "python" ||
    search == "python programming" ||
    search == "bcacs305"
) {
    window.location.href = "semesters/semester5.html";
}

/* =========================
   Semester 6
========================= */
else if (
    search == "economics for computer application" ||
    search == "economics" ||
    search == "bcamg311" ||

    search == "cloud computing" ||
    search == "bcacs312" ||

    search == "linux" ||
    search == "bcacs313" ||

    search == "mobile application development" ||
    search == "mobile app development" ||
    search == "bcacs314" ||

    search == "computer graphics and multimedia" ||
    search == "graphics" ||
    search == "multimedia" ||
    search == "bcacs315" ||

    search == "project ii" ||
    search == "project 2" ||
    search == "bcapj316"
) {
    window.location.href = "semesters/semester6.html";
}

/* =========================
   Semester 7
========================= */
else if (
    search == "cyber security" || search == "bcacs401" ||
    search == "software project management" || search == "bcacs402" ||
    search == "practical writing and editing" || search == "writing and editing" || search == "bcanp403" ||
    search == "internship" || search == "internships" || search == "bcain405" ||

    search == "information audit" || search == "bcacs406" ||
    search == "enterprise resource planning" || search == "erp" || search == "bcamg407" ||
    search == "data analysis & visualization" || search == "data analysis and visualization" || search == "bcacs408" ||
    search == "geographical information system" || search == "gis" || search == "bcacs409" ||
    search == "data mining" || search == "bcacs4010" ||

    search == "mis and e-commerce" || search == "mis" || search == "e-commerce" || search == "bcacs4011" ||
    search == "machine learning" || search == "bcacs4012" ||
    search == "software testing and quality assurance" || search == "software testing" || search == "quality assurance" || search == "bcacs4013" ||
    search == "business intelligence" || search == "bcacs4014" ||
    search == "wireless networking" || search == "bcacs4015"
) {
    window.location.href = "semesters/semester7.html";
}

/* =========================
   Semester 8
========================= */
else if (
    search == "e-governance" || search == "egovernance" || search == "bcacs411" ||
    search == "project iii" || search == "project 3" || search == "bcapj412" ||

    search == "database administration" || search == "bcacs413" ||
    search == "network management and administration" || search == "bcacs414" ||
    search == "advanced database management system" || search == "advanced dbms" || search == "bcacs415" ||
    search == "distributed system" || search == "bcacs416" ||
    search == "net technology" || search == "bcacs417" ||

    search == "big data" || search == "bcacs418" ||
    search == "search engine optimization" || search == "seo" || search == "bcacs419" ||
    search == "digital marketing" || search == "bcamg419" ||
    search == "image processing" || search == "bcacs4110" ||
    search == "generative ai" || search == "gen ai" || search == "bcacs4111"
) {
    window.location.href = "semesters/semester8.html";
}

  // =====================================================
// Question Papers Search Function
// This function runs when the user clicks
// the Search button on question-papers.html
// =====================================================

function searchQuestionPapers() {

    let search = document.getElementById("paperSearch").value.toLowerCase().trim();

    // Semester 1
    if (
        search == "semester 1" ||
        search == "first semester" ||
        search == "1st semester" ||
        search == "sem 1"
    ) {
        window.location.href = "question-papers/semester1.html";
    }

    // Semester 2
    else if (
        search == "semester 2" ||
        search == "second semester" ||
        search == "2nd semester" ||
        search == "sem 2"
    ) {
        window.location.href = "question-papers/semester2.html";
    }

    // Semester 3
    else if (
        search == "semester 3" ||
        search == "third semester" ||
        search == "3rd semester" ||
        search == "sem 3"
    ) {
        window.location.href = "question-papers/semester3.html";
    }

    // Semester 4
    else if (
        search == "semester 4" ||
        search == "fourth semester" ||
        search == "4th semester" ||
        search == "sem 4"
    ) {
        window.location.href = "question-papers/semester4.html";
    }

    // Semester 5
    else if (
        search == "semester 5" ||
        search == "fifth semester" ||
        search == "5th semester" ||
        search == "sem 5"
    ) {
        window.location.href = "question-papers/semester5.html";
    }

    // Semester 6
    else if (
        search == "semester 6" ||
        search == "sixth semester" ||
        search == "6th semester" ||
        search == "sem 6"
    ) {
        window.location.href = "question-papers/semester6.html";
    }

    // Semester 7
    else if (
        search == "semester 7" ||
        search == "seventh semester" ||
        search == "7th semester" ||
        search == "sem 7"
    ) {
        window.location.href = "question-papers/semester7.html";
    }

    // Semester 8
    else if (
        search == "semester 8" ||
        search == "eighth semester" ||
        search == "8th semester" ||
        search == "sem 8"
    ) {
        window.location.href = "question-papers/semester8.html";
    }

    else {
        alert("Question paper not found!");
    }

}

// Dark Mode

// =========================
// Dark Mode with Save
// =========================

console.log(document.readyState);
console.log(document.body.innerHTML);
const themeBtn = document.getElementById("theme-btn");
console.log(themeBtn);

console.log("Theme button:", themeBtn);

if (themeBtn) {

    // Restore saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.innerHTML = "☀️ Light Mode";
    }

    themeBtn.addEventListener("click", function () {

        console.log("Button clicked");

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeBtn.innerHTML = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");

        } else {

            themeBtn.innerHTML = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");

        }

    });

}

// ===============================
// Search Suggestions
// ===============================

const subjects = [
    "Notes",
    "About",
    "Question Papers",
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
    "Semester 7",
    "Semester 8",
    "Python",
    "DBMS",
    "Java",
    "Operating System",
    "Cyber Security",
    "Cloud Computing",
    "Artificial Intelligence",
    "Web Technology",
    "Machine Learning"
];

const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

if (searchInput && suggestions) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        suggestions.innerHTML = "";

        if (value === "") {
            suggestions.style.display = "none";
            return;
        }

        const filtered = subjects.filter(item =>
            item.toLowerCase().includes(value)
        );

        filtered.forEach(item => {

            const div = document.createElement("div");

            div.textContent = item;

            div.onclick = function () {

    searchInput.value = item;

    suggestions.style.display = "none";

    searchWebsite();

};

            suggestions.appendChild(div);

        });

        suggestions.style.display =
            filtered.length ? "block" : "none";

    });

}


// =========================
// Mobile Menu
// =========================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}
}


// Signup Form Validation

const signupForm = document.getElementById("signupForm");


if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();


        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;



        if (name == "" || email == "" || password == "" || confirmPassword == "") {

            alert("Please fill all fields");

        }


        else if (password !== confirmPassword) {

            alert("Password does not match");

        }


       else {

    let user = {
        name: name,
        email: email,
        password: password
    };


    localStorage.setItem("user", JSON.stringify(user));


    alert("Account created successfully 🎉");


    signupForm.reset();

}

    });

}

// Login Form Validation

const loginForm = document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();


        let email = document.getElementById("loginEmail").value;

        let password = document.getElementById("loginPassword").value;



        if (email == "" || password == "") {

            alert("Please enter email and password");

        }


       else {

    let savedUser = JSON.parse(localStorage.getItem("user"));


    if (savedUser) {


        if (email == savedUser.email && password == savedUser.password) {

            alert("Login successful 🎉");

window.location.href = "profile.html";

        }

        else {

            alert("Invalid email or password ❌");

        }


    }

    else {

        alert("No account found. Please signup first.");

    }

}
    });

}

// Profile Page

let userData = JSON.parse(localStorage.getItem("user"));


const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");


if (userName && userEmail && userData) {

    userName.innerHTML = "Welcome, " + userData.name + " 👋";

    userEmail.innerHTML = "Email: " + userData.email;

}


// Logout Function

function logout() {

    localStorage.removeItem("user");

    alert("Logged out successfully 👋");

    window.location.href = "login.html";

}