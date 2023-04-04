import { Button } from './Button'

export const ButtonContainer = ({ offers, setValue, value }) => {
  return (
    <div className="buttons">
      {offers.map((offer, index) => {
        return (
          <Button
            {...offer}
            onClick={() => setValue(index)}
            key={offer.id}
            value={value}
            className={`btn ${value === index ? 'btn-active' : ''}`}
          />
        )
      })}
    </div>
  )
}
