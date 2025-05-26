
import React from "react";
import { ExternalLink, Zap, TrendingUp, Target } from "lucide-react";

const ProductList = () => {
    const contents = [
        {
            icon: <Target className="w-16 h-16 text-orange-500" />,
            title: 'Expert Advisor',
            description: 'Our superior BBMA.Dashboard EA provides autopilot trading capabilities with multi-timeframe signals for the renowned BBMA strategy.',
            features: ['Autopilot Trading', 'Multi-Timeframe Signals', 'BBMA Strategy'],
            link: 'https://wa.me/6289654702100?text=saya%20tertarik%20dengan%20produk%20Expert%20Advisor'
        },
        {
            icon: <TrendingUp className="w-16 h-16 text-orange-500" />,
            title: 'Indicator',
            description: 'BBMA.AutoChartist.V5 automatically marks all BBMA setups with advanced features including Fibonacci tools and smart notifications.',
            features: ['Auto Marking', 'Fibonacci Tools', 'Smart Alerts'],
            link: 'https://wa.me/6289654702100?text=saya%20tertarik%20dengan%20produk%20Indicator'
        },
        {
            icon: <Zap className="w-16 h-16 text-orange-500" />,
            title: 'Trading Tools',
            description: 'Specialized trading tools including our NewsTradeCompounds system for high-impact news trading opportunities.',
            features: ['News Trading', 'High Impact Events', 'Advanced Analytics'],
            link: 'https://wa.me/6289654702100?text=saya%20tertarik%20dengan%20produk%20Trading%20Tools'
        }
    ];

    return (
        <div className="bg-gradient-to-br from-gray-50 to-white py-20 px-6 lg:px-16">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-orange-500 text-lg font-semibold mb-4 block">Our Solutions</span>
                    <h2 className="text-5xl font-bold mb-6 text-gray-900">Premium Trading Products</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
                        Discover our comprehensive suite of professional trading tools designed to elevate your forex trading experience and maximize your potential profits.
                    </p>
                </div>
                
                <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
                    {contents.map((content, index) => (
                        <div 
                            key={index} 
                            className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-orange-50 rounded-2xl group-hover:bg-orange-100 transition-colors duration-300">
                                    {content.icon}
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">{content.title}</h3>
                            
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {content.description}
                            </p>
                            
                            <div className="mb-8">
                                <ul className="space-y-2">
                                    {content.features.map((feature, idx) => (
                                        <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <a 
                                href={content.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-orange-400 to-red-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold group-hover:from-red-500 group-hover:to-orange-400"
                            >
                                Learn More
                                <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
