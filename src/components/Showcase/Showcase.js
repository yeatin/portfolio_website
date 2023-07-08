import './Showcase.css';

const Showcase = ({ img, title, description, githubLink, launchLink }) => {
    console.log("img", img);
    return (
        <div className="w-33-l w-100 ph3-l ph0 box tc mt0-l mt5">
            <img className="w-100" src={require(`./${img}.jpg`)} alt={title} />
            <div className="center card-container">
                <dl className="tl ml4-l ml3 f6-l f7 lh-copy mb0">
                    <dd className="ml0 black truncate f3-l f6 fw6 black">{title}</dd>
                    <dd className="ml0 gray w-90">{description}</dd>
                </dl>
                <div className="flex justify-center items-center mt3">
                    <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center tc br2 pa1 mh2" href={githubLink} title="GitHub" target="_blank" rel="noreferrer">
                        <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" /></svg>
                        <span className="f6 ml3 pr2">GitHub</span>
                    </a>
                    <a href={launchLink} className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex pa2 ba mh2" target="_blank" rel="noreferrer">
                        <p className="tc pa0 ma0">Launch</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export { Showcase };