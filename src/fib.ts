// src/fib.ts
// util function that computes the fibonacci numbers

/**
 * Computes the n-th Fibonacci number.
 * @param n - The index of the Fibonacci sequence (must be a non-negative integer)
 * @returns The n-th Fibonacci number, or -1 if n is negative
 */

export function fibonacci(n: number): number {
  
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}
