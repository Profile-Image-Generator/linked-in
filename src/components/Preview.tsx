import React, { useState } from 'react';

interface PreviewProps {
    profileImage: string | null;
    bannerImage: string | null;
}

const Preview: React.FC<PreviewProps> = ({ profileImage, bannerImage }) => {
    const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');

    return (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Preview</h2>
            <div className="flex space-x-4 mb-4">
                <button
                    onClick={() => setPreviewMode('desktop')}
                    className={`px-4 py-2 rounded-md ${
                        previewMode === 'desktop'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700'
                    }`}
                >
                    Desktop
                </button>
                <button
                    onClick={() => setPreviewMode('mobile')}
                    className={`px-4 py-2 rounded-md ${
                        previewMode === 'mobile'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700'
                    }`}
                >
                    Mobile
                </button>
            </div>
            <div className={`preview-container ${previewMode} border-2 border-gray-300 rounded-lg`}>
                <div className={`relative ${previewMode === 'desktop' ? 'w-full' : 'w-64 mx-auto'}`}>
                    {bannerImage && (
                        <img src={bannerImage} alt="Banner preview" className="w-full h-48 object-cover" />
                    )}
                    {!bannerImage && (
                        <div className="w-full h-48 bg-gray-200"></div>
                    )}
                    {profileImage && (
                        <div className={`absolute ${previewMode === 'desktop' ? 'left-8 -bottom-16' : 'left-1/2 -bottom-16 transform -translate-x-1/2'}`}>
                            <img
                                src={profileImage}
                                alt="Profile preview"
                                className="w-32 h-32 rounded-full border-4 border-white"
                            />
                        </div>
                    )}
                </div>
                <div className={`bg-white ${previewMode === 'desktop' ? 'h-24' : 'h-32'}`}></div>
            </div>
        </div>
    );
};

export default Preview;
