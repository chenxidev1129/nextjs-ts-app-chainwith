import { NextResponse } from 'next/server';
import { historyData } from '@/data/historyData';

export async function GET() {
  return NextResponse.json(historyData);
}