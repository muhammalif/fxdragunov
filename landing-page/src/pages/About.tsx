import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-6 lg:px-16 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            About <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">FXDragunov</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are focused on developing innovative trading solutions. Our mission is to provide advanced tools and technology to help traders achieve success in the forex market.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Founded with a vision to democratize forex trading, FXDragunov has been at the forefront of trading technology innovation. We understand the challenges traders face and have dedicated ourselves to creating solutions that make trading more accessible and profitable.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our team of experienced developers and traders work together to create cutting-edge expert advisors, indicators, and trading tools that have helped thousands of traders worldwide achieve their financial goals.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80" 
              alt="Trading workspace" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  We continuously push the boundaries of trading technology to provide cutting-edge solutions.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Every product we create undergoes rigorous testing to ensure the highest quality standards.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  We provide comprehensive support to help our clients succeed in their trading journey.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Our Expert Team</h2>
          <div className="flex justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Asep Saepudin</h3>
              <p className="text-gray-600 dark:text-gray-300">Developer</p>
              <p className="text-gray-600 dark:text-gray-300">Trading Strategist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
