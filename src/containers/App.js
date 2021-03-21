import { useState, lazy, Suspense } from 'react';
import { Navigation } from '../components/Navigation/Nagivation';
import { HomePage } from "./HomePage";
import { AboutMe } from "./AboutMe";
import './App.css';

const App = () => {
  const [route, setRoute] = useState('home');

  const ProjectsPage = lazy(() => import('./ProjectsPage').then(module => ({ default: module.ProjectsPage })));

  const onRouteChange = (route) => {
    setRoute(route);
    console.log(`changed the route into ${route}`)
  }

  return (
    <div>
      <Navigation onRouteChange={onRouteChange} />
      {
        route === "home"
          ? <HomePage />
          : (
            route === "projects"
              ? <Suspense fallback={<div>Loading...</div>}>
                <div className="pages">
                  <ProjectsPage />
                </div>
              </Suspense>
              : (
                route === "aboutMe"
                  ? <Suspense fallback={<div>Loading...</div>}>
                    <div className="pages">
                      <AboutMe />
                    </div>
                  </Suspense>
                  : <div></div>
              )
          )
      }
    </div>
  );
}

export default App;
