import Base from "../components/Base";
import { getYearsSince } from "../util/date";
import { Document, Page } from "react-pdf";
import { useMediaQuery } from "react-responsive";

const About = () => {
    // Screen-size media query for Spline animation
    const isDesktop = useMediaQuery({
        query: '(min-device-width: 768px)'
    });
    return (
        <Base title="About">
            <style jsx>{`
                h1 {
                    line-height: 50px;
                    width: 100%;
                    color: white;
                }
                h3 {
                    text-align: center;
                }
            `}</style>
            <p>
                <h1 id="summary">Summary</h1>
                I'm an undergrad Computer Science student at Arizona State University interested in Software Engineering and Software Security.
                <br /><br />
                I have over {getYearsSince(2017)} years of programming experience and a <a href="https://github.com/mzakocs">handful of personal projects</a>.
                <br /><br />
                With computer languages, I have professional experience with JavaScript, Java, Python, C++, C, x86, HTML, and CSS.
                <br /><br />
                I'm also fairly familiar with C#, Julia, and Lua. I've worked directly with these languages in the past but only briefly.
                <br /><br />
                With real languages, I'm fluent in both English and Spanish. I'd love to learn Mandarin, German, Dutch, Russian, or Portuguese someday.
                <br /><br />
                I hope you enjoy the website. Feel free to take a look at the other sections below (or maybe the blog posts <a href="/blog">here</a>).
                <h1>Disciplines</h1>
                <h3>Software Engineering</h3>
                <ul>
                    <li>
                        Building scalable back-end applications & tools in Python, C, C++, Java, and JavaScript
                    </li>
                    <li>
                        Developing JavaScript SPA's with React, Next.js, Express.js, Sencha ExtJS, and more
                    </li>
                    <li>
                        Designing reactive front-end UI's with HTML, CSS, Material-UI, jQuery, and JavaScript
                    </li>
                    <li>
                        Managing data with PostgreSQL, MongoDB, Looker, and REST API's along with a decent understanding of Apollo and GraphQL
                    </li>
                    <li>
                        Creating firmware for micro-controllers using C, C++, and MicroPython
                    </li>
                    <li>
                        Maintaining projects with Git, GitHub, Vercel, Vagrant, AWS EC2, Kubernetes, and the Google Cloud Platform
                    </li>
                    <li>
                        Learning new technologies, frameworks, and libraries while adapting to the needs of a project
                    </li>
                </ul>
                <h3>Software Security</h3>
                <ul>
                    <li>
                        Statically reverse-engineering binaries with IDA Pro, Ghidra, and dnSpy
                    </li>
                    <li>
                        Dynamically reverse-engineering binaries with IDA Debug, x64dbg, WinDBG, and gdb
                    </li>
                    <li>
                        Developing security-related applications & plugins in Python and C++ using the Win32 API, Chrome DevTools API, and IDAPython
                    </li>
                    <li>
                        Discovering security vulnerabilities and exploiting them in both web and desktop environments
                    </li>
                    <li>
                        Analyzing network activity with Wireshark, Burp Suite, and nmap
                    </li>
                    <li>
                        Studying software obfuscation & protection methods (including virtualization-based obfuscation)
                    </li>
                </ul>
                {/* <h2>Projects</h2>
                Check out my projects on GitHub by clicking the icon in the footer or the link <a href="https://github.com/mzakocs">here</a>. */}
                <h1 id="resume">Résumé</h1>
                Below, you can find the latest copy of my résumé. You can also <a href="/resume.pdf" download="Resume Mitchell Zakocs.pdf">download it</a>.
                <br /> <br />
                <div className="pdfContainer">
                    <Document file={{ url: "/resume.pdf" }} renderMode="canvas">
                        <Page pageNumber={1}
                            customTextRenderer={() => { return (<mark>{""}</mark>) }}
                            width={isDesktop ? 600 : 300}
                            renderAnnotationLayer={false}
                        />
                    </Document>
                </div>
                <h1 id="contact">Contact</h1>
                Email: <a href="mailto:mzakocs@gmail.com">mzakocs@gmail.com</a>
                <br />
                Discord: mzakocs#0696
            </p>
        </Base>
    );
}

export default About;
