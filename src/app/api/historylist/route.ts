import { historyData } from '@/data/historyData';

export async function GET() {
  return new Response(JSON.stringify(historyData));
}