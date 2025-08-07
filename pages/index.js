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
    <Base title="Mitchell Zakocs" structuredData={{
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mitchell Zakocs",
      additionalName: "Mitch Zakocs",
      jobTitle: "Computer Science Student",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: ["Arizona State University"],
      },
      sameAs: [
        "https://github.com/mzakocs",
        "https://www.linkedin.com/in/mitchzakocs/"
      ]
    }}>
      <style jsx>{`
        p {
          font-size: 20px;
          text-align: center;
        }
      `}</style>
      <SplineBanner />
      <p>
        Security SWE at Apple and Arizona State University alum
        <br></br><br></br>
        Working with the SPEAR org on exploitation mitigations and hardening in kernel/embedded environments
      </p>
    </Base>
  );
};

export default Home;
