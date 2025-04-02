import React, { useState } from 'react';
import { useGetPostsQuery, useCreatePostMutation,useDeletePostMutation,useUpdatePostMutation} from './api';
//,
const PostList = () => {
    const {data: posts, isLoading, isError} = useGetPostsQuery({limit: 6, offset: 2});
    const [CreatePostMutation, { isLoading: isPosting }] = useCreatePostMutation();
    const [updatePost] = useUpdatePostMutation();
    const [deletePost] = useDeletePostMutation();

    //const [newPost, setNewPost] = useState({ title: '', body: '' });
    const [editPost, setEditPost] = useState<{id: number; title: string; body: string} | null>(null);

    /*const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();
        await addPost(newPost);
        setNewPost({title:'',body:''});
    };*/

   const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editPost) {
            await updatePost(editPost);
            setEditPost(null);
        }
    };

    const handleDelete = async (id:number) => {
        await deletePost(id);
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading posts!</p>;
        
    return(
        <div>
        
        <h2>GET</h2>
        <ul>
            {posts?.map((post) => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
        <button onClick={() =>{
            const post = {title: "My new post"};
            CreatePostMutation(post);
        }}>Post</button>
        
        {editPost && (
                <form onSubmit={handleUpdate}>
                    <input
                        type="text"
                        value={editPost.title}
                        onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                    />
                    <textarea
                        value={editPost.body}
                        onChange={(e) => setEditPost({ ...editPost, body: e.target.value })}
                    />
                    <button type="submit">Update Post</button>
                    <button onClick={() => setEditPost(null)}>Cancel</button>
                </form>
            )}
        </div>
    );
    
}

export default PostList;