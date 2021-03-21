import Typewriter from 'typewriter-effect';
const Title = () => {

    return (
        <Typewriter
            options={{
                wrapperClassName: "ml7 underline f1 Typewriter__wrapper white",
                cursorClassName: "ml7 f1 Typewriter__cursor white",
                loop: true,
                delay: 35,
                deleteSpeed: 15
            }}
            onInit={(typewriter) => {
                typewriter
                    .typeString('Hello, I am ')
                    .typeString('Yeatin Huang')
                    .pauseFor(1500)
                    .deleteChars(12)
                    .typeString('a Web Developer')
                    .pauseFor(1500)
                    .deleteChars(13)
                    .typeString('Looking for a job')
                    .pauseFor(1500)
                    .deleteChars(17)
                    .start();
            }}
        />
    )
}

export { Title };