import supabase from "./config.js";

/**
 * Gets all the post in the database
 * @returns {[{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},{publishedBy: string, publishedOn: string, id: number, title: string, content: string},null,null,null,null,null]}
 */
export async function getPosts() {
    let {data, error} = await supabase
        .from('posts')
        .select('*')

    return data;
}

/**
 * Deletes a post by its ID
 *
 * @param id
 */
export async function deletePost(id) {
    try {
        // console.log(`deleting post id ${id}`)

        const response = await supabase
              .from('posts')
              .delete()
              .eq('id', id)

        // return response
        // { "error": null, "data": null, "count": null, "status": 204, "statusText": "" }
        // console.log(response)

        if(response.error){
            return {error: response.error, statusText: null}
        }

        return {error: null, statusTet: `${id} successfully deleted`}

    } catch (e) {
        console.error(`There was an error: ${e.message}`)
    }

    // return `deleting post with ${id}`
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

// Update addPost function with functionality to add to supabase
export async function addPost(newPost = {}) {
    const { data, error } = await supabase
        .from('posts')
        .insert([
            {
                title: newPost.title,
                author: newPost.author,
                content: newPost.content,
                publishedOn: new Date().toISOString()
            }
        ])
        .select();

    if (error) {
        console.error('Error adding post:', error);
        return { success: false, error: error.message };
    }
    console.log('Post added successfully:', data);
    return { success: true, data: data[0] };
}
