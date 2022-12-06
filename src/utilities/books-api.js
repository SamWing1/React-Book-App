import sendRequest from './send-request';
const BASE_URL = '/api/books/new';

export default function addBook(form) {
    // console.log(formData)
    return sendRequest(BASE_URL, 'POST', form);
}