'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from './ui/button';

// Dynamically import DeepChat component
const DeepChat = dynamic(
  () => import('deep-chat-react').then((mod) => mod.DeepChat),
  { ssr: false }
);

export interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState<ChatMessage[]>([
    { role: 'ai', text: 'Hello! How can I help you today?' },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setHistory([...history, { role: 'user', text: message }]);
    setMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      setHistory(prev => [...prev, { role: 'ai', text: 'This is a demo response.' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="flex flex-col bg-background rounded-lg shadow-lg border w-[350px] h-[500px] md:w-[400px] md:h-[600px] overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h2 className="font-semibold">Chat Assistant</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {history.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 min-w-0 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button type="submit" size="icon">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <Button
          className="rounded-full h-14 w-14 shadow-lg"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat assistant"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}