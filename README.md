# ByteCore

ByteCore is a full-stack web application built with React for the frontend and Node.js with MongoDB for the backend. This project features separate directories for the client (frontend) and server (backend).

## Summary

**ByteCore: Laptop Retail Website**

ByteCore is an e-commerce platform for laptops, built using React for the frontend and Node.js with MongoDB for the backend. It offers features like product browsing, secure checkout, and a review system, ensuring a seamless shopping experience. The project is designed for scalability, fast performance, and user convenience.

## Folder Structure
```
Bytecore/
  |-- bytecore/    # Frontend (React)
  |-- server/      # Backend (Node.js, MongoDB)
```

---

## Setup Instructions

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps to Run the Project

#### 1. Clone the Repository
```bash
git clone https://github.com/AyushVerma947/ByteCore.git
cd Bytecore
```

#### 2. Create the `.env` Files
- In the `server` directory, create a `.env` file based on the provided `.env.example` file.
- Example `.env` for the backend:
  ```plaintext
  MONGO_URI=your-mongo-uri-here
  PORT=your-port-here
  ```

#### 3. Install Dependencies

**Frontend (React):**
```bash
cd bytecore
npm install
```

**Backend (Node.js):**
```bash
cd ../server
npm install
```

#### 4. Run the Project

**Frontend:**
```bash
cd ../bytecore
npm run dev
```

**Backend:**
```bash
cd ../server
npm run dev
```

---

## Project Features

### Frontend
- Built with React.
- Modern UI using components.

### Backend
- Built with Node.js and Express.
- MongoDB for database.
- Environment variables managed through `.env`.

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---


## Contact
If you have any questions or feedback, feel free to contact:
- **Author**: Ayush Verma
- **Email**: [vayush947@gmail.com](mailto:vayush947@gmail.com)

