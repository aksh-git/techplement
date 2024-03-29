# API Documentation

**_Express-Mongoose Starter: A minimalistic Node.js application using Express and Mongoose for MongoDB, ready for deployment. Easily fork, deploy, and customize; Includes middleware for JWT authentication and password hashing._**

## API-Endpoints

## User authentication

- Base path: `/api/auth`

### `/signup`

- **Endpoint:** `/signup`
- **Method:** `POST`
- **Description:** Register a new user account with the provided information.

- **Headers:**

| Header       | Value            | Description                       |
| ------------ | ---------------- | --------------------------------- |
| Content-Type | application/json | Specify the content type as JSON. |

- **Parameters:**

| Parameter   | Type   | Description                        | Required | Valid Values                  |
| ----------- | ------ | ---------------------------------- | -------- | ----------------------------- |
| fullname    | string | Full name of the user.             | Yes      | Any string                    |
| dateOfBirth | date   | Date of birth of the user.         | Yes      | Valid date in ISO 8601 format |
| email       | string | Email address for the new account. | Yes      | Valid email address           |
| password    | string | Password for the new account.      | Yes      | Strong password               |

**Example request:**

```http
POST /api/auth/signup HTTP/1.1
Host: simple-user-auth-node-be.onrender.com
Content-Type: application/json

{
  "fullname": "John Doe",
  "dateOfBirth": "1990-01-01",
  "email": "john.doe@example.com",
  "password": "StrongP@ssw0rd"
}
```

**Example response:**

```json
{
  "success": true,
  "message": "Signed up successfully",
  "data": {
    "token": "YOUR_AUTH_TOKEN"
  }
}
```

### `/login`

- **Endpoint:** `/login`
- **Method:** `POST`
- **Description:** Authenticate and log in a user with the provided email and password.

- **Headers:**

| Header       | Value            | Description                       |
| ------------ | ---------------- | --------------------------------- |
| Content-Type | application/json | Specify the content type as JSON. |

- **Parameters:**

| Parameter | Type   | Description                       | Required | Valid Values        |
| --------- | ------ | --------------------------------- | -------- | ------------------- |
| email     | string | Email address for authentication. | Yes      | Valid email address |
| password  | string | Password for authentication.      | Yes      | Valid password      |

**Example request:**

```http
POST /api/auth/login HTTP/1.1
Host: simple-user-auth-node-be.onrender.com
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "StrongP@ssw0rd"
}
```

**Example response:**

```json
{
  "success": true,
  "message": "Authenticated successfully",
  "data": {
    "token": "YOUR_AUTH_TOKEN"
  }
}
```

## Manage User

- Base path: `/api/user`

### `/getById`

- **Endpoint:** `/getById/:userId`
- **Method:** `GET`
- **Description:** Get user information by user's Id.

- **Headers:**

| Header        | Value                  | Description                        |
| ------------- | ---------------------- | ---------------------------------- |
| Authorization | Bearer YOUR_AUTH_TOKEN | JWT token for user authentication. |

- **Parameters:**

| Parameter | Type   | Description     | Required | Valid Values      |
| --------- | ------ | --------------- | -------- | ----------------- |
| userId    | string | Id of the user. | Yes      | MongoDB Object Id |

### `/update`

- **Endpoint:** `/update`
- **Method:** `PUT`
- **Description:** Update user information such as name, date of birth, and bio.

- **Headers:**

| Header        | Value                  | Description                        |
| ------------- | ---------------------- | ---------------------------------- |
| Content-Type  | application/json       | Specify the content type as JSON.  |
| Authorization | Bearer YOUR_AUTH_TOKEN | JWT token for user authentication. |

- **Parameters:**

| Parameter   | Type   | Description                        | Required | Valid Values                  |
| ----------- | ------ | ---------------------------------- | -------- | ----------------------------- |
| fullname    | string | Updated full name of the user.     | -        | Any string                    |
| bio         | string | Updated bio of the user.           | -        | Any string                    |
| dateOfBirth | date   | Updated date of birth of the user. | -        | Valid date in ISO 8601 format |

> Pass parameters which you want to update.

**Example request:**

```http
PUT /api/user/update HTTP/1.1
Host: simple-user-auth-node-be.onrender.com
Content-Type: application/json
Authorization: Bearer YOUR_AUTH_TOKEN

{
  "fullname": "Updated Name",
  "dateOfBirth": "1990-01-02",
  "bio": "Updated bio information"
}
```

**Example response:**

```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "_id": "user123",
    "fullname": "Updated Name",
    "dateOfBirth": "1990-01-02",
    "bio": "Updated bio information"
  }
}
```

### `/deleteMe`

- **Endpoint:** `/deleteMe`
- **Method:** `DELETE`
- **Description:** Deletes the user's data.

- **Headers:**

| Header        | Value                  | Description                        |
| ------------- | ---------------------- | ---------------------------------- |
| Authorization | Bearer YOUR_AUTH_TOKEN | JWT token for user authentication. |

**Example request:**

```http
DELETE /api/user/deleteMe HTTP/1.1
Authorization: Bearer YOUR_AUTH_TOKEN
```

**Example response:**

```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": null
}
```

---

## Setup and Deployment

Step-by-step instructions to fork/copy this repository, deploy it on Render.com, and set up environment variables at zero cost.

### Forking the repository

- Click on the "Fork" button in the upper right corner of the repository page.
- Choose the account or organization where you want to fork the repository.

### Cloning the forked repository

- Clone the forked repository to your local machine:

  ```bash
  git clone https://github.com/your-username/forked-repo.git
  ```

- Make changes you want.

### Deploy

> using render.com

1. Create a new account on [Render.com](https://render.com/) if you don't have one.
2. On the Render dashboard, click on the "Create" button.
3. Select "Web Service" as the type of service.
4. Connect your GitHub account and select the forked repository.
5. Choose the branch you want to deploy.
6. Set the following settings:

   - **Environment:** Node.js
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`

   - **Add Environment Variables:**

     - `MONGO_URI`: Your MongoDB connection string.
     - `JWT_SECRET`: A secret key for JWT token generation.

7. Click on "Create Web Service."
8. Wait for the deployment to complete. 

Render will automatically provide a URL for your application.

### Final Steps

- Access your deployed application using the provided URL.
- Test your application to ensure that it works as expected.

## Contact

If you encounter any type of error or bug in any phase, or need any other help or just to talk about anything :)
Ping me:

  - Discord : ydevakash

**_Have a great day!_**
