import React, { useState } from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'


export default function SingleContent({ title, description }) {
  const [showContent, setShowContent] = useState<boolean>(false)
  return (

    <div className="content">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowContent(!showContent)}>
          {showContent ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
        </button>
      </header>
      {showContent &&
        <p>
          {description}
        </p>
      }
    </div>

  )
}
