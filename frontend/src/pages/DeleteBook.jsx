import React from 'react'
import axios from 'axios'
import Spinner from '../Components/Spinner'
import BackButton from '../Components/BackButton'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  
  const handleDelete = () =>{
    setLoading (true)
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false);
      navigate('/');
    })
    .catch((error)=>{
        setLoading(false);
        alert('error occured')
        console.log(error)
    })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading? <Spinner/>:''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure u wanna delete this book?</h3>
        <button className='p-4 bg-red-500 text-white m-8 '
        onClick={handleDelete}>
          Yes Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteBook