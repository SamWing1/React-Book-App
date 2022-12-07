import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import * as booksApi from '../../utilities/books-api';

export default function SingleBook({ name, currentlyReading, currentPage, _id, showData }) {
    

    const deleteButton = async () => {
        fetch(`http://localhost:3000/api/books/${_id}`, {method:"DELETE"})
        .then(res => res.json())
        .then(showData())
        .then(showData())
        .catch(err => console.log(err))
        console.log('clicked')
        }

        console.log(_id)
        
        // useEffect(() => {
        //     showData()
        //     console.log("help")
        //   }, []);

    return (
        <tr>
        <td>{name}</td>
        <td>{currentlyReading}</td>
        <td>{currentPage}</td>
        <td><Link to='/BookDetails'>Note</Link></td>
        <td><button onClick={deleteButton}>X</button></td>
      </tr>
    )
}