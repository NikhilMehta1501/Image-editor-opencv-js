console.log("js loaded");
document.body.classList.add('loading');
console.log("loading added");

openCVReady = () => {
  document.body.classList.remove('loading');
  console.log("loading removed");
}

let inputFile = document.getElementById('inputFile');

let inputFileDisplay =  document.getElementById('inputImage');

inputFile.addEventListener("change", function() {
  inputFileDisplay.src = URL.createObjectURL(event.target.files[0]);
  console.log("file uploaded");
})
