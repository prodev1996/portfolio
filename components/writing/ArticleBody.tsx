import React from "react";
import Markdoc, { type Node } from "@markdoc/markdoc";
import { isSafeLink } from "@/lib/writing-shared";
import CopyButton from "./CopyButton";

function CodeBlock({
  content,
  language,
}: {
  content: string;
  language?: string;
}) {
  return (
    <div className="article-code">
      <div className="article-code-bar">
        <span>{language || "Code"}</span>
        <CopyButton text={content} label="Copy code" />
      </div>
      <pre tabIndex={0} aria-label={`${language || "Code"} example`}>
        <code>{content}</code>
      </pre>
    </div>
  );
}

function ArticleImage({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title?: string;
}) {
  if (!src.startsWith("/writing/") && !src.startsWith("https://")) return null;
  // Inline uploads retain their original proportions and load only as readers approach them.
  return (
    <figure>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt || ""} loading="lazy" decoding="async" />
      {title && <figcaption>{title}</figcaption>}
    </figure>
  );
}

function ArticleLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  if (!isSafeLink(href)) return <span>{children}</span>;
  return (
    <a href={href} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {children}
    </a>
  );
}

export default function ArticleBody({ node }: { node: Node }) {
  const content = Markdoc.transform(node, {
    nodes: {
      fence: {
        render: "CodeBlock",
        attributes: { content: { type: String }, language: { type: String } },
      },
      image: {
        render: "ArticleImage",
        attributes: {
          src: { type: String },
          alt: { type: String },
          title: { type: String },
        },
      },
      link: { render: "ArticleLink", attributes: { href: { type: String } } },
    },
  });
  return (
    <div className="article-prose">
      {Markdoc.renderers.react(content, React, {
        components: { CodeBlock, ArticleImage, ArticleLink },
      })}
    </div>
  );
}
