import { Job } from './Job'

export const JobContainer = ({ offers, value }) => {
  return (
    <div className="job-container">
      {offers.map((offer, index) => {
        if (index === value) return <Job {...offer} key={offer.id} />
      })}
    </div>
  )
}
