import supabase from "./config.js";

/**
 * Gets all the post in the database
 * @returns {[{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},null,null,null,null,null]}
 */
export async function getPosts() {
    let {data, error} = await supabase
        .from('f24_posts')
        .select('*')

    return data;
}

/**
 * Deletes a post by its ID
 *
 * @param id
 */
export function deletePost(id) {
    return `deleting post with ${id}`
}

/**
 * Updates post with ID
 *
 * @param id
 * @param content
 * @returns {string}
 */
export function updatePost(id, content) {
    return `updating post with ${id}`
}