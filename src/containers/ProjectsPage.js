import { ShowcaseList } from '../components/ShowcaseList/ShowcaseList';

const ProjectsPage = () => {
    return (
        <div>
            <h1 className="tc f2 mb5"><span className="f1 fw1">| </span>01 : Projects<span className="f1 fw1"> |</span></h1>
            <ShowcaseList />
        </div>
    )
}

export { ProjectsPage };