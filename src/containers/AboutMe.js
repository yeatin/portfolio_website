const AboutMe = () => {
    return (
        <div className="h-100" style={{ lineHeight: "2em" }}>
            <h1 className="tc f2-l f3 mt0-l mb5-l mt4 mb2"><span className="f1-l f2 fw1">| </span>02 : About Me<span className="f1-l f2 fw1"> |</span></h1>
            <p className="ml7-l ml5 pt4 w-60">Being a Self-learning web developer, the motives pushing me through is the thrills I get from technical breakthroughs. Cultural gaps should not be obstacles but appreciatable features.</p>
            <div className="ml7-l ml5 w-50">
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
    )
}

export { AboutMe };