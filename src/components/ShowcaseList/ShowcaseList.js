import { Showcase } from "../Showcase/Showcase";

const ShowcaseList = () => {
    const lst = [
        {
            key: 1,
            title: "Face Brain RWD",
            description: "With Clarify API, it detects human faces in the photos that users provide with image address.",
            githubLink: "https://github.com/yeatin/face_brain_rwd",
            launchLink: "https://face-brain-rwd.herokuapp.com/"
        },
        {
            key: 2,
            title: "CyberFriends",
            description: "A powerfull tool that you can easily find any robot in the list.",
            githubLink: "https://github.com/yeatin/The-Ultimate-PWA-Powered-CyberFriends",
            launchLink: "https://yeatin.github.io/The-Ultimate-PWA-Powered-CyberFriends/"
        },
        {
            key: 3,
            title: "Background Generator",
            description: "You can find the perfect combination of gradient colors here.",
            githubLink: "https://github.com/yeatin/whole-new-background-generator",
            launchLink: "https://yeatin.github.io/whole-new-background-generator/"
        },
        {
            key: 4,
            title: "Ricardo Ball",
            description: "Classic game Ping Pong on the web. Starring the world-famous dancer Ricardo. Only playable on PC web.",
            githubLink: "https://github.com/yeatin/ricarball",
            launchLink: "https://yeatin.github.io/ricarball/"
        },
        {
            key: 5,
            title: "Daily Chucknorris",
            description: "Random cool facts of the legend Chucknorris. Refresh the website to have a new one.",
            githubLink: "https://github.com/yeatin/dailychucknorris",
            launchLink: "https://yeatin.github.io/dailychucknorris/"
        }
    ]
    return (
        <article className='flex justify-center'>
            <div className="cf ph6 flex justify-center flex-wrap">
                {
                    lst.map(showcase => {
                        return (
                            <Showcase
                                key={showcase.key}
                                img={showcase.key}
                                title={showcase.title}
                                description={showcase.description}
                                githubLink={showcase.githubLink}
                                launchLink={showcase.launchLink}
                            />
                        )
                    })
                }
            </div>
        </article>
    )
}

export { ShowcaseList };