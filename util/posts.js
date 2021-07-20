import fs from "fs";
import matter from "gray-matter";
import { resolve, join } from "path";
const { readFile, readdir } = fs.promises;

// Grabs all of the blog posts and puts them into nice objects :)
export async function getPosts() {
  const postsDirectory = resolve(process.cwd(), "_posts");
  const postFiles = await readdir(postsDirectory);

  // Grab posts and parse markdown & slug
  let posts = await Promise.all(
    postFiles.map(async (fileName) => {
      const fullPath = join(postsDirectory, fileName);
      const markdown = await readFile(fullPath, "utf8");
      const {
        data: { slug, title, date, author },
        content,
      } = matter(markdown);

      if (typeof slug !== "string") {
        throw new Error(
          `Expected string slug but found: ${slug}.?`
        );
      }
      if (typeof title !== "string") {
        throw new Error(
          `Expected string title but found: ${title}.?`
        );
      }
      if (typeof date !== "string") {
        throw new Error(
          `Expected string date but found: ${date}.?`
        );
      }
      if (typeof author !== "string") {
        throw new Error(
          `Expected string author but found: ${author}.?`
        );
      }
      return { slug, title, date, author, content };
    })
  );

  // Sort posts by date
  posts = posts.sort((a, b) => (new Date(a.date).getTime() > new Date(b.date).getTime()))
  
  return posts;
}
