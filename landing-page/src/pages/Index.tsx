
import React, { useEffect } from 'react';
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';
import ProductList from '../components/ProductList';
import Reasons from '../components/Reasons';
import Testimonials from '../components/Testimonials';

const Index = () => {
    useEffect(() => {
        // Add smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    const scrollToContent = () => {
        const contentSection = document.getElementById('content-section');
        contentSection?.scrollIntoView({ behavior: 'smooth' });
    };

    const stats = [
        { icon: <Users className="w-8 h-8" />, number: '100+', label: 'Active Traders' },
        { icon: <TrendingUp className="w-8 h-8" />, number: '89%', label: 'Success Rate' },
        { icon: <Shield className="w-8 h-8" />, number: '10+', label: 'Years Experience' }
    ];

    return (
        <div className='pt-20 font-sans overflow-hidden'>
            {/* Hero Section */}
            <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 container mx-auto px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
                                <span className="text-white">Make Your</span>
                                <br />
                                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                                    Great Profit
                                </span>
                                <br />
                                <span className="text-white">with Us</span>
                            </h1>
                            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                                Transform your trading journey with our cutting-edge forex solutions. Join thousands of successful traders who trust our innovative tools and expert guidance.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-6 mb-16">
                                <button 
                                    onClick={scrollToContent} 
                                    className="group bg-gradient-to-r from-orange-400 to-red-500 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center justify-center"
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a
                                    href="https://wa.me/6282127232415"
                                    className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg text-center"
                                >
                                    Contact Expert
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="flex justify-center mb-3 text-orange-400">
                                            {stat.icon}
                                        </div>
                                        <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                                        <div className="text-gray-400 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Image/Visual */}
                        <div className="relative">
                            <div className="relative">
                                <img 
                                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                                    alt="Trading Dashboard" 
                                    className='w-full h-auto rounded-3xl shadow-2xl'
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                            </div>
                            
                            {/* Floating Cards */}
                            <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <div className="text-green-400 text-2xl font-bold">+245%</div>
                                <div className="text-gray-300 text-sm">Monthly Growth</div>
                            </div>
                            
                            <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                <div className="text-orange-400 text-2xl font-bold">99.9%</div>
                                <div className="text-gray-300 text-sm">Uptime</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product List */}
            <div id="content-section">
                <ProductList />
            </div>

            {/* Reasons */}
            <Reasons />

            {/* Testimonials */}
            <Testimonials />
        </div>
    );
};

export default Index;
