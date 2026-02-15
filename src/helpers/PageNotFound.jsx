import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-lg mb-6">Page not found</p>
            <Link
                to="/"
                className="px-6 py-3 rounded bg-black text-white"
            >
                Go Home
            </Link>
        </div>
    );
}
