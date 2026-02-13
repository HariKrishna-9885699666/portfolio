const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5; // 5 emails per 15 minutes per IP

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.lastReset > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true; // allowed
  }

  if (record.count >= MAX_REQUESTS) {
    return false; // blocked
  }

  record.count++;
  return true; // allowed
}
