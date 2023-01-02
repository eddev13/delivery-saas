import React from "react";
import styles from "../../styles/Home.module.css";
import { SearchInput } from "../../components/SearchInput";
import Banner from "../../components/Banner";

const Home = () => {
  const handleSearch = (searchValue: string) => {
    console.log(`Pesquisa por: ${searchValue}`);
  };
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.headerTopLeft}>
              <div className={styles.headerTitle}>seja bem-vindo(a) 👋</div>
              <div className={styles.headerSubTitle}>
                o que deseja para hoje?
              </div>
            </div>
            <div className={styles.headerTopRight}>
              <div className={styles.menuButton}>
                <div className={styles.menuButtonLine}></div>
                <div className={styles.menuButtonLine}></div>
                <div className={styles.menuButtonLine}></div>
              </div>
            </div>
          </div>
          <div className={styles.headerBottom}>
            <SearchInput mainColor="#fb9400" onSearch={handleSearch} />
          </div>
        </header>

        <Banner />
      </div>
    </>
  );
};

export default Home;
