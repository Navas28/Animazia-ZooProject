import { Ban, HandHeart, ShieldCheck } from "lucide-react";
import { useState } from "react";

const Donation = () => {
    const predefinedAmounts = [100, 500, 1000, 2000];
    const [donationAmount, setDonationAmount] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleAmountSelect = (amount) => {
        setDonationAmount(amount.toString());
        setError("");
    };

    const handleCustomAmountChange = (e) => {
        setDonationAmount(e.target.value);
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const amount = parseInt(donationAmount);

        if (!amount || amount < 1) {
            setError("Please enter a valid donation amount.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch("https://backend-zoo.onrender.com/donate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount }),
            });

            const data = await response.json();
            if (data.url) {
                window.location.href = data.url;
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Payment failed. Try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mt-7 p-6 flex justify-center items-center min-h-screen">
            <div className="w-full max-w-md rounded-xl shadow-xl overflow-hidden border-2 border-gray-100">
                <div className="relative">
                    <div className="absolute inset-0 border-b-2 border-white"></div>
                    <div className="text-center p-8 relative">
                        <div className="h-16 w-16  rounded-full flex items-center justify-center mx-auto mb-4">
                            <HandHeart size={40} className="text-customLightOrange" />
                        </div>
                        <h2 className="text-3xl font-bold text-white font-head">Support Us</h2>
                        <p className="text-white font-para mt-2 max-w-xs mx-auto">
                            Your contribution helps us protect wildlife and preserve their natural habitats for future
                            generations.
                        </p>
                    </div>
                </div>

                <div className="p-6 md:p-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-customLightGreen mb-2 font-para">
                                Select Donation Amount (&#8377;)
                            </label>
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                {predefinedAmounts.map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        className={`py-3 rounded-lg transition-all duration-200 font-medium ${
                                            donationAmount === amount.toString()
                                                ? "bg-customLightOrange text-white ring-2"
                                                : "bg-white border border-gray-300 text-customeGreen"
                                        }`}
                                        onClick={() => handleAmountSelect(amount)}
                                    >
                                        &#8377;{amount.toLocaleString()}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-sm font-medium text-customLightGreen font-para">
                                        Custom Amount
                                    </label>
                                    <span className="text-xs text-customLightGreen">
                                        <span className="text-red-600">*</span> Minimum &#8377;50
                                    </span>
                                </div>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white font-medium">
                                        &#8377;
                                    </span>
                                    <input
                                        type="number"
                                        value={donationAmount}
                                        onChange={handleCustomAmountChange}
                                        className="w-full text-white pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customLightOrange focus:border-transparent transition-all duration-200"
                                        placeholder="Enter amount"
                                    />
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-3 rounded">
                                <p className="text-red-600 text-md flex gap-3 items-center font-para">
                                    <Ban />
                                    {error}
                                </p>
                            </div>
                        )}

                        <button
                            type="submit"
                            className={`w-full py-3 px-6 rounded-lg font-semibold text-lg tracking-wider hover:scale-102 duration-500 ease-in-out font-head
                ${
                    isLoading
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-white text-customeGreen hover:bg-customLightOrange hover:text-white shadow-md hover:shadow-lg focus:outline-none"
                }`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Processing...
                                </div>
                            ) : (
                                "Donate Now"
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="p-2 bg-gray-100 rounded-full">
                                <ShieldCheck className="text-customeGreen" />
                            </div>
                            <span className="text-md text-white font-medium font-para">Secure Payment</span>
                        </div>
                        <div className="text-center text-xs text-white font-para">
                            <p>Donations are tax-deductible under Section 80G of Income Tax Act.</p>
                            <p className="mt-1">Registration No: ANIMAZIA/AWLP/2025-785294</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donation;
