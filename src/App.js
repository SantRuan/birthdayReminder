
import { useState } from 'react';
import data from './Data/data';
import { List } from './Components/List/List.jsx'
import {NumberBirthdays} from './Components/NumberBirthdays/NumberBirthdays'
import {Button} from './Components/Button/Button'
function App() {

  const [people, setPeople] = useState(data)
  return (<main>
    <div className ="container">
     <NumberBirthdays people = {people}/>
    <List people = {people}/>
    <Button setPeople = {setPeople} />
    </div>
  </main>)


}

export default App;
