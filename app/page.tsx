import ChatBox from '@/app/components/ChatBox';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center py-8 px-4">
        <div className="w-full max-w-3xl mx-auto mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            <span className="block">AI-Powered FAQ</span>
            <span className="block text-gray-700">Interactive Chatbot</span>
          </h1>
          <p className="text-gray-600">
            Get instant answers to all your questions with our AI assistant. Try it now!
          </p>
        </div>
        
        <ChatBox />
      </main>
      
      <Footer />
    </div>
  );
}
