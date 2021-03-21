const Navigation = ({ onRouteChange }) => {
    return (
        <nav className="mr5" style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '1vw' }}>
            <p
                className="f3-l f4 link dim black pt3 pb0 ph2 pointer silver"
                onClick={() => onRouteChange('home')}
            >
                00 : Home |
            </p>
            <p
                className="f3-l f4 link dim black pt3 pb0 ph2 pointer silver"
                onClick={() => onRouteChange('projects')}
            >
                01 : Projects |
            </p>
            <p
                className="f3-l f4 link dim black pt3 pb0 ph2 pointer silver"
                onClick={() => onRouteChange('aboutMe')}
            >
                02 : About Me |
            </p>
            <p
                className="f3-l f4 link dim black pt3 pb0 ph2 pointer silver"
                onClick={() => onRouteChange('contact')}
            >
                03 : Contact
            </p>
        </nav>
    )
}

export { Navigation };