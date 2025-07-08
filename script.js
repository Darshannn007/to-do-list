var input = document.getElementById("inp");
var list = document.getElementById("list-container");

function addT() {
  if (input.value.trim() === "") {
    alert("Write something first!");
  } else {
    let li = document.createElement("li");
    li.textContent = input.value;

    // Create the close button
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    span.className = "close";

    // Add click event to remove the li
    span.addEventListener("click", function() {
      li.remove();
    });

    li.appendChild(span);
    list.appendChild(li);

    input.value = "";
  }
}