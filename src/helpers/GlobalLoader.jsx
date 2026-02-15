// components/GlobalLoader.jsx
export default function GlobalLoader() {
  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
    </div>
  );
}
