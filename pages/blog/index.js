import React from 'react';
import Head from "next/head";
import Link from 'next/link';
import Base from "../../components/Base";
import { formatDate } from '../../util/date';
import { getPosts } from '../../util/posts';

// Credit to one of the developers of Next.js, Timer, for the 
// blog utility code and style inspiration (https://github.com/Timer/blog)

export async function getStaticProps() {
    const posts = await getPosts();
    const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date));
    return { props: { posts: sortedPosts } };
}

const Blog = ({ posts }) => {
    return (
        <Base title="Blog">
            <style jsx>{`
                .post-list {
                    margin-left: 0;
                    list-style: none;
                }
                .post-list > li {
                    margin-bottom: 30px;
                    padding-left: 10px;
                    border-left: 3px solid var(--blue);
                }          
                .post-meta {
                    font-size: 14px;
                    color: var(--lightlightgrey);
                }        
                .post-link {
                    display: block;
                    font-size: 24px;
                    margin: 0px;
                }
            `}</style>
            <h1 className="post-list-heading">Posts</h1>
            <ul className="post-list">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <div className="sidebar">
                            <Link href={`/blog/${post.slug}`}>
                                <div style={{ cursor: 'pointer' }}>
                                    <span className="post-meta">
                                        {formatDate(post.date)}
                                    </span>
                                    <h3 className="post-link">
                                        <a>{post.title}</a>
                                    </h3>
                                </div>
                            </Link>
                            <span className="post-meta">
                                {"by " + post.author}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </Base>
    );
}

export default Blog;