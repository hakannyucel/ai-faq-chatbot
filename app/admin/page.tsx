'use client';

import { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export default function Admin() {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: '1',
      question: 'What is an AI FAQ Chatbot?',
      answer: 'An AI FAQ Chatbot is an automated system that uses artificial intelligence to answer frequently asked questions from users in a conversational manner.',
    },
    {
      id: '2',
      question: 'How does the chatbot work?',
      answer: 'The chatbot uses natural language processing (NLP) through the Deepseek API to understand user queries and provide relevant answers based on its knowledge base.',
    },
    {
      id: '3',
      question: 'Is my conversation with the chatbot private?',
      answer: 'Yes, your conversations with the chatbot are processed securely. We do not store personal information, and the interactions are used only to improve the quality of responses.',
    },
  ]);
  
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editQuestion, setEditQuestion] = useState('');
  const [editAnswer, setEditAnswer] = useState('');
  
  const handleAddFAQ = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newQuestion.trim() && newAnswer.trim()) {
      const newFAQ: FAQ = {
        id: Date.now().toString(),
        question: newQuestion,
        answer: newAnswer,
      };
      
      setFaqs([...faqs, newFAQ]);
      setNewQuestion('');
      setNewAnswer('');
    }
  };
  
  const handleEdit = (faq: FAQ) => {
    setEditingId(faq.id);
    setEditQuestion(faq.question);
    setEditAnswer(faq.answer);
  };
  
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editQuestion.trim() && editAnswer.trim() && editingId) {
      setFaqs(
        faqs.map((faq) =>
          faq.id === editingId
            ? { ...faq, question: editQuestion, answer: editAnswer }
            : faq
        )
      );
      
      setEditingId(null);
      setEditQuestion('');
      setEditAnswer('');
    }
  };
  
  const handleDelete = (id: string) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Admin Dashboard
            </h1>
            
            <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Add New FAQ
                </h2>
              </div>
              
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <form onSubmit={handleAddFAQ} className="space-y-4">
                  <div>
                    <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                      Question
                    </label>
                    <input
                      type="text"
                      id="question"
                      value={newQuestion}
                      onChange={(e) => setNewQuestion(e.target.value)}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter a frequently asked question"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
                      Answer
                    </label>
                    <textarea
                      id="answer"
                      value={newAnswer}
                      onChange={(e) => setNewAnswer(e.target.value)}
                      rows={4}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter the answer to this question"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Add FAQ
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Manage FAQs
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Edit or delete existing FAQs
                </p>
              </div>
              
              <div className="border-t border-gray-200">
                <ul className="divide-y divide-gray-200">
                  {faqs.map((faq) => (
                    <li key={faq.id} className="px-4 py-4 sm:px-6">
                      {editingId === faq.id ? (
                        <form onSubmit={handleSaveEdit} className="space-y-4">
                          <div>
                            <label htmlFor="edit-question" className="block text-sm font-medium text-gray-700">
                              Question
                            </label>
                            <input
                              type="text"
                              id="edit-question"
                              value={editQuestion}
                              onChange={(e) => setEditQuestion(e.target.value)}
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="edit-answer" className="block text-sm font-medium text-gray-700">
                              Answer
                            </label>
                            <textarea
                              id="edit-answer"
                              value={editAnswer}
                              onChange={(e) => setEditAnswer(e.target.value)}
                              rows={4}
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                          </div>
                          
                          <div className="flex space-x-2">
                            <button
                              type="submit"
                              className="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditingId(null)}
                              className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      ) : (
                        <div>
                          <h3 className="text-md font-medium text-gray-900 mb-1">{faq.question}</h3>
                          <p className="text-sm text-gray-500 mb-3">{faq.answer}</p>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEdit(faq)}
                              className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(faq.id)}
                              className="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 