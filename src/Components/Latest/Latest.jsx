import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios/useAxios";
import { NavLink } from "react-router-dom";

const Latest = () => {
    // const myPosts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    // const [posts, setPosts] = useState([]);
    const axiosInstance = useAxios();
    const { data: posts, isLoading } = useQuery({
        queryKey: "latest-posts",
        queryFn: async () => {
            const response = await axiosInstance.get("/posts")
            // .then(res=>setPosts(res.data))
            return response.data;

        }
    })
    // console.log(data);
    if (isLoading) {
        return <div className="mt-36 text-center"><span className="loading loading-dots loading-lg"></span></div>

    }
    return (
        <div className="mt-36">
            <h1 className="font-bold text-xl mb-4">Latest Posts</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    posts?.map(element => <>
                        <div
                            className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                                <img
                                    src={element.thumbnail}
                                    alt="thumbnail"
                                    className="h-64" />
                            </div>
                            <div className="p-6">
                                <div className="h-16">
                                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {element.title}
                                    </h4>
                                </div>
                                <div className="h-16">
                                    <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                                        {element.blog.slice(0, 40)}...<NavLink to={`/post/${element._id}`} className='text-blue-600 font-bold'>Read More</NavLink>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-6">
                                <div className="flex items-center">
                                    <img alt="author_image"
                                        src={element.author_image}
                                        className="h-10 w-10 !rounded-full  border-2 border-white hover:z-10" />
                                    <p className="ml-2">{element.author_name}</p>
                                </div>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    {element.date}
                                </p>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Latest;