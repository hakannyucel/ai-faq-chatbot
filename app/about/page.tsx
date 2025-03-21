import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              About Our AI FAQ Chatbot
            </h1>
            
            <div className="prose prose-blue prose-lg text-gray-500">
              <p>
                Our AI FAQ Chatbot is designed to provide instant, accurate answers 
                to your questions using advanced natural language processing (NLP) 
                powered by the Deepseek API.
              </p>
              
              <h2>How It Works</h2>
              <p>
                When you ask a question, our AI assistant analyzes your query and 
                searches through its extensive knowledge base to provide you with 
                the most relevant answer. The more you interact with it, the better 
                it becomes at understanding your specific needs.
              </p>
              
              <h2>Technology</h2>
              <p>
                Our chatbot is built using cutting-edge technologies:
              </p>
              <ul>
                <li><strong>Next.js</strong> - A React framework for production</li>
                <li><strong>React</strong> - A JavaScript library for building user interfaces</li>
                <li><strong>Deepseek API</strong> - Provides advanced natural language processing capabilities</li>
                <li><strong>TypeScript</strong> - For type safety and better developer experience</li>
              </ul>
              
              <h2>Open Source</h2>
              <p>
                This project is open source and available on GitHub. We welcome contributions 
                from the community to help improve and expand the capabilities of our AI FAQ Chatbot.
              </p>
              
              <h2>Privacy</h2>
              <p>
                We take your privacy seriously. All conversations with the chatbot are processed 
                securely, and we do not store personal information. The interactions are used only 
                to improve the quality of responses.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 