
import React from "react";
import { Award, Users, Zap } from "lucide-react";

const Reasons = () => {
    const reasons = [
        {
            icon: <Award className="text-orange-500 w-12 h-12" />,
            title: 'Premium Quality',
            description: 'Our products undergo rigorous testing and optimization to ensure superior performance and reliability in all market conditions.'
        },
        {
            icon: <Users className='text-orange-500 w-12 h-12' />,
            title: 'Professional Support',
            description: 'Get dedicated support from our team of experienced traders and developers who understand your trading needs.'
        },
        {
            icon: <Zap className="text-orange-500 w-12 h-12" />,
            title: 'Proven Results',
            description: 'Join thousands of successful traders who have transformed their trading performance with our innovative solutions.'
        }
    ]

    return (
        <div className="bg-gradient-to-br from-gray-900 to-black dark:from-black dark:to-gray-900 py-20 px-6 lg:px-16 transition-colors duration-200">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-3xl opacity-20"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                                alt="Trading Success" 
                                className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                    
                    <div className="order-1 lg:order-2">
                        <span className="text-orange-400 text-lg font-semibold mb-4 block">Why Choose Us</span>
                        <h2 className="text-5xl font-bold mb-6 text-white leading-tight">
                            Leading the Trading Revolution
                        </h2>
                        <p className="text-gray-300 dark:text-gray-400 mb-12 text-xl leading-relaxed">
                            Experience the difference with our cutting-edge trading solutions that have helped thousands of traders achieve consistent profitability.
                        </p>
                        
                        <div className="space-y-8">
                            {reasons.map((reason, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-start space-x-6 p-6 bg-gray-800/50 dark:bg-gray-700/50 rounded-2xl border border-gray-700 dark:border-gray-600 hover:border-orange-500/50 transition-all duration-300 backdrop-blur-sm"
                                >
                                    <div className="flex-shrink-0 p-3 bg-orange-500/10 rounded-xl">
                                        {reason.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-semibold text-white mb-3">{reason.title}</h4>
                                        <p className="text-gray-300 dark:text-gray-400 leading-relaxed">{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reasons;
