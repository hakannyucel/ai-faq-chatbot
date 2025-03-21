'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-medium text-gray-900">
              AI FAQ Chatbot
            </Link>
          </div>
          
          <nav className="flex space-x-6">
            <Link 
              href="/" 
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              About
            </Link>
            <Link 
              href="/admin" 
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 