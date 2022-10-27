import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { redis } from '@/lib/redis';
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const time = Date.now();
  const timeStr = new Date(time).toLocaleDateString();
  const logData = {
    time: timeStr,
    url: request.url,
    ip: request.ip,
    geo: request.geo,
  };
  redis.lpush('api-request-log', logData);
  return response;
}

export const config = {
  matcher: ['/api/hello'],
};
