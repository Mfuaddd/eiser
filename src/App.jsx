import './App.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header';
import Market from './components/Market';

library.add(faMagnifyingGlass,faCartShopping,faUser,faHeart)

function App() {
  return (
    <>
      <Header/>
      <Market/>
    </>
  );
}

export default App;
