setlocal
@ECHO off
cd /d %1
set dateTime=%DATE%-%TIME%
set dateTime=%dateTime:/=-%
set dateTime=%dateTime: =-%
set dateTime=%dateTime::=-%
set dateTime=%dateTime:.=-%
set /p url=<%cd%/data/lastURL
if exist %cd%/download/utils/ffmpeg.exe (
    rem FFMPEG detected
) else (
    rem FFMPEG not detected
    %cd%/download/utils/wget.exe https://www.dropbox.com/s/eu1d2ckdvizxrhh/ffmpeg.exe?dl=1
    move "ffmpeg.exe@dl=1" %cd%/download/utils/ffmpeg.exe
)
cls
%cd%/download/youtube-dl.exe --restrict-filenames -f 136+140 --ffmpeg-location %cd%/download/utils/ffmpeg.exe -o %cd%/download/%dateTime% %url%
