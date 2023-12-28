import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopBrowse from './components/PopBrowse/PopBrowse'
import PopExit from './components/PopExit/PopExit'
import PopNewCard from './components/PopNewCard/PopNewCard'
import Wrapper from './components/Wrapper/Wrapper'
import { cardList } from './data'

function App() {
  const [cards, setCards] = useState(cardList);

  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(()=> {
    setTimeout(()=> {
      setIsLoaded(false)
    }, 2000)

  }, [] )

  function addCard() {
    setCards([
      ...cards,
      {
        id: cards.length + 1,
        theme: "Research",
        title: "Новая задача",
        date: "30.10.23",
        status: "Без статуса",
      }
    ])
  }

  return (
    <Wrapper>
      <Header addCard={addCard} />
      <Main isLoaded={isLoaded} cardList={cards} />
      <PopExit />
      <PopNewCard />
      <PopBrowse />
    </Wrapper>
  );
}
export default App
