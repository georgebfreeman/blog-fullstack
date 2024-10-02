import {getPosts} from "./posts.js";
import {addPost} from "./posts.js";

const postsEl = document.querySelector('#posts');

getPosts()
    .then(data => {
 console.log(data)
        data.forEach( item => console.log(item))
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

// Example of how to use this function with your form:
// document.querySelector('form').addEventListener('submit', async (e) => {
//     e.preventDefault();
//
//     const newPost = {
//         title: document.querySelector('input[placeholder="Enter post title"]').value,
//         author: document.querySelector('input[placeholder="Enter author name"]').value,
//         content: document.querySelector('textarea').value
//     };
//
//     const result = await addPost(newPost);
//
//     if (result.success) {
//         console.log('Post added successfully:', result.data);
//         // Reset form or show success message
//     } else {
//         console.error('Error adding post:', result.error);
//             // Show error message to user
//     }
// });