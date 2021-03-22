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
  }

  return (
    <div>
      {
        route === "home"
          ? <div className="home">
            <Navigation onRouteChange={onRouteChange} route={route} />
            <HomePage />
          </div>
          : (
            route === "projects"
              ? <div className="pages">
                <Suspense fallback={<div>Loading...</div>}>
                  <Navigation className="pages" onRouteChange={onRouteChange} route={route} />
                  <ProjectsPage />
                </Suspense>
              </div>
              : (
                route === "aboutMe"
                  ? <div className="pages">
                    <Suspense fallback={<div>Loading...</div>}>
                      <Navigation className="pages" onRouteChange={onRouteChange} route={route} />
                      <AboutMe />
                    </Suspense>
                  </div>
                  : <div className="pages">
                    <Suspense fallback={<div>Loading...</div>}>
                      <Navigation className="pages" onRouteChange={onRouteChange} route={route} />
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
