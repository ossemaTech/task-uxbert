import React, { useState } from "react";
import { CardData } from "../pages";
import Link from "next/link";
export default function Card({ cardData }: { cardData: CardData }) {
  const [currentCardData, setCurrentCardData] = useState(cardData)

  return <div>
    <div>
      <p>{currentCardData.website}</p>
    </div>
    <div>
      <p className="title"> {currentCardData.phone} </p>
      <div>
        <div>
          <p className="title">{currentCardData.email}</p>
        </div>
        <Link href={`/detailpage/${encodeURIComponent(currentCardData.id)}`}>
        <i className={ "fa fa-heart"}
            aria-hidden="true"
          style={{cursor:"pointer"}}
        />
        </Link>
      </div>
    </div>
  </div>
}
