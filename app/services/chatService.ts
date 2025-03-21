'use server';

import { DEEPSEEK_API_KEY, DEEPSEEK_API_URL } from '../utils/config';

export async function sendMessage(message: string): Promise<string> {
  try {
    if (!DEEPSEEK_API_KEY) {
      throw new Error('Missing API key. Please check your .env file.');
    }
    
    const response = await fetch(`${DEEPSEEK_API_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: message }
        ],
        stream: false
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API response error:', response.status, response.statusText, errorText);
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error in chat service:', error);
    throw new Error('Failed to process your request');
  }
} 