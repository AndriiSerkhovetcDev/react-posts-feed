import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/api';

const DEFAULT_VISABILITY = 5;

export const usePosts = () => {
    const [allPosts, setAllPosts] = useState([])
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visability, setVisability] = useState(DEFAULT_VISABILITY)


    useEffect(() => {
        fetchPosts()
            .then(data => {
                setAllPosts(data)
                setPosts(data.slice(0, visability))
                setLoading(false)
            }).catch(e => {
                setError(e.message)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        setPosts(allPosts.slice(0, visability))
    }, [visability, allPosts])

    const loadMore = () => setVisability(visability => visability + DEFAULT_VISABILITY)

    return { posts, loading, error, loadMore }
};
