setlocal
cd /d %1
set dateTime=%DATE%
set dateTime=%dateTime:/=-%
set dateTime=%dateTime: =-%
set /p url=<%cd%/data/lastURL
echo %url%
echo %dateTime%
cls
%cd%/download/youtube-dl.exe --restrict-filenames -f 136+140 -o %cd%/download/%dateTime% %url%
