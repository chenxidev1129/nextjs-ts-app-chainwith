import { NextResponse } from 'next/server';
import { mintingData } from '@/data/mintingData';

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url);
  const id = Number(searchParams.get('id'));
  const result = mintingData.find((item) => item.id === id);
  if (!result) throw new Error('THere is no item with id: ' + id);
  return NextResponse.json(result);
}