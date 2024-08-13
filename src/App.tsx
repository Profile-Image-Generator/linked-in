import React, { useState } from 'react';
import Header from './components/Header';
import ProfileImageEditor from './components/ProfileImageEditor';
import BannerImageGenerator from './components/BannerImageGenerator';
import Preview from './components/Preview';
import DownloadButton from './components/DownloadButton';
import BannerImageEditor from './components/BannerImageEditor';

const App: React.FC = () => {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [bannerImage, setBannerImage] = useState<string | null>(null);
    const [bannerText, setBannerText] = useState({ title: '', subtitle: '' });
    const [bannerFont, setBannerFont] = useState('Arial');
    const [bannerColor, setBannerColor] = useState('#000000');

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ProfileImageEditor setProfileImage={setProfileImage} />
                    <BannerImageEditor setBannerImage={setBannerImage}/>
                    {/*<BannerImageGenerator*/}
                    {/*    setBannerImage={setBannerImage}*/}
                    {/*    bannerText={bannerText}*/}
                    {/*    setBannerText={setBannerText}*/}
                    {/*    bannerFont={bannerFont}*/}
                    {/*    setBannerFont={setBannerFont}*/}
                    {/*    bannerColor={bannerColor}*/}
                    {/*    setBannerColor={setBannerColor}*/}
                    {/*/>*/}
                </div>
                <Preview profileImage={profileImage} bannerImage={bannerImage} />
                <DownloadButton profileImage={profileImage} bannerImage={bannerImage} />
            </main>
        </div>
    );
};

export default App;
