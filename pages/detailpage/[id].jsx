import { useRouter } from "next/router"
import Head from 'next/head'
import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Detailspage() {
  const [data, setData] = useState([])
  const router = useRouter()
  const {
    query: { dynamic, id },
  } = router
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => {
      // @ts-ignore
      setData(response.data)
    })
    .catch(error => {
      console.log(error);
    });
  }, [id])
  return (
    <div>
      <Head>
        <title>details </title>
        <meta name="description" content="my favourite from shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>
          <p>{data.website}</p>
          <p>{data.name}</p>
          <p>{data.company?.name}</p>
          <p>{data.company?.catchPhrase}</p>
          <p>{data.company?.bs}</p>
        </div>
      </div>
      id: {id}
    </div>
  )
}