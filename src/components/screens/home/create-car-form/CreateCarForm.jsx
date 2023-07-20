import { useState } from 'react'
import styles from './CreateCarForm.module.css'



const CreateCarForm = ({setCars}) => {
    const clearData = ({
        price: '',
        name: '',
        image: '',
       })
    // function setName allow to get value and wrote it in state
   const [data, setData] = useState({
    price: '',
    name: '',
    image: '',
   });
  

   const createCar = e => {
   e.preventDefault()
  
   setCars(prev => [
    { id: prev.length + 1,
        ...data}, 
        ...prev,
    ])

    setData(clearData)
   }

   return (
    <form className={styles.form}>
        <input
        placeholder="Name" 
        onChange={e => 
            setData(prev => ({
            ...prev,
            name: e.target.value
        }))
    }
        value={data.name}
        />  
        <input placeholder="Price"
         onChange={e => 
            setData(prev => ({
            ...prev,
            price: e.target.value
             }))
    } /> 
        <input placeholder="Image"
         onChange={e => 
            setData(prev => ({
            ...prev,    
            image: e.target.value
         }))}
         value={data.image}
        />
        <button className = 'btn' onClick={e => createCar(e)}>
            Create</button>  
    </form>
   )
}

export default CreateCarForm