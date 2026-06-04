export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">Page not found</p>
      <button
        className="bg-ink-400 text-white px-4 py-2 rounded md:hover:bg-ink-100 transition-colors duration-300 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
        Go back to home
      </button>
    </div>
  );
};
