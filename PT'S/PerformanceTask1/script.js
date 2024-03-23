const changeImageButton = document.getElementById('changeImageButton');
const toggleButton = document.getElementById('toggleButton');
const eyeInfoParagraph = document.getElementById('eyeInfo');

changeImageButton.addEventListener('click', function() {
  const image = document.getElementById('myImage');
  image.src = image.src.endsWith('image1.jpg') ? 'image2.jpg' : 'image1.jpg';
});

toggleButton.addEventListener('click', function() {
  eyeInfoParagraph.style.display = eyeInfoParagraph.style.display === 'none' ? 'block' : 'none';
  if(document.getElementById("eyeInfo").className == "hide")
   document.getElementById("eyeInfo").className = "show";
else
   document.getElementById("eyeInfo").className = "hide";
}




);
