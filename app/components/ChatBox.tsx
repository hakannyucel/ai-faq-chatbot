'use client';

import { useState, useRef, useEffect } from 'react';
import { Message } from '@/app/types/chat';
import { sendMessage } from '@/app/services/chatService';
import MessageList from '@/app/components/MessageList';
import MessageInput from '@/app/components/MessageInput';

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I am your AI assistant. How can I help you today?',
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Send to API and get response
      const response = await sendMessage(content);
      
      // Add assistant message
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error. Please try again later.',
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto border border-gray-200 rounded-lg shadow-md bg-white overflow-hidden">
      {/* Header */}
      <div className="p-3 bg-white text-gray-800 border-b border-gray-200">
        <div className="flex items-center">
          <h2 className="text-lg font-semibold">AI FAQ Assistant</h2>
          <p className="text-xs text-gray-500 ml-2">Powered by DeepSeek AI</p>
        </div>
      </div>
      
      {/* Message Area */}
      <div className="flex-1 overflow-scroll p-3 bg-white">
        <MessageList messages={messages} />
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input Area */}
      <div className="p-3 border-t border-gray-200 bg-white">
        <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        
        {/* Suggestions */}
        {messages.length < 2 && (
          <div className="mt-3">
            <p className="text-xs text-gray-500 mb-2">Quick suggestions:</p>
            <div className="flex flex-wrap gap-2">
              {["What services do you offer?", "How can I reset my password?", "Tell me about pricing plans"].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSendMessage(suggestion)}
                  disabled={isLoading}
                  className="text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 