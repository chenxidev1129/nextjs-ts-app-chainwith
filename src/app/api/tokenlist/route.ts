import { NextResponse } from 'next/server';
import { tokenData } from '@/data/tokenData';

export async function GET() {
  return NextResponse.json(tokenData);
}