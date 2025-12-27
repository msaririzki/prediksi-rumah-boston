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
      step1: "Lokasi & Lingkungan",
      step2: "Fisik & Akses",
      step3: "Sosial & Ekonomi",
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
        CRIM: { label: "Tingkat Kriminalitas", desc: "Per kapita menurut kota", tooltip: "Angka kriminalitas yang lebih rendah biasanya meningkatkan nilai properti." },
        ZN: { label: "Zona Residensial", desc: "Lahan > 25,000 sq.ft", tooltip: "Proporsi lahan perumahan untuk lot besar." },
        INDUS: { label: "Proporsi Industri", desc: "Bisnis non-ritel", tooltip: "Area industri yang tinggi dapat menurunkan nilai hunian." },
        CHAS: { label: "Tepi Sungai?", desc: "Charles River", opt0: "Bukan Tepi Sungai", opt1: "Tepi Sungai", tooltip: "Properti di tepi sungai memiliki nilai premium." },
        NOX: { label: "Polusi (NOx)", desc: "Konsentrasi oksida nitrat", tooltip: "Kualitas udara berpengaruh pada kenyamanan." },
        RM: { label: "Jumlah Kamar", desc: "Rata-rata per hunian", tooltip: "Faktor paling signifikan dalam penentuan harga." },
        AGE: { label: "Usia Bangunan", desc: "Dibangun sebelum 1940", tooltip: "Bangunan tua mungkin memiliki nilai sejarah atau butuh renovasi." },
        DIS: { label: "Jarak Kerja", desc: "Ke 5 pusat kerja Boston", tooltip: "Akses ke pusat lapangan kerja utama." },
        RAD: { label: "Akses Tol", desc: "Indeks aksesibilitas", tooltip: "Kemudahan akses ke jalan raya utama." },
        TAX: { label: "Pajak Properti", desc: "Per $10,000", tooltip: "Nilai pajak penuh per $10,000." },
        PTRATIO: { label: "Rasio Murid-Guru", desc: "Berdasarkan kota", tooltip: "Kualitas pendidikan (rasio lebih rendah lebih baik)." },
        B: { label: "Indeks Demografi", desc: "Bk - 0.63", tooltip: "Proporsi demografis kulit hitam (variabel historis data)." },
        LSTAT: { label: "Status Ekonomi", desc: "% Populasi status rendah", tooltip: "Persentase populasi kelas bawah di area tersebut." }
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
      step1: "Location & Environment",
      step2: "Physical & Access",
      step3: "Social & Economic",
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
        CRIM: { label: "Crime Rate", desc: "Per capita by town", tooltip: "Lower crime rates typically increase property value." },
        ZN: { label: "Residential Zone", desc: "Lots > 25,000 sq.ft", tooltip: "Proportion of residential land zoned for large lots." },
        INDUS: { label: "Industrial Proportion", desc: "Non-retail business", tooltip: "High industrial areas may lower residential value." },
        CHAS: { label: "River Bound?", desc: "Charles River", opt0: "No", opt1: "Yes", tooltip: "Properties bounding the river attract a premium." },
        NOX: { label: "Pollution (NOx)", desc: "Nitric oxide concentration", tooltip: "Air quality affects livability and value." },
        RM: { label: "Room Count", desc: "Average per dwelling", tooltip: "The most significant factor in pricing." },
        AGE: { label: "Building Age", desc: "Built prior to 1940", tooltip: "Older buildings feature historic value or renovation needs." },
        DIS: { label: "Employment Distance", desc: "To 5 Boston centers", tooltip: "Weighted distances to five employment centres." },
        RAD: { label: "Highway Access", desc: "Accessibility index", tooltip: "Index of accessibility to radial highways." },
        TAX: { label: "Property Tax", desc: "Per $10,000", tooltip: "Full-value property-tax rate per $10,000." },
        PTRATIO: { label: "Pupil-Teacher Ratio", desc: "By town", tooltip: "Education quality indicator (lower is better)." },
        B: { label: "Demographic Index", desc: "Bk - 0.63", tooltip: "Proportion of black demographic (historical data variable)." },
        LSTAT: { label: "Economic Status", desc: "% Lower status population", tooltip: "% lower status of the population." }
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
