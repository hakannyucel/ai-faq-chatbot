# AI FAQ Chatbot

An interactive AI-powered chatbot for answering frequently asked questions. This project combines modern web technologies with AI to create a seamless user experience for getting quick and accurate answers.

![AI FAQ Chatbot](https://via.placeholder.com/1200x630/4F46E5/FFFFFF?text=AI+FAQ+Chatbot)

## Features

- 🤖 AI-powered responses using the Deepseek API
- 💬 Real-time chat interface
- 📱 Responsive design for all devices
- 🔧 Admin dashboard for FAQ management
- 📊 Clean and intuitive user interface
- 🔒 Secure processing of user queries

## Tech Stack

- **Next.js** - React framework for server-side rendering and static site generation
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Deepseek API** - Natural language processing capabilities
- **CSS** - For styling components and layouts

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/hakannyucel/ai-faq-chatbot.git
cd ai-faq-chatbot
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory with your Deepseek API key:

```
DEEPSEEK_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
ai-faq-chatbot/
│
├── app/                     # Application source code
│   ├── components/          # Reusable React components
│   │   ├── ChatBox.tsx      # Main chat container
│   │   ├── MessageList.tsx  # Display for chat messages
│   │   ├── MessageInput.tsx # User input component
│   │   ├── Header.tsx       # Site header component
│   │   └── Footer.tsx       # Site footer component
│   │
│   ├── services/            # API and business logic
│   │   └── chatService.ts   # Service for interacting with Deepseek API
│   │
│   ├── types/               # TypeScript type definitions
│   │   └── chat.ts          # Types for chat functionality
│   │
│   ├── pages/               # Page components
│   │
│   ├── styles/              # Global and component-specific styles
│   │
│   └── utils/               # Utility functions and helpers
│
├── public/                  # Static assets
│
└── docs/                    # Documentation files
```

## Usage

### User Side

1. Visit the homepage to interact with the AI chatbot.
2. Type your question in the input field and press Enter or click the send button.
3. Receive an instant AI-generated response.
4. Continue the conversation with follow-up questions.

### Admin Side

1. Navigate to `/admin` to access the dashboard.
2. Add new FAQ entries with questions and answers.
3. Edit or delete existing FAQs.
4. Updates are reflected immediately in the chatbot's knowledge base.

## Deployment

This application can be easily deployed on platforms like Vercel, Netlify, or any other hosting service that supports Next.js applications.

```bash
# Build for production
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- The Deepseek team for providing the AI API
- Next.js team for the amazing framework
- All contributors and supporters of the project
