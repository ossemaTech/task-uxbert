import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './styles/Home.module.css'

import React, { useEffect, useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import Card from "../components/card";
import axios from "axios";

export interface CardData {
  id: number,
    username: string,
    name: string,
    email:string,
    website:string,
    phone:string,
}

const Home: NextPage = () => {
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
        <title>card user</title>
        <meta name="description" content="shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        {data.map((el, index) => <Card key={index} cardData={el} />)}
      </div>
    </div>
  )
}

export default Home
