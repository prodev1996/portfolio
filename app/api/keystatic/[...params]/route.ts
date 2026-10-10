import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "@/keystatic.config";
import { editorEnabled } from "@/lib/editor";

const handler = makeRouteHandler({ config });

export function GET(request: Request) {
  if (!editorEnabled()) return new Response(null, { status: 404 });
  return handler.GET(request);
}

export function POST(request: Request) {
  if (!editorEnabled()) return new Response(null, { status: 404 });
  return handler.POST(request);
}
