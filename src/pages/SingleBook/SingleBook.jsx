import { Link } from 'react-router-dom';
import * as booksApi from '../../utilities/books-api';

export default function SingleBook({ name, currentlyReading, currentPage, _id}) {
    

    const deleteButton = async () => {
        fetch(`http://localhost:3000/api/books/${_id}`, {method:"DELETE"})
        .then(res => res.json())
        // .then(data => booksApi.deleteBook(data))
        .catch(err => console.log(err))
        console.log('clicked')
        }

        console.log(_id)
        

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