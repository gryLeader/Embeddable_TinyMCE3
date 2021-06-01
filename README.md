# Embeddable_TinyMCE-3
Single folder, contained, TinyMCE 3.x mod to be used within desktop apps as WYSIWYG Rich Text Editor.

![EmbeddableTinyMCE3](https://user-images.githubusercontent.com/85140033/120336975-45c9cc00-c2c9-11eb-8fd3-e344faac87cb.jpg)
Img: Embeddable TinyMCE-3 full editor with o2k7 skin.

Embeddable TinyMCE-3 is a mod of the Open Source WYSIWYG HTML editor TinyMCE, Version: 3.5.12 (2016-10-31), which was the last version of the 3.x branch supporting IE6. It contains some -minor- modifications in order to enable its use embedded within apps, e.g. loaded from application resources, so it is possible to load the editor in a contained way (with no visible external files).

Embeddable TiniMCE-3 can be used with the WebBrowser component (shdocvw.dll) or other embedded browser. 
Regarding how to compile the resources and load them inside your app, that is out of the scope of this readme but you should find plenty of references online.

To get started with the package, download the files to a folder and open simple.html (simple editor) and full.html (full featured editor). Editor options and configuration can be found inside those html files and are straight-forward to understand. Additional help may be found in TinyMCE 3.x documentation online.

To reduce footprint further you may want to remove files with the suffix "_src" (not minified version of js files for debug/testing) and/or concatenate js files, remove unused plugins, etc. 
