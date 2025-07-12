import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <header className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        {/* Logo */}
                        <div className="flex items-center">
                            <h1 className="text-3xl font-bold text-gray-900">
                                Sanskriti Blog
                            </h1>
                        </div>git

                        {/* Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Blog</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
                        </nav>

                        {/* CTA Button */}
                        <div className="flex items-center space-x-4">
                            <button className="bg-blue-600 text-black px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Write Article
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Welcome to <span className="text-blue-600">Sanskriti Blog</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Discover amazing stories, insights, and knowledge from our community of writers.
                        Share your thoughts and connect with readers worldwide.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                            Start Reading
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold">
                            Join Community
                        </button>
                    </div>
                </div> */}

                {/* Featured Content Preview */}
                {/* <div className="mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Featured Articles
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8"> */}
                        {/* Article Preview Cards */}
                        {/* <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                            <div className="p-6">
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    Getting Started with React
                                </h4>
                                <p className="text-gray-600 mb-4">
                                    Learn the fundamentals of React and build your first component...
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">5 min read</span>
                                    <span className="text-blue-600 font-medium">Read More</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
                            <div className="p-6">
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    Modern Web Development
                                </h4>
                                <p className="text-gray-600 mb-4">
                                    Explore the latest trends and best practices in web development...
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">8 min read</span>
                                    <span className="text-blue-600 font-medium">Read More</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                            <div className="p-6">
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                    UI/UX Design Tips
                                </h4>
                                <p className="text-gray-600 mb-4">
                                    Create beautiful and user-friendly interfaces with these tips...
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">6 min read</span>
                                    <span className="text-blue-600 font-medium">Read More</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main> */}

        </div>
    );
};

export default HomePage;
