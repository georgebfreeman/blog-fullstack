/**
 * Gets all the post in the database
 * @returns {[{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},null,null,null,null,null]}
 */
export function getPosts() {
    return [{
        "id": 1,
        "title": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        "content": "et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
        "publishedOn": "2024-02-12",
        "publishedBy": "Welbie Crossby"
    }, {
        "id": 2,
        "title": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
        "content": "turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in",
        "publishedOn": "2024-05-13",
        "publishedBy": "Malorie Castrillo"
    }, {
        "id": 3,
        "title": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        "content": "in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem",
        "publishedOn": "2024-05-18",
        "publishedBy": "Eveline Yakebowitch"
    }, {
        "id": 4,
        "title": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
        "content": "felis fusce posuere felis sed lacus morbi sem mauris laoreet",
        "publishedOn": "2023-12-08",
        "publishedBy": "Dode Wych"
    }, {
        "id": 5,
        "title": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "content": "lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in",
        "publishedOn": "2024-03-19",
        "publishedBy": "Sherlock Carnock"
    }, {
        "id": 6,
        "title": "Maecenas ut massa quis augue luctus tincidunt.",
        "content": "ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
        "publishedOn": "2023-11-29",
        "publishedBy": "Cal McLelland"
    }, {
        "id": 7,
        "title": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
        "content": "eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse",
        "publishedOn": "2024-01-04",
        "publishedBy": "Barde Baudinet"
    }, {
        "id": 8,
        "title": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "content": "pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in",
        "publishedOn": "2024-04-27",
        "publishedBy": "Ronald Shama"
    }, {
        "id": 9,
        "title": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
        "content": "odio consequat varius integer ac leo pellentesque ultrices mattis odio donec",
        "publishedOn": "2024-06-03",
        "publishedBy": "Rainer Vondrys"
    }, {
        "id": 10,
        "title": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
        "content": "fusce consequat nulla nisl nunc nisl duis bibendum felis sed",
        "publishedOn": "2024-06-09",
        "publishedBy": "Barby Jauncey"
    }]
}

/**
 * Deletes a post by its ID
 *
 * @param id
 */
export function deletePost(id){
    return `deleting post with ${id}`
}

/**
 * Updates post with ID
 *
 * @param id
 * @param content
 * @returns {string}
 */
export function updatePost(id, content){
    return `updating post with ${id}`
}