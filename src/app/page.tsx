import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handlePlayRandom = () => {
    //const randomId = Math.floor(Math.random() * 1000);
    navigate(`/about`);
  };

  const handleJoin = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Game</h1>

      <button
        onClick={handlePlayRandom}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Play Random
      </button>
      <button
        onClick={handleJoin}
        className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Join
      </button>
    </div>
  );
}
