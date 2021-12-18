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
        Computer Science Undergrad at Arizona State University interested in Software Engineering, Computer Security, and anything related.
        <br></br><br></br>
        Right now I'm working at the ASU SEFCOM Lab working on Computer Security research.
        I've also been studying for college, working on open-source projects, and looking for Fall 2022 Internships.
      </p>
    </Base>
  );
};

export default Home;
