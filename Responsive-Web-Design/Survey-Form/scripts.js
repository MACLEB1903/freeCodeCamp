var currentTab = 1;
showTab(currentTab);

function showTab(tabIndex) {
  var tabs = document.getElementsByClassName("page");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = i + 1 === tabIndex ? "block" : "none";
  }
  var prevButton = document.getElementById("prevBtn");
  var nextButton = document.getElementById("nextBtn");
  prevButton.style.display = tabIndex === 1 ? "none" : "block";
  nextButton.style.display = tabIndex >= tabs.length ? "none" : "block";
  updateProgressBar(tabIndex);

  var prevNextButtonDiv = document.getElementById("prevNextButton-div");
  prevNextButtonDiv.style.margin =
    tabIndex === 2 ? "1.5rem auto 0 auto" : "3rem auto";
}

function updateProgressBar(tabIndex) {
  var progressBar = document.getElementById("progress-bar");
  var containerBar = document.getElementById("container-bar");
  var content = tabIndex + "/3";
  var width = (tabIndex / 3) * 100 + "%";
  containerBar.style.setProperty("--progress-text", '"' + content + '"');
  progressBar.style.width = width;
}

function prevTab() {
  if (currentTab > 1) {
    currentTab--;
    showTab(currentTab);
  }
  return false;
}

function nextTab() {
  var totalTabs = document.getElementsByClassName("page").length;
  if (validateCurrentTab(currentTab)) {
    if (currentTab < totalTabs) {
      currentTab++;
      showTab(currentTab);
    }
  } else {
    alert("Please fill out all required fields before proceeding.");
  }
  return false;
}

function validateCurrentTab(tabIndex) {
  var isValid = true;
  var currentTabPage = document.querySelector(".page-" + tabIndex);
  var requiredInputs = currentTabPage.querySelectorAll(
    "input[required], select[required]"
  );

  requiredInputs.forEach(function (input) {
    if (input.type === "radio") {
      var name = input.name;
      var radioGroup = document.getElementsByName(name);
      var isOneChecked = false;
      for (var i = 0; i < radioGroup.length; i++) {
        if (radioGroup[i].checked) {
          isOneChecked = true;
          break;
        }
      }
      if (!isOneChecked) {
        isValid = false;
        input.closest(".radio-set").classList.add("error");
      } else {
        input.closest(".radio-set").classList.remove("error");
      }
    } else {
      if (!input.value) {
        isValid = false;
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    }
  });

  return isValid;
}
