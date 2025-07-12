import React, { useState, useEffect, useRef } from 'react';
import './home.page.css';

const HomePage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [showCategories, setShowCategories] = useState(false);
    const dropdownRef = useRef(null);
    const categories = [
        'Technology',
        'Health & Wellness',
        'Travel & Adventure',
        'Education',
        'Lifestyle',
        'Finance & Business',
        'Food & Cooking',
        'Arts & Culture',
        'Science',
        'Sports',
        'Photography',
        'Fashion & Beauty',
        'Home & Garden',
        'Music',
        'Movies & TV',
        'Books & Literature'
    ];

    // Handle click outside dropdown to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowCategories(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Initialize theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else if (savedTheme === 'light') {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        } else {
            // Auto-detect system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(prefersDark);
            if (prefersDark) {
                document.documentElement.classList.add('dark');
            }
        }
    }, []);

    const handleThemeToggle = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);

        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className="home-container">
            {/* Header Section */}
            <header className="header">
                <div className="header-content">
                    <div className="header-inner">
                        {/* Logo */}
                        <div className="logo-container">
                            <h1 className="logo-text">
                                Sanskriti Blog
                            </h1>
                        </div>

                        {/* Navigation */}
                        <nav className="nav">

                        </nav>

                        {/* CTA Button */}
                        <div className="cta-container">
                            {/* Categories Dropdown Button */}
                            <div className="categories-dropdown" ref={dropdownRef}>
                                <button
                                    className="categories-button"
                                    onClick={() => setShowCategories((prev) => !prev)}
                                >
                                    Categories
                                    <svg className="categories-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {showCategories && (
                                    <div className={`categories-menu ${showCategories ? 'show' : ''}`}>
                                        <ul className="categories-list">
                                            {categories.map((cat) => (
                                                <li key={cat} className="categories-item">
                                                    <a href="#" className="categories-link" onClick={(e) => {
                                                        e.preventDefault();
                                                        setShowCategories(false);
                                                    }}>{cat}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <a href="/write" className="write-article-link">
                                Write Article
                            </a>


                            <a href="/signin" className="sign-in-link">
                                Sign In
                            </a>
                            <a href="/contact" className="contact-link">
                                Contact
                            </a>
                            <button className="get-started-btn">
                                Get Started
                            </button>

                                {/* Theme Mode Icon - comes before Sign In */}
                            <button
                                className="theme-toggle"
                                aria-label="Toggle Theme"
                                onClick={handleThemeToggle}
                            >
                                {darkMode ? (
                                    // Moon icon for dark mode
                                    <svg xmlns="http://www.w3.org/2000/svg" className="theme-icon theme-icon-moon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                                    </svg>
                                ) : (
                                    // Sun icon for light mode (improved)
                                    <svg xmlns="http://www.w3.org/2000/svg" className="theme-icon theme-icon-sun" fill="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="5" />
                                        <g stroke="currentColor" strokeWidth="2">
                                            <line x1="12" y1="1" x2="12" y2="3" />
                                            <line x1="12" y1="21" x2="12" y2="23" />
                                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                            <line x1="1" y1="12" x2="3" y2="12" />
                                            <line x1="21" y1="12" x2="23" y2="12" />
                                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                        </g>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    );
};

export default HomePage;
