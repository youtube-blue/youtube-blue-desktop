# YouTube Blue Desktop (BETA)

**YouTube Blue** is a tweaked open-source YouTube client with ad-blocking, a pretty theme, picture in picture mode, video downloading and so many fancy fuctions :)

*Disclaimer: Only works with Windows*

---
![license](https://img.shields.io/github/license/youtube-blue/youtube-blue-desktop?color=%23219fca)
![repoSize](https://img.shields.io/github/repo-size/youtube-blue/youtube-blue-desktop?color=%23219fca)
![downloadsCounter](https://img.shields.io/github/downloads/youtube-blue/youtube-blue-desktop/total?color=%23219fca)
![codeLineCounter](https://tokei.rs/b1/github/youtube-blue/youtube-blue-desktop?category=code)

# Theme

The theme of YouTube Blue is really fancy, and really blue *(Note: the theme can be buggy, if you dont use youtube dark mode)*. This was created by [TheLegendOfWolf_](https://userstyles.org/users/956934 "The UserStyles profile of TheLegendOfWolf_") and its available for free [here]("https://userstyles.org/styles/195233/blue-youtube-by-thelegendofwolf-3683) *(Note: the CSS doesn't exactly match because i edited it to be compatible outside a userscript manager)*.

# Ad-Blocking

YouTube Blue's adblocker works like magic. Thanks for the [idea](https://dev.to/penge/chrome-extension-that-skips-youtube-ads-steps-how-to-create-it-3ibp#3-how-skip-ad-works).

# Picture in Picture (PiP) mode

Picture in Picture (PiP) mode is just awesome (but its buggy sometimes :D). It combines the [`HTMLVideoElement.requestPictureInPicture()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/requestPictureInPicture) function with [process-finding](https://www.npmjs.com/package/find-process) and Electron usertasks. You can enter Picture in Picture mode by right-clicking the taskbar icon of YouTube Blue, then clicking "Request Picture in Picture (PiP) mode".



# Video Downloading

Video downloading in YouTube Blue is really fast, and high quality. It uses ~~[ytdl-core](https://github.com/ytdl-org/youtube-dl) integrated into NodeJS~~ [youtube-dl](https://github.com/ytdl-org/youtube-dl) (for high-quality downloading), some command-line tweaks, and Electron usertasks. You can download the current video by right-clicking the taskbar icon of YouTube Blue and selecting the "Download current video" option.

# Installation

Here you can find the installation instructions for the YouTube Blue desktop client.

## Requirements

NodeJS, Electron, and some little modules.

## Install the dependencies

Go to your YouTube Blue folder using "**cd yt/blue/folder/path**" and type "**npm install**"

## Start the app

Open up a terminal, use "**cd yt/blue/folder/path**", and type "**npm start**".


# Mobile version

The mobile ([Flutter-based](https://flutter.dev)) version of YouTube Blue is currently in development. If you wanna help me in the development process -> click here.

# About me

Hi! My name is PiciAkk, and I'm a Hungarian student. I made YouTube Blue in a weekend just for fun, but I maintained it later. I code in a few languages, including Python, and NodeJS. If my English is bad, it is because I'm Hungarian, and I only learn English in a self-taught way.

**Thanks for reading! Good video watching!**
