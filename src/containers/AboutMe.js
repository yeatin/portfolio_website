import enCv from "../pdf/Yeatin_CV.pdf";
import chCv from "../pdf/Yeatin_CV_ch.pdf";

const AboutMe = () => {
    const owStart = new Date("July 01, 2017 00:00:00");
    const rightNow = new Date();
    const timeIPlayedOw = rightNow - owStart;
    const yearsIPlayedOw = Math.floor(timeIPlayedOw / 1000 / 60 / 60 / 24 / 365);
    return (
        <div>
            <h1 className="tc f2-l f3 mt0-l mb5-l mt4 mb2"><span className="f1-l f2 fw1">| </span>02 : About Me<span className="f1-l f2 fw1"> |</span></h1>
            <div className="h-100" style={{ lineHeight: "2em" }}>
                <p className="ml7-l ml5 pt4 w-70">Having my own space on the web is truly a blessing - it gives me the freedom to be myself and write in a tone that's authentic to who I am. Unlike a rigid professional CV, I can share my thoughts, experiences, and passions more personally. If you happen to stumble upon my website and find we share similar interests, please don't hesitate to contact me. It doesn't have to be work-related. I would be thrilled to connect with you!</p>
                <div className="ml7-l ml5 w-70">
                    <h2>Passions</h2>
                    <ul>
                        <li>
                            <h3>Video Games</h3>
                            <ol>
                                <li className="f4">Overwatch<span className="f5">{` - My ultimate competitive FPS. It's been ${yearsIPlayedOw} years since I played the game.`}</span></li>
                                <li className="f4">Apex Legends<span className="f5"> - A fast-paced battle royale is always a good way to release yourself on your teammates in tremendously loud voices.</span></li>
                                <li className="f4">Assassin's Creed series<span className="f5"> - Should be the first 3A game I ever played, which put the seed of obsession for video games in little Yeatin. But I stoped playing after Syndicate. You know, the whole series changed, in a bad way (I think).</span></li>
                            </ol>
                        </li>
                    </ul>
                    <h2>Experience</h2>
                    <ul>
                        <li>I was planning to make a section for my work experience. But on second thought, I might just keep those solely in my CV down below. It's has everying you need to know there.</li>
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