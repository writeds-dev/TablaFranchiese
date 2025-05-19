import Image from "next/image";
import { useState } from "react";

interface YouTubeEmbedProps {
    videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        setIsPlaying(true);
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto h-full">
            {isPlaying ? (
                <iframe
                    className="w-full h-64 sm:h-80 md:h-96"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <div
                    className="relative cursor-pointer overflow-hidden"
                    onClick={handleClick}
                >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-700 opacity-70"></div>

                    {/* Video Thumbnail */}
                    <Image
                        width="530"
                        height="380"
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt="Video Thumbnail"
                        className="w-full h-64 sm:h-80 md:h-96 object-cover"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-red-600 text-white px-5 py-3 text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-110">
                            ▶ Play
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default YouTubeEmbed;
