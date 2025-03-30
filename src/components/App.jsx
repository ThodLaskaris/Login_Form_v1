
import React, { useState } from "react";

function App() {

  const [fName, setfName] = useState(""); // Αποθήκευση fName
  const [lName, setlName] = useState(""); // //         lName
  const [greet, setGreet] = useState("Hello");  //  Greet message.
  const [submitted, setSubmit] = useState(false); // Αποτρεπει την submit*x submit

  function resetForm() {
    setfName("");
    setlName("");
    setSubmit(false);
    setGreet("Hello");
    console.log("form has been reseted.")
  }
  function handleChangeFirstName(event) {
    setfName(event.target.value) //  Ενημέρωση οτι αλλάζει το input

  }
  function handleChangeLastName(event) {
    setlName(event.target.value); //  Ενημέρωση οτι αλλάζει το input.
  }

  function handleClick(event) {
    event.preventDefault(); //  Αποτρέπει την refresh page, οταν πατηθεί το Submit.
    console.log(`Before submit ${submitted}`);

    setSubmit(function (prevSumitted) {
      if (prevSumitted) {
        console.log(`Form already submitted.`); //  Αποτρεπει διπλη submit
        return true;
      }
      console.log(`Submitting form`);
      setGreet(`Hello ${fName} ${lName}`);
      console.log(`fName and lName has been updated to ${fName} and ${lName}`);
      return true;
    });
  };

  return (
    <div className="container">
      <h1>{greet}</h1>
      <form onSubmit={handleClick}>
        <input
          name="fName"

          placeholder="First Name"
          value={fName}
          onChange={handleChangeFirstName}
        />
        <input name="lName"

          placeholder="Last Name"
          value={lName}
          onChange={handleChangeLastName} />
        <button type="submit" disabled={!fName || !lName || submitted}>Submit</button>


        <button type="button" onClick={resetForm}>Reset</button>

      </form>
    </div>
  );
}

export default App;
