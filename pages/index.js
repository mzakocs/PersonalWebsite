import Base from "../components/Base";
import SplineBanner from "../components/SplineBanner";
import { getPosts } from "../util/posts";

// Gets the posts statically for the carousel
export async function getStaticProps() {
  const posts = await getPosts();
  const sortedPosts = posts.sort((x, y) => y.date.localeCompare(x.date));
  return { props: { posts: sortedPosts } };
}

const Home = ({ posts }) => {
  return (
    <Base title="Home">
      <style jsx>{`
        p {
          font-size: 20px;
          text-align: center;
        }
        h2 {
          border-bottom: 2px solid currentColor;
          line-height: 50px;
          width: 100%;
          text-align: center;
        }
      `}</style>
      <SplineBanner />
      <p>
        Computer Science Student at Arizona State University who's obsessed with Software Engineering, Computer Security, and everything in between. 
        <br></br><br></br>
        Currently working as a Research Intern at the ASU SEFCOM Lab researching Software Virtualization.
      </p>
    </Base>
  );
};

export default Home;
