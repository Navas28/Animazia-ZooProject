import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios
            .get("https://backend-zoo.onrender.com/blogs")
            .then((res) => setBlogs(res.data))
            .catch((err) => console.error("Error fetching blogs:", err));
    }, []);

    return (
        <div className="p-6 mt-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <Link key={blog._id} to={`/blog/${blog._id}`}>
                        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 p-8 pb-8 pt-80 sm:pt-48 lg:pt-80 shadow-lg cursor-pointer h-full hover:scale-102 duration-500 ease-in-out">
                            {blog.titleImage && (
                                <img
                                    src={blog.titleImage}
                                    alt={blog.title}
                                    className="absolute inset-0 -z-10 h-full w-full object-cover rounded-2xl"
                                />
                            )}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-800/40"></div>

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <time dateTime={blog.date} className="mr-8">
                                    {blog.date}
                                </time>
                                <div className="-ml-4 flex items-center gap-x-4">
                                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                        <circle cx="1" cy="1" r="1"></circle>
                                    </svg>
                                    <div className="flex gap-x-2.5">{blog.author}</div>
                                </div>
                            </div>

                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <span className="absolute inset-0"></span>
                                {blog.title}
                            </h3>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blog;
