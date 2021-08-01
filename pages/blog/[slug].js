import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Base from "../../components/Base";
import { formatDate } from "../../util/date";
import { getPosts } from "../../util/posts";
import { markdownToHtml } from "../../util/markdown";
import hljs from "highlight.js";

export const getStaticPaths = async () => ({
  paths: (await getPosts()).map((p) => `/blog/${p.slug}`),
  fallback: false,
});

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = (await getPosts()).find((p) => p.slug === slug);
  if (!post) return;
  const { title, date, content, author } = post;
  const html = markdownToHtml(content);
  return {
    props: { slug, title, date, author, html },
  };
}

export default function Post({ slug, title, date, author, html }) {
  useEffect(() => {
    // Initialize highlight.js
    hljs.highlightAll()
  }, []);
  return (
    <Base title={title} blog={true} structuredData={{
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": slug
      },
      "headline": "title",
      "author": {
        "@type": "Person",
        "name": author
      },
      "datePublished": formatDate(date)
    }}>
      <article>
        <header>
          <Head>
            <link
              href="/themes/vs2015.css"
              rel="stylesheet"
            ></link>
          </Head>
          <h1 itemProp="name headline" className="blogTitle">{title}</h1>
          <p
            style={{ textAlign: "center", fontSize: "1em", lineHeight: "1", marginBottom: "1em" }}
          >
            <time dateTime={date} itemProp="datePublished">
              {`${author} • ${formatDate(date)}`}
            </time>
          </p>
        </header>
        <div
          className="main-content"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <br />
        <Link href="/blog">
          <a className="green-link">{"<<"} Back to blog</a>
        </Link>
      </article>
    </Base>
  );
}
