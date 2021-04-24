import enCv from "../pdf/Yeatin_CV.pdf";
import chCv from "../pdf/Yeatin_CV_ch.pdf";

const AboutMe = () => {
    return (
        <div>
            <h1 className="tc f2-l f3 mt0-l mb5-l mt4 mb2"><span className="f1-l f2 fw1">| </span>02 : About Me<span className="f1-l f2 fw1"> |</span></h1>
            <div className="h-100" style={{ lineHeight: "2em" }}>
                <p className="ml7-l ml5 pt4 w-70">Being a Self-learning web developer, the motives pushing me through is the thrills I get from technical breakthroughs. Cultural gaps should not be obstacles but appreciatable features.</p>
                <div className="ml7-l ml5 w-70">
                    <h2>Skills</h2>
                    <ul>
                        <li>React.js</li>
                        <li>Redux</li>
                        <li>ECMAScript 6</li>
                        <li>API</li>
                        <li>Photoshop</li>
                        <li>Illustrator</li>
                        <li>VEGAS 16</li>
                    </ul>
                    <h2>Experience</h2>
                    <ul>
                        <li>Deputy President of Department Student Council</li>
                    </ul>
                </div>
            </div>
            <div className="tc pb3">
                <h1 className="mb1">CV</h1>
                <a href={enCv}
                    className="no-underline"
                    download>
                    <h3 className="center dim w4 ba b--black-30 br3 mt0 mb1 pa0 pt1 pb1">DOWNLOAD</h3>
                </a>
                <iframe title="en cv"
                    src={`${enCv}#toolbar=0`}
                    style={{
                        borderBottom: "4px solid grey",
                        borderTop: "4px solid grey"
                    }}
                    frameborder="0"
                    width="51%"
                    height="500px"
                >
                    English CV
                        </iframe>
                <h1 className="mb1">Chinese CV</h1>
                <a href={chCv}
                    className="no-underline"
                    download>
                    <h3 className="center dim w4 ba b--black-30 br3 mt0 mb1 pa0 pt1 pb1">DOWNLOAD</h3>
                </a>
                <iframe title="ch cv"
                    src={`${chCv}#toolbar=0`}
                    style={{
                        borderBottom: "4px solid grey",
                        borderTop: "4px solid grey"
                    }}
                    frameborder="0"
                    width="51%"
                    height="500px"
                >
                    Chinese CV
                        </iframe>
            </div>
        </div>
    )
}

export { AboutMe };