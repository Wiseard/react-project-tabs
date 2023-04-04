import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

export const Duties = ({ duties }) => {
  return (
    <ul>
      {duties.map((duty, index) => {
        return (
          <div key={index} className="item-list">
            <div className="icon-container">
              <MdKeyboardDoubleArrowRight className="icon" />
            </div>
            <li>{duty}</li>
          </div>
        )
      })}
    </ul>
  )
}
