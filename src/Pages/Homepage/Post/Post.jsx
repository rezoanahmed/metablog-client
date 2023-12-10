import { useLoaderData } from 'react-router-dom';

const Post = () => {
    const { title, blog, thumbnail, author_name, author_image, author_email, category, date, views } = useLoaderData();
    return (
        <div className='space-y-5 mt-12'>
            <button className='btn btn-sm bg-blue-600 text-white hover:bg-blue-600'>{category}</button>
            <h1 className='font-bold text-4xl'>{title}</h1>
            <div className='flex gap-10 items-center'>
                <div className='flex items-center gap-2'>
                    <img src={author_image} className='h-10 w-10 border rounded-full' alt="author" />
                    <p className='font-medium text-gray-600 text-xl'>{author_name}</p>
                </div>
                <p>Posted On: {date}</p>
                <p>{views} views</p>
            </div>
            <div>
                <img src={thumbnail} alt="" className='' />
            </div>
            <div>
                <p>{blog}</p>
            </div>
            <div>
                <p>For any further query, email me at {author_email}</p>
            </div>
        </div>
    );
};

export default Post;