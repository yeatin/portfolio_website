import { ShowcaseList } from '../components/ShowcaseList/ShowcaseList';

const ProjectsPage = () => {
    return (
        <div>
            <h1 className="tc f2-l f3 mt0-l mt4"><span className="f1-l f2 fw1">| </span>01 : Projects<span className="f1-l f2 fw1"> |</span></h1>
            <p className="tl center f5 mb5-l w-40-l" style={{lineHeight:"1.5em"}}>Each project has a GitHub link at the bottom of them. Click on the link to see detailed descriptions of the technologies and tools I used to build the projects.</p>
            <ShowcaseList />
        </div>
    )
}

export { ProjectsPage };