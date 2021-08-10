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
                Hello! I'm an undergrad Computer Science student at Arizona State University interested in Software Engineering and Software Security.
                <br /><br />
                I have over {getYearsSince(2017)} years of personal programming experience, {getYearsSince(2019)} years of professional programming experience, and a handful of nice projects that I love working on.
                <br /><br />
                Regarding computer languages, I have professional experience with JavaScript, Java, Python, C, x86, HTML, and CSS.
                <br /><br />
                I'm also fairly familiar with C++, Julia, C#, and Lua. I've worked directly with these languages in the past but only briefly.
                <br /><br />
                With real languages, I'm fluent in both English and Spanish (certified by the state of Arizona).
                I'm also studying Arabic in my spare time and I'd like to start learning Mandarin, German, Dutch, Russian, or Portuguese sometime in the foreseeable future.
                {/* <br /><br />
                Apart from Computer Science, my other interests include cooking, graphic design, learning languages, writing, golfing, crafting/playing guitars, fixing/riding bicycles, tinkering with electronics, and making custom keyboards. */}
                <br /><br />
                I hope you enjoy the website. Feel free to take a look at the other sections below (or maybe the blog posts <a href="/blog">here</a>).
                <h1>Disciplines</h1>
                <h3>Software Engineering</h3>
                <ul>
                    <li>
                        Developing JavaScript SPA's with React, Next.js, Express.js, Sencha ExtJS, and more
                    </li>
                    <li>
                        Designing reactive front-end UI's with HTML, CSS, Material-UI, and JavaScript
                    </li>
                    <li>
                        Building reliable & scalable back-end systems in Java, JavaScript, and Python
                    </li>
                    <li>
                        Managing databases with PostgreSQL, MongoDB, and REST API's along with a solid understanding of Apollo and GraphQL
                    </li>
                    <li>
                        Creating firmware for micro-controllers using C and MicroPython
                    </li>
                    <li>
                        Maintaining projects with Git, GitHub, Vercel, and the Google Cloud Platform
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
                        Dynamically reverse-engineering binaries with IDA Debug, x64dbg, OllyDbg, and gdb
                    </li>
                    <li>
                        Developing security-related applications & plugins in Python and C++ using the Win32 API, Chrome DevTools API, and IDAPython
                    </li>
                    <li>
                        Discovering security exploits in both web and desktop applications
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
