import {getPosts} from "./posts.js";
import {addPost} from "./posts.js";

const postsEl = document.querySelector('#posts');

getPosts()
    .then(data => {
        console.log(data)
        data.forEach(item => console.log(item))
        data.forEach(item => showPostsWebView(item))
    })

function showPostsWebView(item = {}) {
    // console.log("works")
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h3 class="card-title">${item['title']}</h3>
                        <p class="text-gray-600">Published on: ${item['publishedOn']} by ${item['author']}</p>
                        <p>${item['content']}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
    `

    postsEl.appendChild(div);
}

// Function to render a single post
function renderPost(post) {
    return `
     <div class="card bg-base-100 shadow-xl mb-4">
       <div class="card-body">
         <h3 class="text-xl font-semibold">${post.title}</h3>
         <p class="text-sm text-neutral-content">By ${post.author}</p>
         <p class="mt-2">${post.content}</p>
       </div>
     </div>
   `
}

//
// Function to update the posts section
async function updatePosts() {
    const postsContainer = document.getElementById('posts')
    try {
        const posts = await getPosts()
        postsContainer.innerHTML = posts.map(renderPost).join('')
    } catch (error) {
        console.error('Error fetching posts:', error)
        postsContainer.innerHTML = '<p class="text-error">Error loading posts</p>'
    }
}

// Main initialization
const form = document.querySelector('#add-post')

// console.log(form); // IT IS NOT NULL

form.addEventListener('submit', (e) => {
    e.preventDefault()

//     console.log("this works");
//     // I expect to this works

});

document.addEventListener('DOMContentLoaded', () => {
    //    console.log(form)
    const submitButton = document.getElementById('submit')

//      console.log(submitButton)

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

//     console.log(form.addEventListener('submit', async (e))
        const formData = {
            date: document.getElementById('datetime').value,
            title: document.getElementById('title').value,
//        console.log(title: document.getElementById('title').value,)
            author: document.getElementById('author').value,
//        console.log( author: document.getElementById('author').value )
            content: document.getElementById('content').value
//        console.log( content: document.getElementById('content').value )
        }


        try {
            submitButton.disabled = true
                 await addPost(formData)
                 form.reset()
              await updatePosts()
        } catch (error) {
               console.error('Error adding post:', error)
               alert('Error adding post: ' + error.message)
        } finally {
               submitButton.disabled = false
        }
    })

    // // Initial load of posts
    updatePosts()
});
          //  console.log(formData)
