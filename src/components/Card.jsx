

import styles from "./Card.module.css";

function Card(props) {
  const { id, image, title, description, price, category} = props;
  return (
    <article className={styles.container}>
      <div className={styles.top}>
        <img src={image} alt={`card-${id}`} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.ctg}>{category}</p>
        <p className={styles.price}>Price: ${price}</p>
        {/* <p className={styles.desc}>{description}</p> */}
        <button className={styles.btn}>Add To Cart</button>
      </div>
    </article>
  );
}

export default Card;
