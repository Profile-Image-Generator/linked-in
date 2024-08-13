import React, { useState } from 'react';
import { useImageProcessing } from '../hooks/useImageProcessing';

interface BannerImageGeneratorProps {
    setBannerImage: (image: string) => void;
    bannerText: { title: string; subtitle: string };
    setBannerText: (text: { title: string; subtitle: string }) => void;
    bannerFont: string;
    setBannerFont: (font: string) => void;
    bannerColor: string;
    setBannerColor: (color: string) => void;
}

const BannerImageGenerator: React.FC<BannerImageGeneratorProps> = ({
                                                                       setBannerImage,
                                                                       bannerText,
                                                                       setBannerText,
                                                                       bannerFont,
                                                                       setBannerFont,
                                                                       bannerColor,
                                                                       setBannerColor,
                                                                   }) => {
    const [gradient, setGradient] = useState('linear-gradient(to right, #ff0000, #00ff00)');
    const [opacity, setOpacity] = useState(1);
    const { processImage } = useImageProcessing();

    const handleGradientChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGradient(event.target.value);
        // Here you would generate the banner image with the new gradient
    };

    const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOpacity(parseFloat(event.target.value));
        // Here you would update the banner image opacity
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setBannerText({ ...bannerText, [name]: value });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Banner Image Generator</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gradient
                    </label>
                    <select
                        onChange={handleGradientChange}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                        <option value="linear-gradient(to right, #ff0000, #00ff00)">Red to Green</option>
                        <option value="linear-gradient(to right, #0000ff, #ffff00)">Blue to Yellow</option>
                        {/* Add more gradient options */}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Opacity
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={opacity}
                        onChange={handleOpacityChange}
                        className="w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={bannerText.title}
                        onChange={handleTextChange}
                        placeholder="Title"
                        maxLength={50}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subtitle
                    </label>
                    <input
                        type="text"
                        name="subtitle"
                        value={bannerText.subtitle}
                        onChange={handleTextChange}
                        placeholder="Subtitle"
                        maxLength={100}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Font
                    </label>
                    <select
                        value={bannerFont}
                        onChange={(e) => setBannerFont(e.target.value)}
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                        <option value="Arial">Arial</option>
                        <option value="Helvetica">Helvetica</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Text Color
                    </label>
                    <input
                        type="color"
                        value={bannerColor}
                        onChange={(e) => setBannerColor(e.target.value)}
                        className="mt-1 block w-full h-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default BannerImageGenerator;
