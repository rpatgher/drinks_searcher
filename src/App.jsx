import { Container,  } from 'react-bootstrap'
import FormComponent from './components/FormComponent'
import DrinksList from './components/DrinksList'
import DrinkModal from './components/DrinkModal'
import { CategoryProvider } from './context/CategoryProvider'
import { DrinksProvider } from './context/DrinksProvider'

function App() {
  return (
    <CategoryProvider>
      <DrinksProvider>
        <header className="py-5">
            <h1>Drinks Searcher</h1>
        </header>
        <Container className='mt-5'>
            <FormComponent />
            <DrinksList />
            <DrinkModal />
        </Container>
      </DrinksProvider>
    </CategoryProvider>
  )
}

export default App
