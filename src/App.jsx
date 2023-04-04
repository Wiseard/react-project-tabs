import { useEffect, useState } from 'react'
import { ButtonContainer } from './components/ButtonContainer'
import { JobContainer } from './components/JobContainer'

const url = 'https://course-api.com/react-tabs-project'
const App = () => {
  return (
    <main>
      <Tabs />
    </main>
  )
}

const Tabs = () => {
  const [offers, setOffers] = useState([])
  const [value, setValue] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const getData = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setOffers(data)
      if (!response.ok) {
        setIsError(true)
        return
      }
    } catch (error) {
      setIsError(true)
      console.log(error)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    getData(url)
  }, [])

  if (isLoading) {
    return (
      <section className="container">
        <h3>Loading data</h3>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="container">
        <h3>Error fetching data</h3>
      </section>
    )
  }

  return (
    <section className="container">
      <ButtonContainer value={value} offers={offers} setValue={setValue} />
      <JobContainer offers={offers} value={value} />
    </section>
  )
}

export default App
