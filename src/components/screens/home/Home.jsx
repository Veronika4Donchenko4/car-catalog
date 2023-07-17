// import { cars } from './car-item/CarItem'
import style from './Home.module.css';
import CreateCarForm from './create-car-form/CreateCarForm';



function Home() {
    return (
      <div>
        <h1>Cars catalog</h1>
        <CreateCarForm/>
        <>
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
  