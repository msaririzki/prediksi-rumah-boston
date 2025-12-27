import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { ChevronRight, Home, Activity, MapPin, CheckCircle } from 'lucide-react';
import PriceMeter from './PriceMeter';
import Tooltip from './Tooltip';
import SkeletonLoader from './SkeletonLoader';
import Toast from './Toast';
import { useGlobal } from '../contexts/LanguageContext';

const MultiStepForm = () => {
  const { 
    t, 
    formatCurrency, 
    setGlobalPrediction, 
    setGlobalFormData 
  } = useGlobal();

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  // --- Dynamic Steps ---
  const steps = useMemo(() => [
    {
      id: 1,
      title: t('form.step1'),
      icon: <MapPin className="w-5 h-5" />,
      fields: [
        { name: 'CRIM', label: t('form.fields.CRIM.label'), type: 'number', step: '0.01', desc: t('form.fields.CRIM.desc'), tooltip: t('form.fields.CRIM.tooltip') },
        { name: 'ZN', label: t('form.fields.ZN.label'), type: 'number', step: '0.1', desc: t('form.fields.ZN.desc'), tooltip: t('form.fields.ZN.tooltip') },
        { name: 'INDUS', label: t('form.fields.INDUS.label'), type: 'number', step: '0.1', desc: t('form.fields.INDUS.desc'), tooltip: t('form.fields.INDUS.tooltip') },
        { name: 'CHAS', label: t('form.fields.CHAS.label'), type: 'select', options: [{val: 0, show: t('form.fields.CHAS.opt0')}, {val: 1, show: t('form.fields.CHAS.opt1')}], desc: t('form.fields.CHAS.desc'), tooltip: t('form.fields.CHAS.tooltip') },
        { name: 'NOX', label: t('form.fields.NOX.label'), type: 'number', step: '0.01', desc: t('form.fields.NOX.desc'), tooltip: t('form.fields.NOX.tooltip') },
      ]
    },
    {
      id: 2,
      title: t('form.step2'),
      icon: <Home className="w-5 h-5" />,
      fields: [
        { name: 'RM', label: t('form.fields.RM.label'), type: 'number', step: '0.1', desc: t('form.fields.RM.desc'), tooltip: t('form.fields.RM.tooltip') },
        { name: 'AGE', label: t('form.fields.AGE.label'), type: 'number', step: '0.1', desc: t('form.fields.AGE.desc'), tooltip: t('form.fields.AGE.tooltip') },
        { name: 'DIS', label: t('form.fields.DIS.label'), type: 'number', step: '0.1', desc: t('form.fields.DIS.desc'), tooltip: t('form.fields.DIS.tooltip') },
        { name: 'RAD', label: t('form.fields.RAD.label'), type: 'number', step: '1', desc: t('form.fields.RAD.desc'), tooltip: t('form.fields.RAD.tooltip') },
      ]
    },
    {
      id: 3,
      title: t('form.step3'),
      icon: <Activity className="w-5 h-5" />,
      fields: [
        { name: 'TAX', label: t('form.fields.TAX.label'), type: 'number', step: '1', desc: t('form.fields.TAX.desc'), tooltip: t('form.fields.TAX.tooltip') },
        { name: 'PTRATIO', label: t('form.fields.PTRATIO.label'), type: 'number', step: '0.1', desc: t('form.fields.PTRATIO.desc'), tooltip: t('form.fields.PTRATIO.tooltip') },
        { name: 'B', label: t('form.fields.B.label'), type: 'number', step: '0.1', desc: t('form.fields.B.desc'), tooltip: t('form.fields.B.tooltip') },
        { name: 'LSTAT', label: t('form.fields.LSTAT.label'), type: 'number', step: '0.1', desc: t('form.fields.LSTAT.desc'), tooltip: t('form.fields.LSTAT.tooltip') },
      ]
    }
  ], [t]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };



  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setPrediction(null);
      setGlobalPrediction(null); // Reset global
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate luxury "processing" delay
    setTimeout(async () => {
      try {
        const response = await axios.post('/api/predict', formData);
        // Backend now returns { price: float, confidence: int }
        // We store the whole object in local state to access .confidence, 
        // OR we just assume prediction state holds the price but we need confidence too.
        // Let's change prediction state to hold the object or handle it.
        // Current code: setPrediction(response.data.price); -> numeric
        // Changing strategy: setPrediction({ price: ..., confidence: ... })
        setPrediction({ 
            amount: response.data.price, 
            confidence: response.data.confidence 
        });
        
        // --- Sync Global State for WhatsApp ---
        setGlobalPrediction(response.data.price);
        setGlobalFormData(formData);

      } catch (error) {
        console.error("Prediction Error", error);
        alert("Backend connection failed.");
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  // --- Dynamic Icon Scale based on Rooms (RM) ---
  const rmValue = parseFloat(formData['RM'] || 0);
  const iconScale = Math.min(Math.max(rmValue / 4, 0.8), 1.5); // Scale between 0.8x and 1.5x

  const [toast, setToast] = useState(null);

  const handleNext = () => {
    // Validation: Check if at least one field in the current step has a value
    const currentFields = steps[currentStep].fields;
    const isStepValid = currentFields.some(field => {
        const val = formData[field.name];
        return val !== undefined && val !== null && val !== '';
    });

    if (!isStepValid) {
        setToast({ message: t('form.error_empty'), type: 'error' });
        return;
    }

    if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
    } else {
        handleSubmit();
    }
  };

  return (
    <div className="w-full h-full flex flex-col relative">
      <AnimatePresence>
        {toast && (
          <Toast 
            message={toast.message} 
            type={toast.type} 
            onClose={() => setToast(null)} 
          />
        )}
      </AnimatePresence>

      {/* Dynamic Background Icon for Step 2 */}
      {currentStep === 1 && !prediction && (
        <motion.div 
          className="absolute right-0 top-10 pointer-events-none opacity-5 z-0"
          animate={{ scale: iconScale }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Home className="w-60 h-60 text-white" />
        </motion.div>
      )}

      {/* Stepper Header */}
      {!prediction && !loading && (
        <div className="mb-8 px-4 relative z-10">
          <div className="flex justify-between items-center relative max-w-sm mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 -z-0"></div>
            <motion.div 
              className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-emerald-500 to-amber-400 -translate-y-1/2"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            ></motion.div>

            {steps.map((step, idx) => (
              <motion.div 
                key={step.id} 
                className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    idx <= currentStep 
                    ? 'bg-emerald-500 border-emerald-500 text-white shadow-glow' 
                    : 'bg-[#1a1a1a] border-white/20 text-gray-500'
                }`}
                animate={{ scale: idx === currentStep ? 1.2 : 1 }}
              >
                {idx < currentStep ? (
                    <CheckCircle className="w-4 h-4" />
                ) : (
                    <span className="text-[10px] font-bold">{idx + 1}</span>
                )}
              </motion.div>
            ))}
          </div>
          <motion.div 
             key={currentStep}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-center mt-6"
          >
             <h3 className="text-xl font-bold text-white">{steps[currentStep].title}</h3>
             <p className="text-gray-400 text-sm mt-1">{t('form.instr_title')}</p>
          </motion.div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-grow overflow-y-auto custom-scrollbar px-2 sm:px-4 pb-4 relative z-10">
        <AnimatePresence mode='wait'>
          {loading ? (
             <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
             >
                <SkeletonLoader />
                <p className="text-center text-amber-400 font-mono text-sm animate-pulse mt-4">
                  {t('form.processing')}
                </p>
             </motion.div>
          ) : prediction === null ? (
            <motion.div
              key={currentStep}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {steps[currentStep].fields.map((field, i) => (
                <motion.div 
                  key={field.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex flex-col relative group"
                >
                  <label className="text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider pl-1 flex items-center">
                    {field.label}
                    {field.tooltip && <Tooltip text={field.tooltip} />}
                  </label>
                  
                  {field.type === 'select' ? (
                    <select
                      name={field.name}
                      value={formData[field.name] || 0}
                      onChange={handleChange}
                      className="glass-input w-full p-4 rounded-xl text-sm appearance-none cursor-pointer"
                    >
                      {field.options.map((opt) => (
                        <option key={opt.val} value={opt.val} className="bg-gray-900 text-white">{opt.show}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="number"
                      name={field.name}
                      step={field.step}
                      value={formData[field.name] || ''}
                      onChange={handleChange}
                      placeholder="0"
                      className="glass-input w-full p-4 rounded-xl text-lg font-mono font-medium focus:scale-[1.02] transition-transform"
                    />
                  )}
                  <span className="text-[10px] text-gray-500 mt-1.5 pl-1">{field.desc}</span>
                </motion.div>
              ))}
            </motion.div>
          ) : (
             <motion.div
              key="result"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
              className="flex flex-col items-center justify-center text-center py-4 h-full"
            >
              {/* Luxury Result Card */}
              <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3">
                   <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 px-2 py-1 rounded border border-amber-500/30">
                     {t('form.confidence')}: {prediction.confidence || 94}%
                   </span>
                </div>

                <div className="bg-emerald-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30 shadow-lg">
                  <Home className="w-8 h-8 text-emerald-400" />
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight">
                  {formatCurrency(prediction.amount)}
                </h2>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-6">{t('form.result_label')}</p>
                
                <PriceMeter price={prediction.amount} />
                
                {/* Comparison Card */}
                <div className="mt-6 flex items-center justify-center space-x-2 text-xs text-gray-400 bg-black/20 p-3 rounded-lg">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span>{prediction.amount > 22.5 ? t('form.comparison_high') : t('form.comparison_low')}</span>
                </div>
              </div>

              <button 
                onClick={() => { setPrediction(null); setCurrentStep(0); setFormData({}); setGlobalPrediction(null); }}
                className="mt-8 px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                {t('form.new_analysis')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Nav */}
      {!prediction && !loading && (
        <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center px-1">
            <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`text-sm font-medium transition-colors hover:text-white ${
                currentStep === 0 ? 'opacity-0 cursor-default' : 'text-gray-500'
                }`}
            >
                {t('form.back')}
            </button>
            
            <button
                onClick={handleNext}
                className="group flex items-center space-x-3 px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold shadow-lg shadow-emerald-900/40 transition-all hover:scale-105 active:scale-95"
            >
                <span>{currentStep === steps.length - 1 ? t('form.calc') : t('form.next')}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
