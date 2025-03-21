import React from "react";

const BookingHour = () => {
    return (
        <section className="pb-10">
            <h1
                className="text-customeWhite text-center font-head text-4xl md:text-6xl font-bold mb-10"
                data-aos="fade-down"
                id="Team"
            >
                Visiting Hours
            </h1>
            <div className="container mx-auto" data-aos="fade-down">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="max-w-full overflow-x-auto rounded-xl">
                            <table className="w-full table-auto">
                                <thead>
                                    <tr className="text-center bg-primary">
                                        <th className="w-1/6 min-w-[160px] border-b border-l border-[#E8E8E8] border-r py-4 px-3 text-lg font-bold text-customMediumGreen bg-customeWhite lg:py-7 lg:px-4">
                                            DAY
                                        </th>
                                        <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold text-customMediumGreen lg:py-7 lg:px-4 border-b border-l border-[#E8E8E8] bg-customeWhite">
                                            TIME
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { day: "Monday", time: "9:00 AM - 6:00 PM" },
                                        { day: "Tuesday", time: "9:00 AM - 6:00 PM" },
                                        { day: "Wednesday", time: "9:00 AM - 6:00 PM" },
                                        { day: "Thursday", time: "9:00 AM - 6:00 PM" },
                                        { day: "Friday", time: "9:00 AM - 7:00 PM" },
                                        { day: "Saturday", time: "8:00 AM - 8:00 PM" },
                                        { day: "Sunday", time: "8:00 AM - 8:00 PM" },
                                    ].map((item, index) => (
                                        <tr key={index}>
                                            <td className="text-dark border-b border-l border-[#E8E8E8] border-r  dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium bg-white">
                                                {item.day}
                                            </td>
                                            <td className="text-dark border-b border-[#E8E8E8] bg-white dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                                                {item.time}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingHour;
