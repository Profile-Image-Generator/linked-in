import React from 'react';

interface DownloadButtonProps {
    profileImage: string | null;
    bannerImage: string | null;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ profileImage, bannerImage }) => {
    const handleDownload = () => {
        // Implement download logic here
        if (profileImage) {
            const link = document.createElement('a');
            link.href = profileImage;
            link.download = 'linkedin_profile.png';
            link.click();
        }
        if (bannerImage) {
            const link = document.createElement('a');
            link.href = bannerImage;
            link.download = 'linkedin_banner.png';
            link.click();
        }
    };

    return (
        <button
            onClick={handleDownload}
            disabled={!profileImage && !bannerImage}
            className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            Download Images
        </button>
    );
};

export default DownloadButton;
