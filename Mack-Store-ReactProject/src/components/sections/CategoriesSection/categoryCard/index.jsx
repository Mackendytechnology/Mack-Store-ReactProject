import styles from "./style.module.css"
export const CategoryCard = ({ title, image }) => {
  return (
    <div className={styles.categoryCard}>
      <img src={image} alt="the image" />
      <h3 className="title3">{title}</h3>
    </div>
  );
 };
