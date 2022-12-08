import sendRequest from './send-request';
import { sendRequestAlt } from './send-request';
const BASE_URL = '/api/books';

export function addBook(form) {
    console.log(form)
    return sendRequest(`${BASE_URL}/new`, 'POST', form);
}

export function editBook(form, bookId) {
    return sendRequestAlt(`${BASE_URL}/update/${bookId}`, 'PUT', form)
}