// src/fibRoute.ts
import { fibonacci } from "./fib";

/**
 * Endpoint for querying Fibonacci numbers
 * @param req - Request object with a `params` property containing `num`
 * @param res - Response object with a `send` method
 */
type Request = {
  params: { num: string };
};

type Response = {
  send: (message: string) => void;
};

export default (req: Request, res: Response) => {
  const { num } = req.params;

  const parsedNum = parseInt(num, 10);

  if (isNaN(parsedNum)) {
    return res.send(`Invalid number: ${num}`);
  }

  const fibN = fibonacci(parsedNum);
  let result = `fibonacci(${parsedNum}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  }

  res.send(result);
};
