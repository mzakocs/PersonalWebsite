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
  const { title, date, content } = post;
  const html = markdownToHtml(content);
  return {
    props: { slug, title, date, html },
  };
}

export default function Post({ slug, title, date, html }) {
  return (
    <Base title={title}>
      <article>
        <header>
          <Head>
            <link
              href="/themes/vs2015.css"
              rel="stylesheet"
            ></link>
          </Head>
          <h1 itemProp="name headline">{title}</h1>
          <p
            style={{ textAlign: "center", fontSize: "1em", lineHeight: "1", marginBottom: "1em" }}
          >
            <time dateTime={date} itemProp="datePublished">
              {formatDate(date)}
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
