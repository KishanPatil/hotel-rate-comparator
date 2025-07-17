# 🏨 Hotel Rate Comparator

This backend service compares hotel rates from two suppliers using [Temporal.io](https://temporal.io/) workflows. It fetches mock data from Supplier A and Supplier B, deduplicates the hotel listings based on pricing, and returns the best options.

---

## 🚀 Features

- 🔁 Asynchronous workflows with Temporal.io
- 🤝 Parallel calls to Supplier A & B
- 🧠 Smart deduplication logic
- ⚙️ REST API using Express.js
- 🐳 Dockerized setup for local development

---

## 📦 Tech Stack

- Node.js
- Express.js
- Temporal.io SDK
- TypeScript
- Docker + Docker Compose

---

## 🧱 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Temporal CLI](https://docs.temporal.io/tctl) (Optional for advanced usage)

---

## ⚙️ Installation

```bash
git clone https://github.com/KishanPatil/hotel-rate-comparator.git
cd hotel-rate-comparator
npm install
```

---

## 🐳 Run with Docker

This project uses `docker-compose` to run the Temporal server.

```bash
docker-compose up --build
```
The API will be available at [http://localhost:3000].
The Temporal Web UI will be available at [http://localhost:7233]

---

## ▶️ Start Temporal Worker & API Server

### Install Temporal CLI and run:
```bash
temporal server start-dev
```

### Start the Worker:

```bash
npm run worker
```

### Start the Express API Server:

```bash
npm run dev
```

API will be available at: [http://localhost:3000]

---

## 📡 API Endpoint

**GET** `/hotels/search?city=Delhi`

* **Query Param:** `city` – name of the city
* **Returns:** Deduplicated hotel results from Supplier A & B

---

## 🧪 Sample Response

```json
[
  {
    "hotelId": "a1",
    "name": "Holtin",
    "price": 6000,
    "city": "delhi",
    "commissionPct": 10,
    "supplier": "Supplier A"
  },
  {
    "hotelId": "b1",
    "name": "Holtin",
    "price": 5000,
    "city": "delhi",
    "commissionPct": 10,
    "supplier": "Supplier B"
  }
]
```

---

## 🧠 Project Structure

```
├── src
│   ├── activities/              # Supplier A & B mocks
│   ├── services/                # Deduplication logic
│   ├── workflows/              # Temporal workflows
│   ├── routes/                 # Express API routes
│   ├── temporal-client.ts      # Starts workflow from API
│   ├── temporal-worker.ts      # Worker setup
│   └── index.ts                # Express server entry point
├── docker-compose.yml
├── package.json
└── README.md
```

---

## 🛠️ Scripts

```bash
npm run dev         # Run Express API Server
npm run worker      # Run Temporal Worker
```

---

## 📚 References

* [Temporal Documentation](https://docs.temporal.io/)
* [Express.js](https://expressjs.com/)

---

## 🧑‍💻 Author

Made with ❤️ by Kishan Patil (https://github.com/KishanPatil/hotel-rate-comparator)


