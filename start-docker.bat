@echo off
echo ==============================================
echo   BostonPrime - Luxury AI Property Valuation
echo ==============================================
echo.
echo [1/2] Building and Starting Containers...
docker-compose up -d --build

echo.
echo [2/2] Verifying status...
docker-compose ps

echo.
echo ==============================================
echo   SUCCESS! Application is running.
echo ==============================================
echo.
echo   Frontend: http://localhost:5173
echo   Backend:  http://localhost:8000/docs
echo.
echo Press any key to close this window...
pause >nul
