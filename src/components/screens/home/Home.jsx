import { cars as carsData } from './create-car-form/cars.data'
import style from './Home.module.css';
import CreateCarForm from './create-car-form/CreateCarForm';
import CarItem from './car-item/CarItem'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CarService } from '../../../services/car.servise';



function Home() {
  const [cars, setCars] = useState(carsData)
  console.log(cars)


// useEffect(() => {
//   const fetchData = async () => {
//   const data = await CarService.getAll()

//   setCars(data)
//   }
//   fetchData()
// }, [])

    return (
      <div>
        <h1>Cars catalog</h1>
        <CreateCarForm setCars={setCars}/>
        <>
        {cars.length ? (
          cars.map(car => <CarItem key={car.id} car={car}/>)
          ) : (
            <p>There are no car</p>
          )}
        <div className= { style.item }>
            <h2>Car 1</h2>
            <p>100 000$</p>
            <button>Read more</button>
        </div>
        </>
      </div>
    );
  }
  
  export default Home;
  