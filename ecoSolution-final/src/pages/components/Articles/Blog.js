import styles from './Blog.module.css';
export default function Blog({ titre, description, contenu,image }) {
  return (
    <div className={styles.cardBlog }>
      <div className="row justify-content-center ">
        <div className=" col-sm-12 col-md-6">
          <img className="cards-blog1" src={image}></img>
        </div>
        <div className=" col-sm-12 col-md-6">
          <h4 className="proj-title">{titre}</h4>
         
        </div>
      </div>
   </div>
  



  );
}

