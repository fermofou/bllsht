import ViteLogo from "/vite.svg"; // Vite's default logo

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <img src={ViteLogo} alt="Vite Logo" className="w-20 h-20 mb-4" />
      <h1 className="text-3xl font-semibold mb-2">About This App</h1>
      <p className="text-gray-600 max-w-md">
        This app is built using React + Vite and structured with an /app-style
        architecture similar to Next.js. Enjoy fast reloads and modern tooling!
      </p>
    </div>
  );
}
