const shareBtn = document.getElementById("share-btn");
const shareSection = document.getElementById("share");
const userPic = document.getElementById("user-pic");
const user = document.getElementById("user");
const shareContainer = document.getElementById("share-container");
const userWrapper = document.getElementById("user-wrapper");

shareBtn.addEventListener("click", function () {
  console.log("button ");
  if (window.innerWidth < 950) {
    if (shareSection.style.display === "none") {
      shareSection.style.display = "flex";
      userPic.style.display = "none";
      user.style.display = "none";
      shareContainer.style.backgroundColor = " hsl(217, 19%, 35%)";
      shareContainer.style.width = "100%";
    } else {
      shareSection.style.display = "none";
      userPic.style.display = "";
      user.style.display = "";
      shareContainer.style.backgroundColor = "";
      shareContainer.style.width = "";
      shareBtn.style.margin = "";
    }
  } else {
    if (shareSection.style.display === "none") {
      shareSection.style.display = "flex";
      shareSection.style.flexDirection = "row";
      shareSection.style.marginBottom = "2rem";
      shareContainer.style.display = "flex";
      shareContainer.style.flexDirection = "column";
      shareContainer.style.position = "absolute";
      shareContainer.style.right = "10%";
      shareContainer.style.top = "-150%";
      shareContainer.style.height = "6rem";
      shareContainer.style.width = "20rem";
      shareSection.style.backgroundColor = " hsl(217, 19%, 35%)";
      shareSection.style.width = "100%";
      userWrapper.style.marginRight = "15rem";
      shareBtn.style.alignItems = "center";
    } else {
      shareSection.style.display = "none";
      shareSection.style.flexDirection = "";
      shareSection.style.marginBottom = "";
      shareContainer.style.display = "";
      shareContainer.style.flexDirection = "";
      shareContainer.style.position = "";
      shareContainer.style.right = "";
      shareContainer.style.top = "";
      shareContainer.style.height = "";
      shareContainer.style.width = "";
      shareSection.style.backgroundColor = " ";
      shareSection.style.width = "";
      userWrapper.style.marginRight = "";
    }
  }
});
