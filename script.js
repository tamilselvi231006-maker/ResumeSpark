function generateResume() {

    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let objective = document.getElementById("objective").value;
    let education = document.getElementById("education").value;
    let college = document.getElementById("college").value;
    let university = document.getElementById("university").value;
    let year = document.getElementById("year").value;
    let cgpa = document.getElementById("cgpa").value;
    let skills = document.getElementById("skills").value;
    let projects = document.getElementById("projects").value;
    let certifications = document.getElementById("certifications").value;
    let languages = document.getElementById("languages").value;

    document.getElementById("resumeOutput").innerHTML = `
        <div style="border:2px solid #333; padding:20px; margin-top:30px; background:#fff;">
            <h1>${fullName}</h1>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Address:</b> ${address}</p>

            <h3>Career Objective</h3>
            <p>${objective}</p>

            <h3>Education</h3>
            <p>${education}</p>
            <p>${college}</p>
            <p>${university}</p>
            <p>${year}</p>
            <p>${cgpa}</p>

            <h3>Skills</h3>
            <p>${skills}</p>

            <h3>Projects</h3>
            <p>${projects}</p>

            <h3>Certifications</h3>
            <p>${certifications}</p>

            <h3>Languages</h3>
            <p>${languages}</p>

            <button onclick="window.print()" class="primary-btn">
                Download PDF
            </button>
        </div>
    `;
}
