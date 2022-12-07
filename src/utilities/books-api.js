import sendRequest from './send-request';
const BASE_URL = '/api/books';

export function addBook(form) {
    console.log(form)
    return sendRequest(`${BASE_URL}/new`, 'POST', form);
}

export function deleteBook(form) {
    console.log(form)
    return sendRequest(`${BASE_URL}/:id`, 'DELETE', form);
}