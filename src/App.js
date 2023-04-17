import React, { useEffect, useState } from 'react'
import Pagination from "./Pagination"
import ImageCard from './Card/ImageCard'

import "./App.css"

const App = () => {
  // const [userInput, setUserInput] = useState("")
  const [data, setData] = useState([])
  const [dataInPerPage, setDataInPerPage] = useState([])
  // const [userTextOnImage, setUserTextOnImage] = useState(false)

  useEffect(() => {
    const images = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      const responseData = await response.json();
      setData(responseData);
      setDataInPerPage(responseData.slice(0, 10));
    }
    images()
  }, [])

  const pagehandler = (pageNumber) => {
    setDataInPerPage(data.slice((pageNumber * 10) - 10, pageNumber * 10))
  }

  return (
    <div>
      <center>
        <h1>Images</h1>
        <div className='image-container'>
          {
            dataInPerPage.map(each => (
              <ImageCard key = {each.id} Details = {each}/>
            ))
          }
        </div>
      </center>
      <Pagination data={data} pageHandler={pagehandler} />
    </div>
  )
}

export default App