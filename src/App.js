// import React from 'react';

// import Products from './components/Products';
// import NewProduct from './components/NewProduct';

// function App(){
//     const products = [
//         {
//             id: 'p1',
//             title: 'Nirma',
//             amount: 100,
//             date: new Date(2021,8,10),
//         },
//         {
//             id: 'p2',
//             title: 'Surf Excel',
//             amount: 200,
//             date: new Date(2021,2,2)
//         },
//         {
//             id: 'p2',
//             title: 'Tide',
//             amount: 130,
//             date: new Date(2021,12,28)
//         },
//         {
//             id: 'p4',
//             title: 'Ghadi',
//             amount: 450,
//             date: new Date(2021,5,5)
//         },
//     ]

//     function printProductData(data){ 
//         console.log("i am inside app");
//         console.log(data);
//     }
//     return(
//         <div>
//             <NewProduct printProduct = {printProductData}/> {/* /*function pass kardiya */}
//             <Products items={products}/>
//             <h1 className='text-7xl text-centre text-blue-400'>Hello world</h1>
//         </div>
//     );
// }

// export default App;

import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
