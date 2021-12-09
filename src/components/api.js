const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZZOclLjU7RqqhsAyNQ6o/books';

const getBooks = async () => {
  try {
    const response = await fetch(baseUrl);
    return response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

const postBooks = async (books) => {
  try {
    const response = await fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify(books),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.text();
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteBook = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id,
      }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.text();
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getBooks, postBooks, deleteBook };
