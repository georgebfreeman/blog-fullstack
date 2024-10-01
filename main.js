import {getPosts} from "./posts.js";

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
                        <p class="text-gray-600">Published on: ${item['publishedOn']} by ${item['publishedBy']}</p>
                        <p>${item['content']}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read More</button>
                        </div>
                    </div>
                </div>
    `

    postsEl.appendChild(div);
}
