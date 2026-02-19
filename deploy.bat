@echo off
echo Building Tree Services Website for Deployment...
echo.

echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo Running build...
call npm run build
if %errorlevel% neq 0 (
    echo Error: Build failed
    pause
    exit /b 1
)

echo.
echo Build completed successfully!
echo Output directory: out/
echo.
echo Ready for deployment to:
echo - Netlify: Upload the 'out' folder
echo - Vercel: Push to Git and connect repository
echo - Other hosts: Upload contents of 'out' folder
echo.
pause