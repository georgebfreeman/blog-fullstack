const postsEl = document.querySelector('#posts');
const API_URL = "https://bkpybdqjxmrgxwaqmxqe.supabase.co/rest/v1"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrcHliZHFqeG1yZ3h3YXFteHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MjU5MTgsImV4cCI6MjAyNjAwMTkxOH0.1kLMTU1ZYusSamYBWHqs--GDYU-NGeYrX7qy4bNLTZU"


fetch(`${API_URL}/f24_posts?select=*&apikey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
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
