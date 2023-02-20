// Get the dropdown button
var dropdownBtn = document.getElementsByClassName("dropbtn")[0];

// Add a click event listener to the button
dropdownBtn.addEventListener("click", function() {
  // Toggle the display of the dropdown content
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

// Get the "Add New Task" link
var addTaskLink = document.querySelector(".dropdown-content a:last-child");


// Add a click event listener to the link
addTaskLink.addEventListener("click", function() {
  
    // Show the project name section as a popup
    var popup = document.createElement("div");
    popup.classList.add("popup");
    var popupContent = document.createElement("div");
    popupContent.classList.add("popup-content");
    var closeButton = document.createElement("span");
    closeButton.classList.add("close-button");
    closeButton.textContent = "x";
    var projectNameLabel = document.createElement("label");
    projectNameLabel.textContent = "Project Name:";
    var projectNameInput = document.createElement("input");
    projectNameInput.type = "text";
    projectNameInput.classList.add("project-name-input");
    var addButton = document.createElement("button");
    addButton.textContent = "Add Task";
    addButton.classList.add("add-button");
    popupContent.appendChild(closeButton);
    popupContent.appendChild(projectNameLabel);
    popupContent.appendChild(projectNameInput);
    popupContent.appendChild(addButton);
    popup.appendChild(popupContent);
    document.body.appendChild(popup);
  
    // Add a click event listener to the close button
    closeButton.addEventListener("click", function() {
      popup.style.display = "none";
    });
  
    // Add a click event listener to the "Add Task" button
    addButton.addEventListener("click", function() {
      // Get the project name and task details
      var projectName = projectNameInput.value;
      var taskDetails = "Task details go here";
  
      // TODO: Add the new task to the appropriate project
  
      // Hide the popup
      popup.style.display = "none";
    });
});