import React from "react";
import styles from '../styles/About.module.scss';

export default function About({apiData}){
    console.log(apiData)
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>{apiData.Title}</h2>
            
            <p className={styles.description}>
            {apiData.Plot}
            </p>
            <h3>Director: {apiData.Director}</h3>
            <h3>Genre: {apiData.Genre}</h3>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { query } = context;
    const { id } = query;
    console.log(id)
    // Fetch data from the API endpoint (replace with your actual API URL)
    const apiUrl = `http://www.omdbapi.com/?i=${id}&&apikey=b02d6e87`; // Assuming you set up the API route at /api/data
    const response = await fetch(apiUrl);
    const apiData = await response.json();
    console.log(apiData)
    return {
      props: {
        apiData,
      },
    };
  }