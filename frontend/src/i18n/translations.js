export const translations = {
  id: {
    hero: {
      badge: "Valuasi Berbasis AI",
      title_start: "Temukan ",
      title_mid: "Nilai Sejati",
      title_end: " Hunian Mewah.",
      desc: "Menggunakan algoritma machine learning canggih untuk memberikan estimasi harga properti yang presisi di area Greater Boston. Akurasi bertemu dengan kemewahan.",
      footer_est: "Est. Data 1978",
      version: "v2.1.0"
    },
    form: {
      step1: "Karakteristik Rumah",
      step2: "Lokasi",
      step3: "Lingkungan",
      instr_title: "Lengkapi data properti untuk estimasi akurat",
      back: "Kembali",
      next: "Lanjut",
      calc: "Kalkulasi",
      processing: "Menganalisa Pasar...",
      result_label: "Estimasi Nilai Pasar Saat Ini",
      new_analysis: "Analisa Baru",
      confidence: "Kepercayaan AI",
      comparison_high: "15% lebih mahal dari rata-rata lingkungan",
      comparison_low: "12% lebih hemat dari properti serupa",
      comparison_avg: "Sesuai dengan rata-rata pasar",
      fields: {
        RM: { label: "Jumlah Kamar", desc: "Rata-rata per hunian", tooltip: "Faktor paling signifikan dalam penentuan harga.", placeholder: "Contoh: 6" },
        AGE: { 
          label: "Usia Bangunan", 
          desc: "Tingkat kebaruan unit", 
          tooltip: "Bangunan baru biasanya memiliki nilai lebih tinggi.",
          options: { new: "Baru / Renovasi", moderate: "Sedang", old: "Lama / Butuh Renovasi" }
        },
        DIS: { 
          label: "Jarak ke Pusat Kota", 
          desc: "Akses ke pusat bisnis", 
          tooltip: "Jarak ke pusat lapangan kerja utama.",
          options: { near: "Dekat (< 2km)", medium: "Sedang (2-5km)", far: "Jauh (> 5km)" }
        },
        RAD: { 
          label: "Akses Jalan Tol", 
          desc: "Konektivitas jalan raya", 
          tooltip: "Kemudahan akses ke jalan raya utama.",
          options: { good: "Baik (Langsung)", average: "Sedang", poor: "Buruk / Jauh" }
        },
        NOX: { 
          label: "Tingkat Polusi", 
          desc: "Kualitas udara lingkungan", 
          tooltip: "Kualitas udara berpengaruh pada kenyamanan (NOx).",
          options: { light: "Ringan", moderate: "Sedang", high: "Tinggi" }
        },
        CHAS: { label: "Tepi Sungai?", desc: "Charles River", opt0: "Bukan Tepi Sungai", opt1: "Tepi Sungai", tooltip: "Properti di tepi sungai memiliki nilai premium." },
        CRIM: { 
          label: "Tingkat Kriminalitas", 
          desc: "Keamanan lingkungan", 
          tooltip: "Angka kriminalitas yang lebih rendah meningkatkan nilai properti.",
          options: { low: "Rendah", medium: "Sedang", high: "Tinggi" }
        },
        TAX: { label: "Pajak Properti (Opsional)", desc: "Per $10,000", tooltip: "Nilai pajak penuh per $10,000.", placeholder: "Contoh: 300" }
      },
      error_empty: "Mohon isi minimal satu data di step ini sebelum melanjutkan."
    },
    meter: {
      market_pos: "Posisi Pasar",
      low: "Di Bawah Rata-rata",
      avg: "Rata-rata Pasar",
      high: "Properti Premium",
      avg_label: "Rata-rata"
    },
    wa: {
      bubble: "Inginn Konsultasi?",
      msg_start: "Halo bang, saya baru saja memprediksi rumah dengan",
      msg_mid: "kamar dan hasilnya adalah",
      msg_end: "Saya tertarik konsultasi lebih lanjut!"
    }
  },
  en: {
    hero: {
      badge: "AI Powered Valuation",
      title_start: "Discover the ",
      title_mid: "True Value",
      title_end: " of Luxury.",
      desc: "Utilizing advanced machine learning algorithms to provide precise property valuations in the Greater Boston area. Accuracy meets elegance.",
      footer_est: "Est. 1978 Data",
      version: "v2.1.0"
    },
    form: {
      step1: "Property Characteristics",
      step2: "Location",
      step3: "Environment",
      instr_title: "Complete property data for accurate estimation",
      back: "Back",
      next: "Next",
      calc: "Calculate",
      processing: "Analyzing Market...",
      result_label: "Estimated Current Market Value",
      new_analysis: "New Analysis",
      confidence: "AI Confidence",
      comparison_high: "15% higher than neighborhood avg",
      comparison_low: "12% savings vs similar properties",
      comparison_avg: "Aligned with market average",
      fields: {
        RM: { label: "Room Count", desc: "Average per dwelling", tooltip: "The most significant factor in pricing.", placeholder: "Example: 6" },
        AGE: { 
          label: "Building Age", 
          desc: "Unit newness level", 
          tooltip: "Newer buildings typically value higher.",
          options: { new: "New / Renovated", moderate: "Moderate", old: "Old / Needs Renovation" }
        },
        DIS: { 
          label: "Distance to City Center", 
          desc: "Access to business hubs", 
          tooltip: "Distance to main employment centers.",
          options: { near: "Near (< 2km)", medium: "Medium (2-5km)", far: "Far (> 5km)" }
        },
        RAD: { 
          label: "Highway Access", 
          desc: "Road connectivity", 
          tooltip: "Accessibility to radial highways.",
          options: { good: "Good (Direct)", average: "Average", poor: "Poor / Far" }
        },
        NOX: { 
          label: "Pollution Level", 
          desc: "Environmental air quality", 
          tooltip: "Air quality affects livability (NOx).",
          options: { light: "Light", moderate: "Moderate", high: "High" }
        },
        CHAS: { label: "River Bound?", desc: "Charles River", opt0: "No", opt1: "Yes", tooltip: "Properties bounding the river attract a premium." },
        CRIM: { 
          label: "Crime Rate", 
          desc: "Neighborhood safety", 
          tooltip: "Lower crime rates increase property value.",
          options: { low: "Low", medium: "Medium", high: "High" }
        },
        TAX: { label: "Property Tax (Optional)", desc: "Per $10,000", tooltip: "Full-value property-tax rate per $10,000.", placeholder: "Example: 300" }
      },
      error_empty: "Please fill at least one field in this step before proceeding."
    },
    meter: {
      market_pos: "Market Position",
      low: "Below Market Average",
      avg: "Average Market Value",
      high: "Premium Property",
      avg_label: "Avg"
    },
    wa: {
      bubble: "Ask AI Agent?",
      msg_start: "Hello BostonAI, I just predicted a home with",
      msg_mid: "rooms resulting in",
      msg_end: "I'm interested in further consultation!"
    }
  }
};
