import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const testimonials = [
        {
            name: 'Marcus Chen',
            text: 'FXDragunov\'s Expert Advisor has completely transformed my trading approach. The BBMA strategy is incredibly effective and the automation saves me hours every day.',
            role: 'Professional Trader',
            rating: 5
        },
        {
            name: 'Sarah Williams',
            text: 'The indicators are precise and the support team is exceptional. I\'ve seen a 40% improvement in my trading accuracy since using their tools.',
            role: 'Forex Analyst',
            rating: 5
        },
        {
            name: 'David Rodriguez',
            text: 'Outstanding products with real results. The NewsTradeCompounds tool has opened up entirely new profitable opportunities for my portfolio.',
            role: 'Investment Manager',
            rating: 5
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white px-6 lg:px-16">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-orange-500 text-lg font-semibold mb-4 block">Client Success Stories</span>
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">What Our Traders Say</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-xl">
                        Discover how our trading solutions have helped professionals achieve remarkable results
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden rounded-3xl">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 mx-4">
                                        <div className="flex flex-col lg:flex-row items-center gap-8">
                                            <div className="flex-shrink-0">
                                                <div className="relative">
                                                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center shadow-lg border-4 border-orange-100">
                                                        <span className="text-white text-3xl font-bold">
                                                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                                                        </span>
                                                    </div>
                                                    <div className="absolute -top-2 -right-2 bg-orange-500 rounded-full p-2">
                                                        <Quote className="w-6 h-6 text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="flex justify-center lg:justify-start mb-4">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                                    ))}
                                                </div>
                                                
                                                <p className="text-gray-700 text-xl italic mb-6 leading-relaxed">
                                                    "{testimonial.text}"
                                                </p>
                                                
                                                <div>
                                                    <h4 className="text-2xl font-bold text-gray-900 mb-1">{testimonial.name}</h4>
                                                    <p className="text-orange-500 font-semibold">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50 border border-gray-200"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50 border border-gray-200"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    currentSlide === index 
                                        ? 'bg-orange-500 w-8' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
