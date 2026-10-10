import { getPublishedArticles } from "@/lib/writing";

export const dynamic = "force-static";

function xml(value: string) {
  return value.replace(
    /[<>&"']/g,
    (character) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      })[character]!,
  );
}

export async function GET() {
  const articles = await getPublishedArticles();
  const items = articles
    .map(
      (article) =>
        `<item><title>${xml(article.title)}</title><link>https://www.rajivbhandari.com/writing/${article.slug}</link><guid isPermaLink="true">https://www.rajivbhandari.com/writing/${article.slug}</guid><description>${xml(article.description)}</description><pubDate>${new Date(`${article.publishedAt}T00:00:00Z`).toUTCString()}</pubDate></item>`,
    )
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Rajiv Bhandari / Writing</title><link>https://www.rajivbhandari.com/writing</link><description>New chips, AI developments and risks, devices, and the evolution of technology.</description><language>en-au</language><atom:link href="https://www.rajivbhandari.com/writing/feed.xml" rel="self" type="application/rss+xml"/>${items}</channel></rss>`,
    { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } },
  );
}
