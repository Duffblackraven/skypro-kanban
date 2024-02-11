import Wrapper from '../components/Wrapper/Wrapper.jsx';
import PopNewCard from '../components/PopNewCard/PopNewCard';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

import { useEffect, useState } from 'react';
import { useUser } from '../hooks/useUser.jsx';

import { getTasks } from '../api.js';


function MainPage() {

  const { userData } = useUser();

  const [cards, setCards] = useState(null);
  const [cardsError, setCardsError] = useState(null);

  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    getTasks({ token: userData.token })
      .then((data) => {
        // console.log(data.tasks);
        setCards(data.tasks);
      })
      .then(() => {
        setIsLoaded(false);
      })
      .catch((error) => {
        setCardsError(error.message);
      })
  }, []);

  return (
    <>

      <Wrapper>
        <PopNewCard />
        <Header userData={userData} />
        {cardsError ? (<p style={{ color: 'darksalmon' }}>{cardsError}</p>) : (
          <>
            <Main isLoaded={isLoaded} cardList={cards} />
          </>
        )}
      </Wrapper>
    </>
  );
}

export default MainPage