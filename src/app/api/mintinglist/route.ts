import { NextResponse } from 'next/server';
import { mintingData } from '@/data/mintingData';

export async function GET() {
  return NextResponse.json(mintingData);
}