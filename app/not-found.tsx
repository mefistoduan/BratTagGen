export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-4 text-black">404 - Page Not Found</h2>
      <p className="text-gray-600 mb-4">The page you are looking for does not exist.</p>
      <a 
        href="/" 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Return Home
      </a>
    </div>
  );
}