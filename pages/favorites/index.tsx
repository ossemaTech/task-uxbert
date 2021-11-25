import Head from 'next/head'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardData } from "../index";
import styles from "../styles/Favorites.module.css";

export default function Favorites() {
  const [data, setData] = useState<CardData[]>([])

  

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users', {})
    .then(response => {
      // @ts-ignore
      setData(response.data)
    })
    .catch(error => {
      console.log(error);
    });
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Favourite </title>
        <meta name="description" content="my favourite from shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        {data.map((el, index) => <div className={styles.bucket} key={index}>
          <div>
            <p>{el.website}</p>
            <p>{el.name}</p>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}
