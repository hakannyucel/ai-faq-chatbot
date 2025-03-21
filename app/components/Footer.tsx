'use client';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-3xl mx-auto py-4 px-4 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} AI FAQ Chatbot. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 