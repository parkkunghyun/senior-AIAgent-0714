import { useState } from "react";
import SearchBox from "../components/SearchBox";
import VideoCard from "../components/VideoCard";
import VideoModal from "../components/VideoModal";

export default function Home() {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const handleSearch = async (searchTerm) => {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        searchTerm
      )}&videoDuration=medium&type=video&order=date&maxResults=8&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`
    );
    const data = await res.json();
    setVideos(data.items || []);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-50 text-center p-6">
      <h1 className="text-2xl font-bold mb-2">모든 복지를 한눈에!</h1>
      <h4 className="text-xl font-semibold text-blue-600 mb-6">Bokji Talk</h4>

      <SearchBox query={query} setQuery={setQuery} onSearch={handleSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 w-full max-w-4xl">
        {videos.map((video) => (
          <VideoCard
            key={video.id.videoId}
            video={video}
            onClick={(id) => setSelectedVideoId(id)}
          />
        ))}
      </div>

      {selectedVideoId && (
        <VideoModal
          videoId={selectedVideoId}
          onClose={() => setSelectedVideoId(null)}
        />
      )}
    </div>
  );
}
