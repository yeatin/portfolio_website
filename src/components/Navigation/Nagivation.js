const Navigation = ({ onRouteChange, route }) => {
    return (
        <nav className="mr5 flex justify-end items-baseline">
            <p
                className={route === 'home' ? (
                    "f4 fw9 link hover-black black pb0 ph2 pointer white mb0"
                ) : (
                    "f4 link hover-black black pb0 ph2 pointer silver mb0"
                )
                }
                onClick={() => onRouteChange('home')}
            >
                00 : Home
            </p>
            <p className="f3 fw9 link hover-black black ph2 pointer gray mb0"> | </p>
            <p
                className={route === 'projects' ? (
                    "f4 fw9 link hover-black black pb0 ph2 pointer black mb0"
                ) : (
                    "f4 link hover-black black pb0 ph2 pointer silver mb0"
                )
                }
                onClick={() => onRouteChange('projects')}
            >
                01 : Projects
            </p>
            <p className="f3 fw9 link hover-black black ph2 pointer gray mb0"> | </p>
            <p
                className={route === 'aboutMe' ? (
                    "f4 fw9 link hover-black black pb0 ph2 pointer black mb0"
                ) : (
                    "f4 link hover-black black pb0 ph2 pointer silver mb0"
                )
                }
                onClick={() => onRouteChange('aboutMe')}
            >
                02 : About Me
            </p>
            <p className="f3 fw9 link hover-black black ph2 pointer gray mb0"> | </p>
            <p
                className={route === 'contact' ? (
                    "f4 fw9 link hover-black black pb0 ph2 pointer black mb0"
                ) : (
                    "f4 link hover-black black pb0 ph2 pointer silver mb0"
                )
                }
                onClick={() => onRouteChange('contact')}
            >
                03 : Contact
            </p>
        </nav>
    )
}

export { Navigation };