@echo off

SET /P serverkey=Enter Server Key:
SET /P gateway=Enter Gateway Address:

goto check_Permissions

:check_Permissions

    net session >nul 2>&1
    if %ERRORLEVEL% == 0 (


        echo Removing previous nMon Agent Service
        net stop "nMon Agent"
        "%~dp0nodejs\node.exe" "%~dp0service.js" --remove


        echo Configuring nMon Agent Service
        "%~dp0nodejs\node.exe" "%~dp0service.js" --add %serverkey% %gateway%

        echo Starting nMon Agent Service
        net start "nMon Agent"

        echo Done

    ) else (
        echo Failure: Administrative permissions required.
        echo Right click on this file and select "Run as administrator".
    )

    pause >nul
