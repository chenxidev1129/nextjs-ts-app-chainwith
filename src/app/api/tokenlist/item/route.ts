import { tokenData } from '@/data/tokenData';

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url);
  const id = Number(searchParams.get('id'));
  const result = tokenData.find((item) => item.id === id);
  if (!result) throw new Error('THere is no item with id: ' + id);
  return new Response(JSON.stringify(result));
}