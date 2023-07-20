import styles from '../Home.module.css'; 

function CarItem({ car }) {
    return (
        <div key={car.id} className={styles.item}>
            <div 
            className={styles.image}
            style= {{ 
                backgroundImage: `url(${car.image})`,
            }}
        />
        <div/>
        <div className={styles.info}>
            <h2>{car.name}</h2>
            <p>
                {new Intl.NumberFormat('uk-UK', {
                    style: 'currency',
                    currency: 'USD',
                }).format(car.price)}
            </p>
        </div>
     </div>
    )
}

export default CarItem;