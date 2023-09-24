// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// export {};

// interface Birthday {
//   employeeId: string;
//   firstName: string;
//   dateOfBirth: Date; // Assuming dateOfBirth is a string
// }

// const BirthdayList: React.FC = () => {
//   const [birthdays, setBirthdays] = useState<Birthday[]>([]);
//   const [fetching, setFetching] = useState(false); // Add a state to track fetching

//   const [visible,setvisible]=useState(true);

//   const toggle=()=>
//   {
//     setvisible(!visible);

//   }

//   useEffect(() => {
//     // Fetch birthdays when the component mounts if fetching is true
//     if (fetching) {
//       fetchBirthdays();
//     }
//   }, [fetching]);

//   const fetchBirthdays = () => {
//     axios.get('http://localhost:5000/users/api/birthdays/today').then((response) => {
//       console.log(response.data);
//       setBirthdays(response.data);
//     });
//   };

//   const handleFetchBirthdays = () => {
//     setFetching(!false); // Set fetching to true when the button is clicked
//   };

//   return (
//     <>
//     <div>
//       <h1>Birthdays Today</h1>
//       <button onClick={handleFetchBirthdays}>Fetch Birthdays</button>
//       {visible &&
//       <ul>
//         {birthdays.map((birthday) => (
//           <li key={birthday.employeeId}>{birthday.firstName}</li>
//         ))}
//       </ul>
//     } 
//     </div>
//     </>
//   );
// };

// export default BirthdayList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export {};

interface Birthday {
  employeeId: string;
  firstName: string;
  dateOfBirth: Date;
  designation:string; 
  // Assuming dateOfBirth is a string
}

const BirthdayList: React.FC = () => {
  const [birthdays, setBirthdays] = useState<Birthday[]>([]);
  const [fetching, setFetching] = useState(false); // Add a state to track fetching
  const [visible, setVisible] = useState(false); // Add a state to track visibility

  useEffect(() => {
    // Fetch birthdays when the component mounts if fetching is true
    if (fetching) {
      fetchBirthdays();
    }
  }, [fetching]);

  const fetchBirthdays = () => {
    axios.get('http://localhost:5000/users/api/birthdays/today').then((response) => {
      console.log(response.data);
      setBirthdays(response.data);
      setVisible(true); // Show the list after fetching data
    });
  };

  const handleFetchBirthdays = () => {
    setFetching(!fetching); // Toggle the fetching state
    setVisible(false); // Hide the list when the button is clicked
  };

  return (
    <div>
      <h1>Birthdays Today</h1>
      <button onClick={handleFetchBirthdays}>Toggle Birthdays 🎂</button>
      {visible && (
        <ul>
          {birthdays.map((birthday) => (
            <li key={birthday.employeeId}>{birthday.firstName}-{birthday.designation}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BirthdayList;
