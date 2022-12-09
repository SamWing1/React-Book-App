import { Link } from 'react-router-dom';
import './SingleBook.css'

export default function SingleBook({ name, currentlyReading, currentPage, _id, note, showData }) {
    
    const deleteButton = async () => {
        fetch(`http://localhost:3000/api/books/${_id}`, {method:"DELETE"})
        .then(res => res.json())
        .then(showData())
        .then(showData())
        .catch(err => console.log(err))
        }

    return (
        <tr>
        <td>{name}</td>
        <td>{currentlyReading}</td>
        <td>{currentPage}</td>
        <td>{note}</td>
        <td><Link to={`/edit/${_id}`} id={_id}><button className="editButton">Edit</button></Link></td>
        <td><button className="deleteButton" onClick={deleteButton}>X</button></td>
      </tr>
    )
}