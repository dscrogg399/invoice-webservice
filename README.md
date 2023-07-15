# invoice-webservice
Assignment to create a webservice using an xlsx file as a data source. I structured this project to emulate what I would do for a more complex project.
The only difference is I would probably use an ORM for DB access and type safety.


## Running the Project

First, clone this project into a local directory.
Follow these steps to run the project:

1. Navigate to the project directory in your terminal by typing `cd <your-project-name>`.
2. Install the project dependencies by running `npm install`.
3. Start the server by running `npm start`.

## Running the Tests

To run the tests for the endpoints, follow these steps:

1. Navigate to the project directory in your terminal by typing `cd <your-project-name>`.
2. Run `npm test` to start the tests.

## API Documentation

### Endpoints

---

#### GET /api/category

Returns all invoice options.

**Response**

- HTTP status code: `200`
- Body: An array of `InvoiceOption` objects.

---

#### GET /api/category/{categoryId}

Returns all invoice options with a specific category id.

**Parameters**

- `{categoryId}`: The ID of the category.

**Response**

- HTTP status code: `200`
- Body: An array of `InvoiceOption` objects, all of which have a `CategoryID` equal to `{categoryId}`. If no matching items are found, an empty array is returned.

---

#### GET /api/type

Returns all invoice options.

**Response**

- HTTP status code: `200`
- Body: An array of `InvoiceOption` objects.

---

#### GET /api/type/{typeCode}

Returns all invoice options with a specific type code.

**Parameters**

- `{typeCode}`: The type code of the invoice option.

**Response**

- HTTP status code: `200`
- Body: An array of `InvoiceOption` objects, all of which have an `InvoiceTypeCode` equal to `{typeCode}`. If no matching items are found, an empty array is returned.

---

#### GET /category

Returns a web page listing all invoice options.

**Response**

- HTTP status code: `200`
- Content-Type: `text/html`

---

#### GET /category/{categoryId}

Returns a web page listing all invoice options with a specific category id.

**Parameters**

- `{categoryId}`: The ID of the category.

**Response**

- HTTP status code: `200`
- Content-Type: `text/html`

---

#### GET /type

Returns a web page listing all invoice options.

**Response**

- HTTP status code: `200`
- Content-Type: `text/html`

---

#### GET /type/{typeCode}

Returns a web page listing all invoice options with a specific type code.

**Parameters**

- `{typeCode}`: The type code of the invoice option.

**Response**

- HTTP status code: `200`
- Content-Type: `text/html`

Please note that you should replace `{id}` and `{typeCode}` with actual values when making requests. The endpoints return a `200` HTTP status code for successful requests, and the responses are either JSON arrays (for API requests) or HTML content (for web page requests).
