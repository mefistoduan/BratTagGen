import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// 修复参数“request”隐式具有“any”类型的问题，明确指定其类型为 NextRequest
export default function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};