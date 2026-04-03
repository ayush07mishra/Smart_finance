# Finance Dashboard Backend

## 📌 Overview

This project is a backend system for a finance dashboard that allows users to manage financial transactions and view summarized insights. It demonstrates API design, role-based access control, and data processing.

---

## 🚀 Features

### 👤 User & Role Management

* Register and login users
* Role-based access control:

  * **Admin** → Full access
  * **Analyst** → Read access + insights
  * **Viewer** → Dashboard only
* User status handling (active/inactive)

---

### 💰 Transaction Management

* Create, update, delete transactions
* Fields:

  * Amount
  * Type (income/expense)
  * Category (auto-detected)
  * Notes
  * Date
* Filtering:

  * By type
  * By category

---

### 📊 Dashboard APIs

* Total income
* Total expenses
* Net balance
* Category-wise breakdown

---

### 🔐 Access Control

* Middleware-based role restriction
* Only admin can modify transactions
* Secure APIs using JWT authentication

---

### ⚙️ Additional Features

* Auto categorization based on keywords
* Input validation and error handling
* Clean API structure

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (password hashing)

---

## 📁 Project Structure

```
finance-dashboard/
│── server.js
│── config/
│   └── db.js
│── models/
│   ├── User.js
│   └── Transaction.js
│── middleware/
│   ├── auth.js
│   └── role.js
│── routes/
│   ├── authRoutes.js
│   ├── transactionRoutes.js
│   └── dashboardRoutes.js
│── controllers/
│   ├── authController.js
│   ├── transactionController.js
│   └── dashboardController.js
│── utils/
│   └── categorize.js
│── .env
```

---

## ⚙️ Setup Instructions

### 1. Clone Project

```
git clone <your-repo-link>
cd finance-dashboard
```

### 2. Install Dependencies

```
npm install
```

### 3. Create `.env` file

```
MONGO_URI=your_mongodb_url
JWT_SECRET=secret123
```

### 4. Run Server

```
npm start
```

---

## 🔑 API Endpoints

### Auth

**Register**

```
POST /api/auth/register
```

**Login**

```
POST /api/auth/login
```

---

### Transactions

**Create Transaction**

```
POST /api/transactions
Authorization: token
```

**Get Transactions**

```
GET /api/transactions
```

**Update Transaction**

```
PUT /api/transactions/:id
```

**Delete Transaction**

```
DELETE /api/transactions/:id
```

---

### Dashboard

**Summary**

```
GET /api/dashboard/summary
```

**Category Breakdown**

```
GET /api/dashboard/categories
```

---

## 🧠 Assumptions

* Default registered users are assigned admin role for testing
* Simple keyword-based categorization is used
* Authentication is handled via JWT tokens

---

## ⚠️ Error Handling

* Returns appropriate HTTP status codes
* Handles:

  * Invalid input
  * Unauthorized access
  * Missing resources

---

## 📈 Future Improvements

* Budget limits per category
* Monthly trend analysis
* Top spending categories
* Pagination and search
* Unit testing

---

## 📌 Conclusion

This project demonstrates backend design, API structuring, access control, and financial data processing in a clean and maintainable way.
