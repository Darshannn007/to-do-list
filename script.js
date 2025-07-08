const inputbox = document.getElementById("inp");
const listcontainer = document.getElementById("listing");

function addTask() {
   if (inputbox.value === "") {
    alert("Write something first!");
   }else{
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
   
   //close button
   let span = document.createElement("span");
   span.textContent = "\u00d7";
   span.className = "close"
   
   //close eventlistner
   span.addEventListener("click", function(){
      li.remove();
});

   listcontainer.appendChild(li); 
   li.appendChild(span);
   }
   inputbox.value=""
}