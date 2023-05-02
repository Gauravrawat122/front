const summarySection = document.getElementById("summary-section");
const dashboardSection = document.getElementById("dashboard-section");
const viewAnnouncementSection= document.getElementById("view-announcement-section");
const driveRegistrationSection = document.getElementById("drive-registration-section");
const profileViewSection = document.getElementById("profile-view-section");
const overLay = document.getElementById("overlay");

const summarybtn = document.getElementById("summary");
const viewAnnouncementBtn = document.getElementById("view-announcements");
const profileViewbtn = document.getElementById("profile-view");
const dashboardbtn = document.getElementById("dashboard");
const driveRegistrationbtn = document.getElementById("drive-registration");
const logoutBtn = document.getElementById("logout");

summarybtn.addEventListener("click", function () {
    summarySection.style.display="block";
    dashboardSection.style.display="none";
    viewAnnouncementSection.style.display="none";
    driveRegistrationSection.style.display="none";  
    profileViewSection.style.display="none";

    }
)

viewAnnouncementBtn.addEventListener("click", function () {
    summarySection.style.display="none";
    dashboardSection.style.display="none";
    viewAnnouncementSection.style.display="block";
    driveRegistrationSection.style.display="none";
    profileViewSection.style.display="none";
    }
)

profileViewbtn.addEventListener("click", function () {
    summarySection.style.display="none";
    dashboardSection.style.display="none";
    viewAnnouncementSection.style.display="none";
    driveRegistrationSection.style.display="none";
    profileViewSection.style.display="block";
    }
)

dashboardbtn.addEventListener("click", function () {
    summarySection.style.display="none";
    dashboardSection.style.display="block";
    viewAnnouncementSection.style.display="none";
    driveRegistrationSection.style.display="none";
    profileViewSection.style.display="none";
    }
)

driveRegistrationbtn.addEventListener("click", function () {
    summarySection.style.display="none";
    dashboardSection.style.display="none";
    viewAnnouncementSection.style.display="none";
    driveRegistrationSection.style.display="block";
    profileViewSection.style.display="none";
    }
)

     
logoutBtn.addEventListener("click", function () {
    overLay.style.display="block";
}
)


overLay.addEventListener("click", function () {
    overLay.style.display="none";
}   
)