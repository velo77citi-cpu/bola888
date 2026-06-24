Deno.serve(async () => {
  const html = await Deno.readTextFile("./index.html");
  return new Response(html, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
});
