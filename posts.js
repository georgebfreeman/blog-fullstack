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

// export async function addPost(newPost = {}){
//     // TO DO: make this work (that is: when I click the submit post, it adds a new post to your supabase database) — ref: see my `prompt.md` file
//     // uses the supabase library to add a new post
//     // return new post if successfully
//     // return an error and the type if couldn't to supabase
// }

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

// Complete addPost function implementation
export async function addPost(newPost = {}) {
  try {

    // 3. Insert data into Supabase
    const { data, error } = await supabase
      .from('posts')  // Replace 'posts' with your actual table name
      .insert(newPost)
      .select();
    console.log(newPost)

    // 4. Handle any errors from Supabase
    if (error) {
      throw error;
    }

    // 5. Return the newly created post
    return { success: true, data: data[0] };

  } catch (error) {
    // 6. Return any errors
    return {
      success: false,
      error: error.message
    };
  }
}