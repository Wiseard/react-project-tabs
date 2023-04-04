import { Duties } from './Duties'

export const Job = ({ title, company, dates, duties }) => {
  return (
    <article data-id={company} className="job-profile">
      <header className="job-header">
        <h2 className="job-title">{title}</h2>
        <h3 className="job-name">{company}</h3>
        <p className="job-dates">{dates}</p>
      </header>
      <Duties duties={duties} />
    </article>
  )
}
