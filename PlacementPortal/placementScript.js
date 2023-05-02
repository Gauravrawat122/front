const summarySection = document.getElementById("summary-section");
const recentlySection= document.getElementById("recently-placed-section");
const createDriveSection = document.getElementById("create-drive-section");
const dashboardSection = document.getElementById("dashboard-section");
const registerStudentsSection = document.getElementById("register-students-section");
const fliterIcon = document.querySelector(".filter-icon");
const overLay = document.getElementById("overlay-logout");


const summarybtn = document.getElementById("summary");
const recentlyAddedbtn = document.getElementById("recently-placed");
const createDrivebtn = document.getElementById("create-drive");
const dashboardbtn = document.getElementById("dashboard");
const registerStudentsbtn = document.getElementById("register-students");
const logoutBtn = document.getElementById("logout");

summarybtn.addEventListener("click", function () {
    summarySection.style.display = "block";
    recentlySection.style.display = "none";
    createDriveSection.style.display = "none";
    dashboardSection.style.display = "none";
    registerStudentsSection.style.display = "none";
    }
)

recentlyAddedbtn.addEventListener("click", function () {    
    summarySection.style.display = "none";
    recentlySection.style.display = "block";
    createDriveSection.style.display = "none";
    dashboardSection.style.display = "none";
    registerStudentsSection.style.display = "none";
    }   
)

createDrivebtn.addEventListener("click", function () {
    summarySection.style.display = "none";
    recentlySection.style.display = "none";
    createDriveSection.style.display = "block";
    dashboardSection.style.display = "none";
    registerStudentsSection.style.display = "none";
    }
)

dashboardbtn.addEventListener("click", function () {
    summarySection.style.display = "none";
    recentlySection.style.display = "none";
    createDriveSection.style.display = "none";
    dashboardSection.style.display = "block";
    registerStudentsSection.style.display = "none";
    }
)

registerStudentsbtn.addEventListener("click", function () {
    summarySection.style.display = "none";
    recentlySection.style.display = "none";
    createDriveSection.style.display = "none";
    dashboardSection.style.display = "none";
    registerStudentsSection.style.display = "block";
    }
)

// fliterIcon.addEventListener("click", function () {
//     overLay.style.display="block";
// }
// )   
// window.onclick = function(event) {  
//     if (!event.target.matches('.filter-icon')) {
//         var dropdowns = document.getElementsByClassName("filter-dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }      


logoutBtn.addEventListener("click", function () {
    // alert("You have been logged out");
    overLay.style.display="block";
}
)

overLay.addEventListener("click", function () {
    overLay.style.display="none";
}   
)