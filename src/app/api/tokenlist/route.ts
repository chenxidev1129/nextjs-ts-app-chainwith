import { tokenData } from '@/data/tokenData';

export async function GET() {
  return new Response(JSON.stringify(tokenData));
}