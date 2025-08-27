import React from 'react';
import { usePosts } from '../hooks/UsePosts';
import Post from './Post';

const PostsList = () => {
    const { posts, loading, error, loadMore } = usePosts();
    
    if (loading) return <p className="d-flex align-items-center justify-content-center">Loading...</p>;
    if (error) return <p className="d-flex align-items-center justify-content-center">{error}</p>

    return (
        <div className="row mb-2 mt-2">
            {posts.map((post) => {
                return <div className="col-md-6" key={post.id} >
                    <Post {...post}/>
                </div>
            })}

            <button className="btn btn-success" onClick={() => loadMore()}>Load More</button>
        </div>
    );
};

export default PostsList;