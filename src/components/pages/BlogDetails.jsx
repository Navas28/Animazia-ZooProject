import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        axios
            .get(`https://backend-zoo.onrender.com/blogs/${id}`)
            .then((res) => setBlog(res.data))
            .catch((err) => console.error("Error fetching blog details:", err));
    }, [id]);

    if (!blog) return <p className="text-center text-gray-500">Loading...</p>;

    return (
        <div className="container mx-auto px-4 py-8 max-w-8xl mt-28">
            <div className="w-full shadow-lg rounded-lg overflow-hidden border-2 border-white">
                <div className="p-6 border-b border-gray-200">
                    <h1 className="text-3xl font-subhead text-customLightOrange mb-2">{blog.title}</h1>
                    <p className="text-white italic">
                        By {blog.author} • {blog.date}
                    </p>
                </div>

                {blog.images.length > 0 && (
                    <div className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {blog.images.map((img, index) => (
                                <div key={index} className="overflow-hidden rounded-lg">
                                    <img
                                        src={img}
                                        alt={`Blog Image ${index + 1}`}
                                        className="w-full h-[400px] object-cover cursor-pointer hover:scale-103 duration-500 ease-in-out"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="grid md:grid-cols-1 gap-8 p-6">
                    <div>
                        <p className="text-white font-para sm:text-xl text-center leading-relaxed">
                            {blog.description || "No description available."}
                        </p>
                    </div>
                </div>

                {blog.youtubeVideoIds.length > 0 && (
                    <div className="p-6">
                        <div className="grid grid-cols-1 gap-4">
                            {blog.youtubeVideoIds.map((videoId, index) => (
                                <iframe
                                    key={index}
                                    width="80%"
                                    height="350"
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title={`YouTube Video ${index + 1}`}
                                    className="rounded-lg mx-auto"
                                    allowFullScreen
                                ></iframe>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogDetails;
