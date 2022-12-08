import sendRequest from './send-request';
const BASE_URL = '/api/books';

export function addBook(form) {
    console.log(form)
    return sendRequest(`${BASE_URL}/new`, 'POST', form);
}

export function editBook(form, bookId) {
    return sendRequest(`${BASE_URL}/update/${bookId}`, 'PUT', form)
}