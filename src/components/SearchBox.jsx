import { FaSearch } from "react-icons/fa";

export default function SearchBox({ query, setQuery, onSearch }) {
  const keywords = ["복지정책", "기초연금", "출산지원금", "지역화폐"];

  const handleSearch = () => {
    if (!query.trim()) return;
    onSearch(query.trim());
  };

  const handleKeywordClick = (word) => {
    setQuery(word);
    onSearch(word);
  };

  return (
    <div className="w-full max-w-md text-left">
      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm">
        <input
          type="text"
          placeholder="어떤 복지 정책이 궁금하신가요?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 p-3 pl-4 focus:outline-none bg-white"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-400 p-4 text-white cursor-pointer rounded-full hover:bg-blue-500"
        >
          <FaSearch className="text-white w-4 h-4" />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {keywords.map((word) => (
          <button
            key={word}
            onClick={() => handleKeywordClick(word)}
            className="bg-gray-200  shadow-xl cursor-pointer text-sm px-3 py-1 rounded-full  hover:-translate-y-1 transition-all duration-200"
          >
            #{word}
          </button>
        ))}
      </div>
    </div>
  );
}
