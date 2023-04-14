import { NextResponse } from 'next/server';
import { historyData } from '@/data/historyData';

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url);
  const id = Number(searchParams.get('id'));
  const result = historyData.find((item) => item.id === id);
  if (!result) throw new Error('THere is no item with id: ' + id);
  return NextResponse.json(result);
}