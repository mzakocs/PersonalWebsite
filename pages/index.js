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
        Computer Science Undergrad at Arizona State University who's obsessed with Software Engineering, Computer Security, and anything related.
        <br></br><br></br>
        I'm currently interning at Culdesac as a Business Operations Intern. I utilize SQL and Looker to provide expressive data for the first from-scratch walkable neighborhood in the US.
        I've also been studying for college, working on open-source projects, and looking for Fall 2022 Internships.
      </p>
    </Base>
  );
};

export default Home;
