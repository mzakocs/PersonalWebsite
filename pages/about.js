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
                I'm an undergraduate Computer Science student at Arizona State University interested in Computer Security and Software Engineering.
                <br /><br />
                I have over {getYearsSince(2017)} years of programming experience and a <a href="https://github.com/mzakocs">handful of personal projects</a>.
                {/* <br /><br />
                With computer languages, I have professional experience with C++, C, Python, x86, Java, JavaScript, HTML, and CSS.
                <br /><br />
                I'm also fairly familiar with C#, Julia, and Lua. I've worked directly with these languages in the past but only briefly.
                <br /><br />
                With real languages, I'm fluent in both English and Spanish. I'd love to learn Mandarin, German, Dutch, Russian, or Portuguese someday.
                <br /><br />
                I hope you enjoy the website. Feel free to take a look at the other sections below (or maybe the blog posts <a href="/blog">here</a>). */}
                <h1>Disciplines</h1>
                <h3>Software Security</h3>
                <ul>
                    <li>
                        Statically reverse-engineering binaries with IDA Pro, Ghidra, Binary Ninja, and dnSpy
                    </li>
                    <li>
                        Dynamically reverse-engineering binaries with gdb, QEMU, IDA Debugger, x64dbg, and WinDBG
                    </li>
                    <li>
                        Developing security tooling in Python and C++ using IDAPython, LLVM, Unicorn, Capstone, AFL++, LibAFL, Chrome DevTools API, and Win32 API
                    </li>
                    <li>
                        Discovering security vulnerabilities and exploiting them in embedded, userspace, kernel, and web environments
                    </li>
                    <li>
                        Defeating software obfuscation, protection, and packing methods (including virtualization-based obfuscation)
                    </li>
                    <li>
                        Analyzing network activity with Wireshark, Burp Suite, and nmap
                    </li>
                </ul>
                <h3>Software Engineering</h3>
                <ul>
                    <li>
                        Building scalable back-end applications & tools in Python, C, C++, Java, and JavaScript
                    </li>
                    <li>
                        Writing firmware for embedded systems using C, C++, FreeRTOS, Arduino, and MicroPython
                    </li>
                    <li>
                        Developing JavaScript SPA's with React, Next.js, Express.js, Sencha ExtJS, and more
                    </li>
                    <li>
                        Designing reactive front-end UI's with HTML, CSS, Material-UI, jQuery, and JavaScript
                    </li>
                    <li>
                        Managing data with PostgreSQL, MongoDB, Looker, REST API's, Apollo and GraphQL
                    </li>
                    <li>
                        Maintaining projects with Git, GitHub, Docker, Kubernetes, Vercel, AWS EC2, Vagrant, and the Google Cloud Platform
                    </li>
                    <li>
                        Quickly learning new technologies, frameworks, and libraries while adapting to the needs of a project
                    </li>
                </ul>
                {/* <h2>Projects</h2>
                Check out my projects on GitHub by clicking the icon in the footer or the link <a href="https://github.com/mzakocs">here</a>. */}
                <h1 id="resume">Resumé</h1>
                Below, you can find the latest copy of my resumé. You can also <a href="/resume.pdf" download="Resume Mitchell Zakocs.pdf">download it</a>.
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
                Discord: mzakocs
            </p>
        </Base>
    );
}

export default About;
