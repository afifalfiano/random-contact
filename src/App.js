import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Contact from './Contact';

function App() {
  const [dataContact, setContact] = useState([]);
  const [requestData, setRequestData] = useState(false);
  const [countCurrent, setCount] = useState(10);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=' + countCurrent).then((response) => {
      return response.json();
    }).then((data) => {
      return setContact(data.results);
    });
  }, [requestData])

  const addRequest = () => {
      setRequestData(!requestData);
      setCount(countCurrent + 5);
  }

  const resetData = () => {
    setRequestData(!requestData);
    setCount(10);
  }

  return (
    <div>
      <div className="header">Get Random Contact <br/>
      Total: ({dataContact.length} Contact)<br/> 
      <button className="more" onClick={addRequest}>More Contact</button>
      <button className="more reset" onClick={resetData}>Reset</button>
      </div>
      {
        dataContact.map(contact => {
          return (
            <Contact avatar={contact.picture} 
            name={contact.name} 
            email={contact.email} 
            phone={contact.phone}
            location={contact.location}
            key={contact.name.first}
            />
          )
        })
      }
    </div>
  );
}

export default App;
