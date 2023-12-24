import Banner from "../../../assets/banner.jpg";
import styles from "./style.module.css"
export const BannerSection = () => {
  return (
    <div className="container">
      <section className={styles.flexbox}>
        <img src={Banner} alt="image of the banner" />
        <div>
          <h1 className="title1">Mack Store</h1>
          <p className="paragraph">We are the best store in the world</p>
          <a href="#" className="btn">
            Buy a product
          </a>
        </div>
      </section>
    </div>
  );
};
