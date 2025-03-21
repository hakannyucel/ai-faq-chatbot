/**
 * Custom error handler for API and service errors
 * @param error The error object
 * @returns Formatted error message
 */
export function handleError(error: unknown): string {
  if (error instanceof Error) {
    console.error('Error:', error.message);
    return error.message;
  }
  
  if (typeof error === 'string') {
    console.error('Error:', error);
    return error;
  }
  
  console.error('Unknown error:', error);
  return 'An unknown error occurred';
}

/**
 * Custom error class for API-related errors
 */
export class APIError extends Error {
  statusCode: number;
  
  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.name = 'APIError';
    this.statusCode = statusCode;
  }
} 