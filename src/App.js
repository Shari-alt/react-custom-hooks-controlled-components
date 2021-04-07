import "./App.css";
import {useState} from "react";

function App() {
  // Add states and eventHandlers here
  const [name, setName] = useState("");
  const [surname, setSurname] =useState ("");
  const [age, setAge] = useState("");
  const [email, setEmail] =useState("");
  const [subscription, setSubscription] =useState (false);

  function handleNameChange(event) {
    const newName = event.target.value;
    setName(newName)
  }

  function handleSurnameChange(event) {
    setSurname(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handleEmailChange(event){
    setEmail(event.target.value);
  }

  function handleNewsletterchange(event) {
    setSubscription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newUserData ={
      name, 
      surname,
      age,
      email,
      subscription
    };
    console.log(newUserData);

  }

  return (
    <div className="App">
      <h1>More USERS!</h1>
      <h2>Enter user credentials below:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName" >Name:</label>
        <input type="text" name="firstName" value={name} onChange={handleNameChange}/>
        <label htmlFor="lastName">Surname:</label>
        <input type="text" name="lastName"  value={surname} onChange={handleSurnameChange} />
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" value={age} onChange={handleAgeChange} />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmailChange} />
        <div className="newsletter">
          <input type="checkbox" name="newsletter" value={subscription} onChange={handleNewsletterchange}/>
          <label htmlFor="newsletter">
            Yes, I would like many more emails!
          </label>
        </div>
        <button type="submit">confirm</button>
      </form>
    </div>
  );
}

export default App;
