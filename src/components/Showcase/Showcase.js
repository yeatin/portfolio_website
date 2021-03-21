import './ShowCase.css';

import img1 from './showcase01.jpg';
import img2 from './showcase03.jpg';
import img3 from './showcase04.jpg';
import img4 from './showcase05.jpg';
import img5 from './showcase06.jpg';

const Showcase = () => {
    return (
        <article className='flex justify-center mt2'>
            <div className="cf ph6 pt5 flex justify-center flex-wrap">
                <div className="fl w-33 pa3 box tc">
                    <img src={img1} alt='face brain rwd' />
                    <div className="card-container center">
                        <dl className="ma0 f6 lh-copy">
                            <dt className="clip">Title</dt>
                            <dd className="ml0 black truncate f3 black">Face Brain RWD</dd>
                            <dt className="clip">Artist</dt>
                            <dd className="ml0 gray w-100">With Clarify API, it detects human faces in the photos that users provide with image address.</dd>
                        </dl>
                        <div className="buttonContainer flex items-center justify-center mt2">
                            <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center mr3 tc br2 pa1" href="https://github.com/yeatin/face_brain_rwd" title="GitHub">
                                <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" /></svg>
                                <span className="f6 ml3 pr2">GitHub</span>
                            </a>
                            <a href="https://face-brain-rwd.herokuapp.com/" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex pa2 ba border-box br4">
                                <svg className="w-1" dataIcon="chevronLeft" viewBox="0 0 32 32" style={{ fill: "currentcolor" }}>
                                    <title>chevronLeft icon</title>
                                    <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
                                </svg>
                                <span className="pl1">Launge</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="fl w-33 pa3 box tc">
                    <img src={img2} alt='cyberfriends' />
                    <div className="card-container center">
                        <dl className="ma0 f6 lh-copy">
                            <dt className="clip">Title</dt>
                            <dd className="ml0 black truncate f3 black">CyberFriends</dd>
                            <dt className="clip">Artist</dt>
                            <dd className="ml0 gray w-100">A powerfull tool that you can easily find any robot in the list.</dd>
                        </dl>
                        <div className="buttonContainer flex items-center justify-center mt2">
                            <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center mr3 tc br2 pa1" href="https://github.com/yeatin/The-Ultimate-PWA-Powered-CyberFriends" title="GitHub">
                                <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" /></svg>
                                <span className="f6 ml3 pr2">GitHub</span>
                            </a>
                            <a href="https://yeatin.github.io/The-Ultimate-PWA-Powered-CyberFriends/" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex pa2 ba border-box br4">
                                <svg className="w-1" dataIcon="chevronLeft" viewBox="0 0 32 32" style={{ fill: "currentcolor" }}>
                                    <title>chevronLeft icon</title>
                                    <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
                                </svg>
                                <span className="pl1">Launge</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="fl w-33 pa3 box tc">
                    <img src={img3} alt='background generator' />
                    <div className="card-container center">
                        <dl className="ma0 f6 lh-copy">
                            <dt className="clip">Title</dt>
                            <dd className="ml0 black truncate f3 black">Background Generator</dd>
                            <dt className="clip">Artist</dt>
                            <dd className="ml0 gray w-100">You can find the perfect combination of gradient colors here.</dd>
                        </dl>
                        <div className="buttonContainer flex items-center justify-center mt2">
                            <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center mr3 tc br2 pa1" href="https://github.com/yeatin/whole-new-background-generator" title="GitHub">
                                <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" /></svg>
                                <span className="f6 ml3 pr2">GitHub</span>
                            </a>
                            <a href="https://yeatin.github.io/whole-new-background-generator/" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex pa2 ba border-box br4">
                                <svg className="w-1" dataIcon="chevronLeft" viewBox="0 0 32 32" style={{ fill: "currentcolor" }}>
                                    <title>chevronLeft icon</title>
                                    <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
                                </svg>
                                <span className="pl1">Launge</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="fl w-33 pa3 box tc">
                    <img src={img4} alt='ricardo ball' />
                    <div className="card-container center">
                        <dl className="ma0 f6 lh-copy">
                            <dt className="clip">Title</dt>
                            <dd className="ml0 black truncate f3 black">Ricardo Ball</dd>
                            <dt className="clip">Artist</dt>
                            <dd className="ml0 gray w-100">Classic game Ping Pong on the web. The unique of the game is that the theme is based on the world-famous dancer Ricardo. Only playable on PC web.</dd>
                        </dl>
                        <div className="buttonContainer flex items-center justify-center mt2">
                            <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center mr3 tc br2 pa1" href="https://github.com/yeatin/ricarball" title="GitHub">
                                <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" /></svg>
                                <span className="f6 ml3 pr2">GitHub</span>
                            </a>
                            <a href="https://yeatin.github.io/ricarball/" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex pa2 ba border-box br4">
                                <svg className="w-1" dataIcon="chevronLeft" viewBox="0 0 32 32" style={{ fill: "currentcolor" }}>
                                    <title>chevronLeft icon</title>
                                    <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
                                </svg>
                                <span className="pl1">Launge</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="fl w-33 pa3 box tc">
                    <img src={img5} alt='ricardo ball' />
                    <div className="card-container center">
                        <dl className="ma0 f6 lh-copy">
                            <dt className="clip">Title</dt>
                            <dd className="ml0 black truncate f3 black">Daily Chucknorris</dd>
                            <dt className="clip">Artist</dt>
                            <dd className="ml0 gray w-100">Random cool facts of the legend Chucknorris. Refresh the website to have a new one.</dd>
                        </dl>
                        <div className="buttonContainer flex items-center justify-center mt2">
                            <a className="no-underline near-white bg-animate bg-near-black hover-bg-gray inline-flex items-center mr3 tc br2 pa1" href="https://github.com/yeatin/dailychucknorris" title="GitHub">
                                <svg className="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" /></svg>
                                <span className="f6 ml3 pr2">GitHub</span>
                            </a>
                            <a href="https://yeatin.github.io/dailychucknorris/" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex pa2 ba border-box br4">
                                <svg className="w-1" dataIcon="chevronLeft" viewBox="0 0 32 32" style={{ fill: "currentcolor" }}>
                                    <title>chevronLeft icon</title>
                                    <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
                                </svg>
                                <span className="pl1">Launge</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export { Showcase };