import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Cancel = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => navigate("/"), 3000);
        return () => clearTimeout(timer);
    }, [navigate]);
    return (
        <div>
            <div className="flex items-center justify-center bg-white min-h-screen">
                <div className="w-full max-w-2xl p-4 shadow-2xl  sm:p-10 sm:rounded-3xl hover:scale-102 duration-500 ease-in-out">
                    <div className="text-center">
                        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-full ">
                            <RiCloseCircleLine className="h-20 w-20 text-red-700" />
                        </div>
                        <h1 className="text-4xl font-extrabold text-red-700">Payment Cancel!</h1>

                        <p className="mt-4 text-sm">
                            If you have any questions or need further assistance, feel free to contact us at:
                            <a
                                href="mailto:admin@eliteai.tools"
                                className="font-medium text-indigo-600 dark:text-indigo-400 underline ml-1"
                            >
                                team@animazia.com
                            </a>{" "}
                            <br />
                            Redirecting to home page in 3 seconds...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cancel;
