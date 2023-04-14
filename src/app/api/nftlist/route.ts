import { nftData } from '@/data/nftData';

export async function GET() {
  return new Response(JSON.stringify(nftData));
}