function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
    */
    
    // Check if the event is triggering
    console.log("Event triggered: mouseover");
    
    // Print out information about the previewPic variable
    console.log("Alt text:", previewPic.alt);
    console.log("Source URL:", previewPic.src);
  
    // Change the text of the element with the id 'image'
    document.getElementById('image').innerHTML = previewPic.alt;
  
    // Change the background image of the element with the id 'image'
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}
  
function undo() {
    /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
    */
    
    console.log("Event triggered: mouseout");
  
    // Update the background image back to the original value
    document.getElementById('image').style.backgroundImage = "url('')";
  
    // Update the text back to the original text
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
