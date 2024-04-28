// Function to add blog posts to the HTML
function displayAllBlogs() {
  const blogContainer = document.querySelector('.blog-container');

  // Clear existing blog posts to avoid duplicates
  blogContainer.innerHTML ='';

  // Retrieve blog data from local storage
  const getData = localStorage.getItem('blogData');
  let blogEntries = [];

  if (getData) {
    blogEntries = JSON.parse(getData);
  }

  // Loop through blog entries and create HTML elements for each blog post
  blogEntries.forEach(blogData => {
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');

    const title = document.createElement('div');
    title.classList.add('blog-title');
    title.textContent = `Title: ${blogData.Title}`;

    const content = document.createElement('div');
    content.classList.add('blog-content');
    content.textContent = `Content: ${blogData.Content}`;

    const username = document.createElement('div');
    username.classList.add('blog-usernamer');
    username.textContent = `Username: ${blogData.Username}`;

    // Append title, content, and author to blog post
    blogPost.appendChild(title);
    blogPost.appendChild(content);
    blogPost.appendChild(username);

    // Append blog post to blog container
    blogContainer.appendChild(blogPost);
  

  // Create a button element.
const deleteButton = document.createElement('button');
deleteButton.classList.add('delete-btm');
blogPost.appendChild(deleteButton);
// Set the button's text.
deleteButton.innerText = 'Delete';

// Add an event listener to the button.
deleteButton.addEventListener('click', function() {
  // Delete the element you want to delete.
  const elementToDelete = document.querySelector('.blog-post');
  elementToDelete.parentNode.removeChild(blogPost);
});

// Append the button to the DOM.
blogPost.appendChild(deleteButton);

 });
}




// Call displayAllBlogs function when the page loads
window.onload = displayAllBlogs;

const closeButton = document.querySelector("#back");
//Back button to go back
closeButton.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "index.html";
});
