/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ url }) {
  const params = url.searchParams;

  const title = params.get('title');
  const fontSize = params.get('font-size');

  const data: any = {};
  if (title) data['title'] = title;
  if (fontSize) data['fontSize'] = fontSize;

  console.log(url.searchParams);
  return {
    status: 200,
    headers: {
      'access-control-allow-origin': '*'
    },
    body: data
  };
}