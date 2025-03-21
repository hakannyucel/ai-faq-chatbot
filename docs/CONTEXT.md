# AI Chatbot for FAQs

## Project Goal

This project aims to develop an AI chatbot application to answer frequently asked questions. Users can interact with the chatbot, ask questions, and the chatbot will provide meaningful and accurate responses using AI (Deepseek API). The application will offer a user-friendly interface to facilitate natural language interaction with the chatbot.

The project aims to enhance user experience and provide answers to frequently asked questions both internally and externally for companies.

## Technology Stack

The main technologies used in this project are:

- **Next.js**: A React-based framework with SEO-friendly and server-side rendering (SSR) support. The application pages and routing are handled here.
- **React.js**: A JavaScript library used to build the user interface.
- **Deepseek API**: An AI service provider that uses natural language processing (NLP) to analyze text. With Deepseek, the chatbot provides meaningful answers to user queries.
- **CSS**: A styling language used to manage the application styles.
- **Node.js**: The JavaScript runtime environment used for server-side operations and API calls.

## Project Structure

- **Chatbot UI**: An interactive interface where users can type their questions and receive responses from the chatbot.
- **Chatbot API**: A backend service that interacts with the Deepseek API to provide answers to user queries.
- **Message History**: A system that stores and displays the history of messages exchanged between the user and the chatbot.
- **Answer Analysis**: The Deepseek API is used to generate meaningful answers to user queries by analyzing the text.

## Requirements

### 1. User Side
- **User Access**: Users can interact with the chatbot without needing an account, simply by using the interface to ask questions.
- **Send and Receive Messages**: Users type their questions in a text box and send them to the chatbot, receiving instant answers.
- **Interactive Interface**: Besides answers, the chatbot can offer interesting information and suggestions to enhance engagement.

### 2. Admin Side
- **FAQ Management**: Administrators can manage, add, or remove entries in the FAQ database.
- **Chatbot Training**: The Deepseek AI model can be trained and improved with data provided by administrators.
- **Data Analysis**: User interactions with the chatbot can be analyzed to improve the AI's performance.

### 3. Deepseek API
- **Natural Language Processing**: The Deepseek API processes user questions and returns meaningful and accurate answers.
- **Integrated AI**: The AI analyzes and responds to user queries. This process is entirely managed by the AI and continually improves.

## User Flow

1. **Start Screen**: The user lands on the application's homepage, where they are presented with a chatbot interface. The user is expected to type their first message.
2. **Send Question**: The user types a question and submits it.
3. **Receive Answer**: The chatbot uses the Deepseek API to generate and send an answer to the user.
4. **Interaction**: The user continues interacting with the chatbot by asking new questions, and the chatbot provides new answers.
5. **End Session**: The user finishes the conversation, and the interaction with the chatbot ends.

## Features

- **Real-Time Responses**: Instant and accurate responses are provided to user queries through the Deepseek API.
- **Comprehensive FAQ Database**: The chatbot should have a large FAQ database covering common questions.
- **User Message History**: Users can view their past conversations and revisit previous messages.
- **Admin Panel**: Admins can update the chatbot's answers and the FAQ, and add new questions when needed.

## Tasks to Be Done

- **UI/UX Design**: Create a user-friendly chatbot design with an easy-to-use interface.
- **Deepseek API Integration**: Properly integrate the Deepseek API to ensure accurate responses to user queries.
- **Backend Setup**: Set up a backend system to receive API responses and deliver them to the user in a suitable format.
- **Database Management**: Set up a database for managing FAQs and storing user interactions.

## Setup

1. **Node.js and npm**: The project should be run on Node.js. Install it from [Node.js](https://nodejs.org/).
2. **Deepseek API Key**: You will need an API key to use the Deepseek API. Register on Deepseek's website to get the API key.
3. **Running the Project**:
   ```bash
   git clone https://github.com/hakannyucel/ai-faq-chatbot.git
   cd ai-faq-chatbot
   npm install
   npm run dev