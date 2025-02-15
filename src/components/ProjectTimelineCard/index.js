// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props

  return (
    <div className="card-con">
      <img src={data.imageUrl} className="image-edit" alt="project" />
      <div className="title-duration-con">
        <h1 className="title">{data.projectTitle}</h1>
        <div className="cal-dur-con">
          <AiFillCalendar />
          <p className="duration">{data.duration}</p>
        </div>
      </div>
      <p className="project-discription">{data.description}</p>
      <a className="visit-link" href={data.projectUrl}>
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
