var _a, _b, _c;
// Function to add new education input fields
function addEducation() {
    var educationSection = document.getElementById("education-section");
    var newEducationField = document.createElement("div");
    newEducationField.innerHTML = "\n      <input type=\"text\" placeholder=\"Degree\" required>\n      <input type=\"text\" placeholder=\"Institution\" required>\n      <input type=\"text\" placeholder=\"Graduation Year\" required>\n  ";
    educationSection.appendChild(newEducationField);
}
// Function to add new work experience input fields
function addExperience() {
    var experienceSection = document.getElementById("experience-section");
    var newExperienceField = document.createElement("div");
    newExperienceField.innerHTML = "\n      <input type=\"text\" placeholder=\"Job Title\" required>\n      <input type=\"text\" placeholder=\"Company\" required>\n      <input type=\"text\" placeholder=\"Duration\" required>\n  ";
    experienceSection.appendChild(newExperienceField);
}
// Function to generate the resume
function generateResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var skills = document.getElementById("skills").value.split(",").map(function (skill) { return skill.trim(); }).join(", ");
    var educationHTML = "<h3>Education</h3><ul>";
    var educationInputs = document.querySelectorAll("#education-section input");
    for (var i = 0; i < educationInputs.length; i += 3) {
        educationHTML += "\n          <li><strong>Degree:</strong> ".concat(educationInputs[i].value, "</li>\n          <li><strong>Institution:</strong> ").concat(educationInputs[i + 1].value, "</li>\n          <li><strong>Graduation Year:</strong> ").concat(educationInputs[i + 2].value, "</li>\n      ");
    }
    educationHTML += "</ul>";
    var experienceHTML = "<h3>Work Experience</h3><ul>";
    var experienceInputs = document.querySelectorAll("#experience-section input");
    for (var i = 0; i < experienceInputs.length; i += 3) {
        experienceHTML += "\n          <li><strong>Job Title:</strong> ".concat(experienceInputs[i].value, "</li>\n          <li><strong>Company:</strong> ").concat(experienceInputs[i + 1].value, "</li>\n          <li><strong>Duration:</strong> ").concat(experienceInputs[i + 2].value, "</li>\n      ");
    }
    experienceHTML += "</ul>";
    var resumeDisplay = document.getElementById("resume-content");
    resumeDisplay.innerHTML = "\n      <h2>".concat(name || "Your Name", "</h2>\n      <p><strong>Email:</strong> ").concat(email || "your.email@example.com", "</p>\n      <h3>Skills</h3>\n      <p>").concat(skills || "Your skills here", "</p>\n      ").concat(educationHTML, "\n      ").concat(experienceHTML, "\n  ");
    // Show the resume display
    var resumeSection = document.getElementById("resume-display");
    resumeSection.style.display = "block";
}
// Event listeners for adding new sections
(_a = document.getElementById("add-education")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", addEducation);
(_b = document.getElementById("add-experience")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", addExperience);
// Event listener for generating the resume
(_c = document.getElementById("generate-resume")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", generateResume);
