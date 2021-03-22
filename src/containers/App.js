import { useState, lazy, Suspense } from 'react';
import { Navigation } from '../components/Navigation/Nagivation';
import { HomePage } from './HomePage';
import './App.css';

const App = () => {
  const [route, setRoute] = useState('home');

  const ProjectsPage = lazy(() => import('./ProjectsPage').then(module => ({ default: module.ProjectsPage })));
  const AboutMe = lazy(() => import('./AboutMe').then(module => ({ default: module.AboutMe })));
  const Contact = lazy(() => import('./Contact').then(module => ({ default: module.Contact })));

  const onRouteChange = (route) => {
    setRoute(route);
    console.log(`changed the route into ${route}`)
  }

  return (
    <div>
      {
        route === "home"
          ? <div className="home">
            <Navigation onRouteChange={onRouteChange} />
            <HomePage />
          </div>
          : (
            route === "projects"
              ? <div className="pages">
                <Suspense fallback={<div>Loading...</div>}>
                  <Navigation className="pages" onRouteChange={onRouteChange} />
                  <ProjectsPage />
                </Suspense>
              </div>
              : (
                route === "aboutMe"
                  ? <div className="pages">
                    <Suspense fallback={<div>Loading...</div>}>
                      <Navigation className="pages" onRouteChange={onRouteChange} />
                      <AboutMe />
                    </Suspense>
                  </div>
                  : <div className="pages">
                    <Suspense fallback={<div>Loading...</div>}>
                      <Navigation className="pages" onRouteChange={onRouteChange} />
                      <Contact />
                    </Suspense>
                  </div>
              )
          )
      }
    </div >
  );
}

export default App;
