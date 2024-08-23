import React from 'react';
import Button from "../ui/Button";

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
        <Button
            onClick={handleDownload}
            disabled={!profileImage && !bannerImage}
            fullWidth
        >
            Download Images
        </Button>
    );
};

export default DownloadButton;
