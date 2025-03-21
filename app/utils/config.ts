/**
 * Configuration for the application
 */

// Deepseek API configuration
export const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY || '';
export const DEEPSEEK_API_URL = process.env.DEEPSEEK_API_URL || 'https://api.deepseek.com/v1';

// Site configuration
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'AI FAQ Chatbot';

// Admin configuration
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin';

/**
 * Validates that required environment variables are set
 * @returns Object with validation results
 */
export function validateConfig(): { isValid: boolean; missingVars: string[] } {
  const requiredVars = ['DEEPSEEK_API_KEY'];
  const missingVars = requiredVars.filter(
    (varName) => !process.env[varName]
  );
  
  return {
    isValid: missingVars.length === 0,
    missingVars,
  };
} 