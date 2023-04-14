import { NextResponse } from 'next/server';
import { nftData } from '@/data/nftData';

export async function GET() {
  return NextResponse.json(nftData);
}