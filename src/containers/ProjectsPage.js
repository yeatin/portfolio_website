import { ShowcaseList } from '../components/ShowcaseList/ShowcaseList';

const ProjectsPage = () => {
    return (
        <div>
            <h1 className="tc f2-l f3 mt0-l mt4"><span className="f1-l f2 fw1">| </span>01 : Projects<span className="f1-l f2 fw1"> |</span></h1>
            <p className="tc center f5 mb5-l w-40-l" style={{lineHeight:"1.5em"}}>Every project has a github link down below. Click the button to see elaborate descriptions of what I built the project with.</p>
            <ShowcaseList />
        </div>
    )
}

export { ProjectsPage };