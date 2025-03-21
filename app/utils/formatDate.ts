/**
 * Formats a date for display in the chat interface
 * @param date The date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date): string {
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Formats a date with full date and time information
 * @param date The date to format
 * @returns Formatted date and time string
 */
export function formatFullDate(date: Date): string {
  return date.toLocaleString([], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
} 