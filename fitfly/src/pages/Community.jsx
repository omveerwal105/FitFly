import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

const Community = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        if(!isLoggedIn()){
            navigate('/login');
        }
    },[navigate]);

    const [posts, setPosts] = useState([
        { id: 1, user: 'Om', content: 'Completed a 5K run today!', time: '2h ago', likes: 3 },
        { id: 2, user: 'Aarti', content: 'Lost 3kg in 2 weeks 💪', time: '5h ago', likes: 5 }
    ]);

    const [form, setForm] = useState({
        user: '',
        content: ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.user.trim() || !form.content.trim()) return;

        const newPost = {
            id: Date.now(),
            user: form.user.trim(),
            content: form.content.trim(),
            time: 'Just now',
            likes: 0
        };

        setPosts((prev) => ([newPost, ...prev]));
        setForm({ user: '', content: '' });
    };

    const handleLikes = (postId) => {
        const newLikes = posts.map((p) => p.id === postId ? { ...p, likes: p.likes + 1 } : p);

        setPosts(newLikes);
    }

    const mostLikedPost = useMemo(()=>{
        if(posts.length===0) return null;

        return posts.reduce((best , post)=>(
            post.likes > best.likes ? post : best
        ),posts[0]);
    },[posts]);




    return (
        <div className='max-w-2xl mx-auto p-4 space-y-6 font-sans'>

            <h3 className='text-2xl font-bold mb-4'>Community</h3>

            <form onSubmit={handleSubmit} className='rounded-xl shadow-md p-4 bg-white space-y-4'>

                <label className='block text-sm font-medium mb-4'>Name</label>
                <input value={form.user} name='user' onChange={handleChange} className='w-full border p-2 mb-4 focus:outline-none focus:ring' />

                <label className='block mb-4 text-sm font-medium '>Post</label>
                <input value={form.content} name='content' onChange={handleChange} className='w-full border p-2 mb-4 focus:outline-none focus:ring' />

                <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'>
                    Submit
                </button>

            </form>

            {mostLikedPost && (
                <div className='bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md '>
                    <h4 className='font-semibold mb-1'>Top Posts</h4>

                    <div className='flex items-center justify-between mb-1'>
                        <div>
                            <p className='text-sm'>
                                <span className='font-medium' >{mostLikedPost.user}</span>.{' '}
                                <span className='text-gray-500 text-xs'>{mostLikedPost.time}</span>
                            </p>
                        </div>
                        <div className='text-sm'>👍 {mostLikedPost.likes}</div>
                    </div>
                    <p>{mostLikedPost.content}</p>
                </div>
            )}

            <hr className="my-4" />


            <div className='space-y-4'>
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-xl shadow-md p-4 flex flex-col space-y-2"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold">{post.user}</h3>
                                <p className="text-xs text-gray-500">{post.time}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button type="button"
                                    onClick={() => handleLikes(post.id)}
                                    className="text-sm flex items-center gap-1 hover:text-blue-600"
                                    aria-label="Like"
                                >
                                    👍 {post.likes}
                                </button>
                            </div>
                        </div>
                        <p className="text-gray-800">{post.content}</p>
                    </div>
                ))}
                {posts.length === 0 && (
                    <p className="text-center text-gray-500">No posts yet. Be the first to share!</p>
                )}


            </div>

        </div>
    )
}

export default Community