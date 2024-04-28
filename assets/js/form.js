//form attribute to submit the blog info to the blog.html
const submitButton = document.querySelector("#submission");
const username = document.querySelector("#username");
const title = document.querySelector("#tittle");
const content = document.querySelector("#content");

//getting the data from locally to Parse data using JSON
const getData = localStorage.getItem('blogData');
let blogEntries = []
if (getData) {
 blogEntries = JSON.parse(getData)
}

//get the content filled on the form by the user
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  
  if (username.value && title.value && content.value) {
    const blogData = {
      Username: username.value.trim(),
      Title: title.value.trim(),
      Content: content.value.trim(),
    };

    // and store it in the blogEntries Array 
    blogEntries.push(blogData)
    localStorage.setItem("blogData", JSON.stringify(blogEntries));

    //loads blogs page
    showAllBlogs();
  } else {
    alert("Please enter all fields");
  }
});

//function to load blog.html 
function showAllBlogs() {
  window.location.href = "blog.html";
}

