import { ShowcaseList } from '../components/ShowcaseList/ShowcaseList';

const ProjectsPage = () => {
    return (
        <div>
            <h1 className="tc f2-l f3 mt0-l mb5-l mt4 mb2"><span className="f1-l f2 fw1">| </span>01 : Projects<span className="f1-l f2 fw1"> |</span></h1>
            <ShowcaseList />
        </div>
    )
}

export { ProjectsPage };