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
                h2 {
                    border-bottom: 2px solid currentColor;
                    line-height: 50px;
                    width: 100%;
                }
                h3 {
                    text-align: center;
                }
            `}</style>
            <p>
                <h2 id="summary">Summary</h2>
                Hello! I'm an undergrad Computer Science student at Arizona State University interested in Software Engineering and Software Security.
                <br /><br />
                I have over {getYearsSince(2017)} years of personal programming experience, {getYearsSince(2019)} years of professional programming experience, and a handful of nice projects that I love working on.
                <br /><br />
                Regarding computer languages, I'm heavily experienced in JavaScript, Java, Python, C/C++, x86, HTML, and CSS.
                <br /><br />
                I'm also familiar with Julia, C#, and Lua; I've worked directly with these languages before but I'm not a wizard with them.
                <br /><br />
                With real languages, I'm fluent in both English and Spanish (certified by the state of Arizona).
                I'm also studying Arabic in my spare time and I'd like to start learning Mandarin, German, Dutch, Russian, or Portuguese sometime in the foreseeable future.
                <br /><br />
                Apart from Computer Science, my other interests include cooking, graphic design, learning languages, writing, golfing, crafting/playing guitars, fixing/riding bicycles, tinkering with electronics, and making custom keyboards.
                <br /><br />
                I hope you enjoy my website. Feel free to take a look at the other sections below (or maybe one of my <a href="/blog">blog posts</a>).
                <h2>Disciplines</h2>
                <h3>Software Engineering</h3>
                <ul>
                    <li>
                        Developing JavaScript SPA's with React, Next.js, Express.js, Sencha ExtJS, and more
                    </li>
                    <li>
                        Designing reactive front-end UI's with HTML, CSS, Material-UI, and JavaScript
                    </li>
                    <li>
                        Building reliable & scalable back-end systems in Python and Java
                    </li>
                    <li>
                        Managing databases with PostgreSQL, MongoDB, REST API's, Apollo, and GraphQL
                    </li>
                    <li>
                        Programming firmware for micro-controllers in C and MicroPython
                    </li>
                    <li>
                        Maintaining large projects with Git, GitHub, Vercel, and the Google Cloud Platform
                    </li>
                    <li>
                        Learning quickly and adapting to the newest technologies, frameworks, and libraries
                    </li>
                </ul>
                <h3>Software Security</h3>
                <ul>
                    <li>
                        Statically reverse-engineering binaries using IDA Pro, Ghidra, and dnSpy
                    </li>
                    <li>
                        Dynamically reverse-engineering binaries using IDA Debug, x64dbg, OllyDbg, and gdb
                    </li>
                    <li>
                        Developing security-related applications & plugins using the Win32 API, Chrome DevTools API, and IDAPython
                    </li>
                    <li>
                        Discovering security exploits in both web and desktop environments
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
                <h2 id="resume">Résumé</h2>
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
                <h2 id="contact">Contact</h2>
                Email: <a href="mailto:mzakocs@gmail.com">mzakocs@gmail.com</a>
                <br />
                Discord: mzakocs#0696
            </p>
        </Base>
    );
}

export default About;
