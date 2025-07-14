import { decode } from "he";
export default function VideoCard({ video, onClick }) {
  const { title, thumbnails } = video.snippet;
  const videoId = video.id.videoId;

  return (
    <div
      className="cursor-pointer hover:opacity-80 transition-all duration-200"
      onClick={() => onClick(videoId)}
    >
      <img
        src={thumbnails.high.url}
        alt={title}
        className="w-full object-cover rounded-xl"
      />
      <h2 className="text-sm font-semibold mt-2 px-1">{decode(title)}</h2>
    </div>
  );
}
