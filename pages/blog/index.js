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
    // Sorts posts by date
    const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date));
    // Removes posts if they aren't to their release date yet
    const filteredPosts = sortedPosts.filter((value) => (new Date(value.date).getTime() < new Date().getTime()))
    return { props: { posts: filteredPosts } };
}

const shortenNameString = (nameString) => {
    // Turns this: "Mitchell Zakocs, John Doe" into this: "Mitchell, John"
    let commaSplit = nameString.split(", ");
    let newName = "";
    commaSplit.forEach((name, i) => {
        newName += name.split(" ")[0]
        if (i != (commaSplit.length - 1)) {
            newName += ", "
        }
    })
    return newName;
}

const Blog = ({ posts }) => {
    return (
        <Base title="Blog" blog={true}>
            <style jsx>{`
                .post-list {
                    padding-left: 5vw;
                    list-style: none;
                }
                .post-list > li {
                    margin-bottom: 30px;
                    padding-left: 10px;
                    border-left: 3px solid var(--blue);
                }          
                .post-meta {
                    font-size: 14px;
                    color: var(--lightgrey);
                }        
                .post-link {
                    display: block;
                    font-size: 24px;
                    margin: 0px;
                }
                .post-list-heading {
                    border-bottom: none;
                    text-align: center;
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
                                {"by " + shortenNameString(post.author)}
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </Base>
    );
}

export default Blog;