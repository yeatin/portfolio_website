import img from "./avatar01.jpg";

const Avatar = () => {
    return (
        <img src={img} className="grow ml6-l ml2 mt6 mb2 br-100 pa1 ba b--white-70 h4 w4" alt="my face"></img>
    )
}

export { Avatar }