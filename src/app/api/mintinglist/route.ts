import { mintingData } from '@/data/mintingData';

export async function GET() {
  return new Response(JSON.stringify(mintingData));
}