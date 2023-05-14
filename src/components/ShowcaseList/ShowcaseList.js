import { Showcase } from "../Showcase/Showcase";

const ShowcaseList = () => {
    const lst = [
        {
            key: 1,
            title: "Face Brain RWD",
            description: "This project is a full-stack application that includes frontend, backend, and database. Create an account to detect human faces in photos.",
            githubLink: "https://github.com/yeatin/face_brain_rwd",
            launchLink: "https://yeatin.github.io/face_brain_rwd/"
        },
        {
            key: 2,
            title: "Ricardo Ball",
            description: "Classic Ping Pong videogame. Starring the world-famous dancer Ricardo. Only playable on PC web.",
            githubLink: "https://github.com/yeatin/ricarball",
            launchLink: "https://yeatin.github.io/ricarball/"
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
            title: "CyberFriends",
            description: "A tool that you can easily find any robot in the list.",
            githubLink: "https://github.com/yeatin/The-Ultimate-PWA-Powered-CyberFriends",
            launchLink: "https://yeatin.github.io/The-Ultimate-PWA-Powered-CyberFriends/"
        },
        {
            key: 5,
            title: "Quote Generator",
            description: "Quote Generator is capable of generating random quotes, specifying the person who created the quote, and tweeting the quote you like.",
            githubLink: "https://github.com/yeatin/quote-generator",
            launchLink: "https://yeatin.github.io/quote-generator/"
        }
    ]
    return (
        <article className='flex justify-center'>
            <div className="ph5-l ph4 flex justify-center flex-wrap">
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