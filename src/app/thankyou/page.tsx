import Link from "next/link";

export default function ThankYou() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
                <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
                <p className="text-gray-700 mb-6">
                    Your submission has been received. We appreciate your time and will get back to you soon.
                </p>
                <Link href="/" className="inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
