const Navigation = ({ onRouteChange }) => {
    return (
        <nav className="mr5 flex justify-end items-baseline">
            <p
                className="f4 link hover-black black pb0 ph2 pointer silver"
                onClick={() => onRouteChange('home')}
            >
                00 : Home
            </p>
            <p className="f3 fw9 link hover-black black ph2 pointer black"> | </p>
            <p
                className="f4 link hover-black black pb0 ph2 pointer silver"
                onClick={() => onRouteChange('projects')}
            >
                01 : Projects
            </p>
            <p className="f3 fw9 link hover-black black ph2 pointer black"> | </p>
            <p
                className="f4 link hover-black black pb0 ph2 pointer silver"
                onClick={() => onRouteChange('aboutMe')}
            >
                02 : About Me
            </p>
            <p className="f3 fw9 link hover-black black ph2 pointer black"> | </p>
            <p
                className="f4 link hover-black black pb0 ph2 pointer silver"
                onClick={() => onRouteChange('contact')}
            >
                03 : Contact
            </p>
        </nav>
    )
}

export { Navigation };