// alert("heelo")
let selectedIndex = document.getElementById("role");
// let selectedValue = selectedIndex.options[selectedIndex].value;
const submit = document.getElementById("submit-btn");
// var value = selectedIndex.value
// var option =  selectedIndex.options[selectedIndex.selectedIndex].text;


selectedIndex.onchange = Change 
let openWindowValue = "student"
function Change() {
  var value = selectedIndex.value
  var option =  selectedIndex.options[selectedIndex.selectedIndex].text;
  openWindowValue=value
  // alert(option)
  // console.log(selectedValue);
  // window.open(value + ".html");
}

submit.addEventListener("click", function () {
  // alert('hi')
  // alert(option)
  // console.log(selectedValue);
  window.open(openWindowValue + ".html");
})