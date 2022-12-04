

export default function AddBookPage() {



  return (
    <>
    <h1>Add Book</h1>
    <form>
    <label>Book Title:
      <input type="string" name="name"></input>
    </label>
    <label>Currently Reading?
      <select name="reading">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      </label>
      <label>Current Page:
        <input type="number" placeholder="1"></input>
    </label>
    <input type="submit" value="Add Book"></input>
    </form>
    </>
  );
}