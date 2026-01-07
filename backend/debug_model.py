import joblib
import sys
import os
import numpy as np

try:
    model = joblib.load("boston_model.pkl")
    
    # Defaults from main.py
    # ['CRIM', 'ZN', 'INDUS', 'CHAS', 'NOX', 'RM', 'AGE', 'DIS', 'RAD', 'TAX', 'PTRATIO', 'B', 'LSTAT']
    defaults = {
        'CRIM': 3.61, 'ZN': 11.36, 'INDUS': 11.14, 'CHAS': 0.0, 'NOX': 0.55, 
        'RM': 6.28, 'AGE': 68.57, 'DIS': 3.79, 'RAD': 9.55, 'TAX': 408.24, 
        'PTRATIO': 18.46, 'B': 356.67, 'LSTAT': 12.65
    }
    
    # 1. Test "Bad" House
    # Low RM, High Crime, Old, High Pollution, Poor Access, High Tax
    bad_input = defaults.copy()
    bad_input['RM'] = 3.0       # Very small
    bad_input['CRIM'] = 20.0    # High crime
    bad_input['NOX'] = 0.8      # High pollution
    bad_input['AGE'] = 100.0    # Very old
    bad_input['RAD'] = 24.0     # High usage (often correlates with industrial) or 1? 
                                # Actually in Boston, RAD 24 is high index but often correlates with lower price areas (inner city highway access)?
    bad_input['LSTAT'] = 30.0   # High lower status (hidden field in app, but just testing model behavior)
                                # Wait, in app LSTAT is hidden and fixed to 12.65. 
                                # So users CANNOT change LSTAT.
    
    # Let's test with App Constraints (LSTAT fixed)
    app_bad_input = defaults.copy()
    app_bad_input['RM'] = 2.0   # User sets rooms to 2
    app_bad_input['CRIM'] = 10.0 # User sets crime to High (10)
    app_bad_input['NOX'] = 0.75 # User sets pollution High
    app_bad_input['AGE'] = 90.0 # User sets Age Old
    
    feature_order = ['CRIM', 'ZN', 'INDUS', 'CHAS', 'NOX', 'RM', 'AGE', 'DIS', 'RAD', 'TAX', 'PTRATIO', 'B', 'LSTAT']
    
    input_vector = [app_bad_input[f] for f in feature_order]
    
    print(f"Testing App-Valid 'Bad' Input: {input_vector}")
    pred = model.predict([input_vector])
    print(f"Prediction: {pred[0]}")
    
    if pred[0] < 0:
         print("RESULT: NEGATIVE")
    else:
         print("RESULT: POSITIVE")

except Exception as e:
    print(f"Error: {e}")
