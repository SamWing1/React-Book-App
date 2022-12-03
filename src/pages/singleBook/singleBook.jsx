
export default function singleBook({ book }) {
    return (
        <>
        <li>{book.name} {book.currentPage} {book.currentlyReading}</li>
        </>
    )
}

