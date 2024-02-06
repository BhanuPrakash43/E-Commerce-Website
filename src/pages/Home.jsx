import { useState, useEffect } from "react";

import Slider from "../components/Slider";
import Card from "../components/Card";
import styles from "./Home.module.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function fetchProducts() {
      fetch("https://fakestoreapi.com/products", { method: "GET" })
        .then((data) => data.json())
        .then((data) => {
          setProducts(data);
        });
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <main>
        <section className={styles.swiper}>
          <Slider />
        </section>
        <h1 className={styles.prodItem}>Our Product Catalogue</h1>
        <section className={styles.container}>
          {products.map((item, i) => (
            <Card
              id={item.id}
              title={item.title}
              description={item.description}
              category={item.category}
              image={item.image}
              price={item.price}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
export default Home;
