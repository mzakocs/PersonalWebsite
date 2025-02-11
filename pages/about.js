import Base from "../components/Base";
import { getYearsSince } from "../util/date";
import { Document, Page } from "react-pdf";
import { useMediaQuery } from "react-responsive";

const About = () => {
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
                <h1>Skills</h1>
                <h3>Computer Security</h3>
                <ul>
                    <li>
                        Discovering security vulnerabilities and exploiting them in embedded, userspace, kernel, and web environments
                    </li>
                    <li>
                        Fuzzing and testing software with AFL++, libAFL, libFuzzer, libprotobuf-mutator, QEMU, sanitizers, and more
                    </li>
                    <li>
                        Reverse-engineering desktop applications and firmware with IDA Pro, Ghidra, gdb, QEMU, WinDBG, and dnSpy
                    </li>
                    <li>
                        Developing security tooling in Python and C using glibc, IDAPython, LLVM, Unicorn, Capstone, AFL++, Chrome DevTools API, and Win32 API
                    </li>
                    <li>
                        Defeating software obfuscation, protection, and packing methods (including virtualization-based obfuscation)
                    </li>
                    <li>
                        Analyzing PCB's, dumping firmware, transceiving wired communication protocols (USB, SPI, I2C, etc.), and wireless communication procotols (anything FM, OFDM, or PSK)
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
                        Managing data with PostgreSQL, MongoDB, Looker, REST API's, Apollo and GraphQL
                    </li>
                    <li>
                        Organizing large Git repositories with Jira tickets, pull requests, code reviews, and complex merges
                    </li>
                    <li>
                        Deploying projects with GitHub, Docker, Kubernetes, Vercel, AWS EC2, Vagrant, and the Google Cloud Platform
                    </li>
                    <li>
                        Quickly learning new technologies, frameworks, and libraries while adapting to the needs of a project
                    </li>
                </ul>
                <h1 id="projects">Projects</h1>
                Check out my projects on GitHub by clicking the icon in the footer or the link <a href="https://github.com/mzakocs">here</a>.
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
