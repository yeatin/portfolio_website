const Navigation = ({ onRouteChange, route }) => {
    return (
        <nav className="mr5-l flex flex-wrap justify-end-l justify-center items-baseline">
            <p
                className={route === 'home' ? (
                    "f4-l f7 fw9 link hover-black black ph2-l pr1 pl0 pointer white mb0"
                ) : (
                    "f4-l f7 link hover-black black ph2-l pr1 pl0 pointer silver mb0"
                )
                }
                onClick={() => onRouteChange('home')}
            >
                00 : Home
            </p>
            <p className="f3-l f6 fw9 link hover-black blph2-l pr1 pl0 pointer gray mb0"> | </p>
            <p
                className={route === 'projects' ? (
                    "f4-l f7 fw9 link hover-black black ph2-l pr1 pl0 pointer black mb0"
                ) : (
                    "f4-l f7 link hover-black black ph2-l pr1 pl0 pointer silver mb0"
                )
                }
                onClick={() => onRouteChange('projects')}
            >
                01 : Projects
            </p>
            <p className="f3-l f6 fw9 link hover-black blph2-l pr1 pl0 pointer gray mb0"> | </p>
            <p
                className={route === 'aboutMe' ? (
                    "f4-l f7 fw9 link hover-black black ph2-l pr1 pl0 pointer black mb0"
                ) : (
                    "f4-l f7 link hover-black black ph2-l pr1 pl0 pointer silver mb0"
                )
                }
                onClick={() => onRouteChange('aboutMe')}
            >
                02 : About Me
            </p>
            <p className="f3-l f6 fw9 link hover-black blph2-l pr1 pl0 pointer gray mb0"> | </p>
            <p
                className={route === 'contact' ? (
                    "f4-l f7 fw9 link hover-black black ph2-l pr0 pl0 pointer black mb0"
                ) : (
                    "f4-l f7 link hover-black black ph2-l pr0 pl0 pointer silver mb0"
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