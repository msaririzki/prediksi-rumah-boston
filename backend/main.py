from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load Model & List Fitur
# Pastikan kedua file ini ada di folder yang sama
try:
    model = joblib.load("boston_model.pkl")
    features = joblib.load("features.pkl")
    print("Model and features loaded successfully.")
except Exception as e:
    print(f"Error loading model: {e}")
    # Fallback/Dummy for build process if files missing, though they should be there
    model = None
    features = []

# Nilai Rata-rata (Mean) dari Dataset Boston
# Digunakan jika user mengosongkan input
DEFAULTS = {
    'CRIM': 3.61,    # Kriminalitas
    'ZN': 11.36,     # Lahan luas
    'INDUS': 11.14,  # Industri
    'CHAS': 0.0,     # Tepi sungai (0=Tidak)
    'NOX': 0.55,     # Polusi
    'RM': 6.28,      # Kamar (Paling penting)
    'AGE': 68.57,    # Umur bangunan
    'DIS': 3.79,     # Jarak kerja
    'RAD': 9.55,     # Akses tol
    'TAX': 408.24,   # Pajak
    'PTRATIO': 18.46,# Rasio guru
    'B': 356.67,     # Demografi
    'LSTAT': 12.65   # Status ekonomi
}

@app.post("/predict")
def predict(data: dict):
    if model is None:
        return {"error": "Model not loaded"}

    final_input = []
    
    # Loop sesuai urutan fitur yang diharapkan model (features.pkl)
    for f in features:
        # Cek apakah user mengirim data untuk fitur ini?
        val = data.get(f)
        
        # Logika Opsional:
        # Jika data kosong (None) atau string kosong (""), pakai nilai DEFAULT
        if val is None or val == "":
            val = DEFAULTS.get(f, 0)
        
        # Masukkan ke list final sebagai angka float
        try:
            final_input.append(float(val))
        except ValueError:
            final_input.append(DEFAULTS.get(f, 0))

    # Konversi ke format numpy array untuk prediksi
    X_input = np.array([final_input])
    
    # Prediksi
    prediction = model.predict(X_input)
    predicted_price = float(prediction[0])

    # --- Hitung Confidence Score (Simulasi Dinamis) ---
    # Logika: Semakin jauh nilai input dari rata-rata (DEFAULTS), semakin rendah confidence score.
    # Namun dibatasi agar tidak terlalu rendah (misal min 75%, max 98%)
    
    defaults_values = [DEFAULTS.get(f, 0) for f in features]
    input_values = final_input
    
    # Hitung Euclidean distance sederhana yang dinormalisasi (sangat simple heuristic)
    # Kita tidak pakai standar deviasi asli, jadi kita estimasi kasar saja.
    dist = np.linalg.norm(np.array(input_values) - np.array(defaults_values))
    
    # Base confidence 98%, dikurangi berdasarkan distance
    # Faktor bagi (denominator) disesuaikan agar distance wajar (~100-500) mengurangi 5-20%
    confidence_penalty = min(dist / 50, 20) # Max penalty 20%
    confidence_score = max(int(98 - confidence_penalty), 75)

    return {
        "price": predicted_price,
        "confidence": confidence_score
    }