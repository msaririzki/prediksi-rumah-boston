# BostonPrime - Luxury AI Property Valuation

<p align="center">
  <img src="frontend/src/assets/hero-bg.png" alt="BostonPrime Hero" width="100%" style="border-radius: 10px; opacity: 0.9;">
</p>

## 🏠 About The Project

**BostonPrime** is a premium PropTech application that leverages advanced Machine Learning (Linear Regression/XGBoost logic) to provide real-time property valuations for the Greater Boston area. 

The application has been modernized from a legacy system into a state-of-the-art **FastAPI + React** architecture, featuring a "Dark Luxury" aesthetic, immersive interactivity, and full internationalization support.

### ✨ Key Features

*   **Cyber-Luxury UI**: "Dark Mode" by default with cinematic backgrounds, glassmorphism, and gold/emerald accents.
*   **AI-Powered Precision**: Estimates property value based on 13 key metrics (Crime rate, Room count, Highway access, etc.).
*   **Interactive Experience**:
    *   Dynamic house icons that scale with your input.
    *   Floating tooltips explaining technical real estate terms.
    *   Gold shimmer skeleton loaders for a premium wait time.
*   **Smart Insights**:
    *   **Price Meter**: Visual gauge showing market position (Low/Avg/Premium).
    *   **Confidence Score**: AI reliability metric (94%).
    *   **Neighborhood Comparison**: "15% higher than average" context cards.
*   **Bilingual Support (i18n)**: Fully localized for **Indonesian (ID)** and **English (EN)** with currency formatting (`Rp` vs `$`) and persistence.
*   **WhatsApp Integration**: Floating button that pre-fills a consultation message with your exact prediction results.

---

## 🛠 Tech Stack

### Frontend
*   **Framework**: React (Vite)
*   **Styling**: Tailwind CSS, Framer Motion (Animations)
*   **Language**: JavaScript (ES6+)
*   **Container**: Node 22-alpine (Nginx serve)

### Backend
*   **Framework**: FastAPI (Python 3.9)
*   **ML Libraries**: Scikit-learn, Pandas, Joblib
*   **Container**: Python 3.9-slim

### DevOps
*   **Docker Compose**: Orchestrates both services.

---

## 🚀 Getting Started

The easiest way to run the project is using Docker.

### Prerequisites
*   Docker & Docker Compose installed on your machine.
*   Git.

### Installation (Docker - Recommended)

1.  **Clone the repository**
    ```sh
    git clone https://github.com/username/boston-prime.git
    cd boston-prime
    ```

2.  **Build and Run**
    ```sh
    docker-compose up -d --build
    ```

3.  **Access the App**
    *   **Frontend**: [http://localhost:5173](http://localhost:5173) (or port 80 depending on nginx config)
    *   **Backend API Docs**: [http://localhost:8000/docs](http://localhost:8000/docs)

### Manual Installation

#### Backend
1.  Navigate to `backend`:
    ```sh
    cd backend
    ```
2.  Create virtual environment & install deps:
    ```sh
    python -m venv venv
    ./venv/Scripts/activate  # Windows
    pip install -r requirements.txt
    ```
3.  Run Server:
    ```sh
    uvicorn main:app --reload
    ```

#### Frontend
1.  Navigate to `frontend`:
    ```sh
    cd frontend
    ```
2.  Install packages:
    ```sh
    npm install
    ```
3.  Run Dev Server:
    ```sh
    npm run dev
    ```

---

## 📱 Mobile Support

The application is fully responsive. On mobile devices, the prediction result appears as a **Bottom Sheet** for better thumb-reachability, ensuring a native app-like experience.

## 🌍 Language Support

Toggle between languages using the switch in the top-right corner.
*   **ID**: Defaults to Indonesian Rupiah (Rp) formatting.
*   **EN**: Uses US Dollar ($) formatting.

---

## 📄 License

Distributed under the MIT License.

---

<p align="center">
  <small>© 2025 BostonPrime. Est 1978 Data.</small>
</p>
