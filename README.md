# DigitalSignature
 
This a standalone app developed for the [Thr34d5 collective](https://thr34d5.org/). It's purpose is to "digitally stamp" an image.

## Original

![WindVelocity_5](https://user-images.githubusercontent.com/21000020/76341025-725f8580-62ca-11ea-90be-680a47cf09bf.jpg)
Mesh created using the [GHopperGIS](https://www.food4rhino.com/app/ghoppergis) plugin for Grasshopper (using wind velocity data from the [NCEP](https://nomads.ncep.noaa.gov/)), rendered in RedShift for Houdini

## Stamped

![WindVelocity_5_Stamped](https://user-images.githubusercontent.com/21000020/76341162-a63aab00-62ca-11ea-807b-1f6868a58461.jpg)

## About
It's written in C++ and the image manipulation is done through shaders using the [Vulkan](https://www.khronos.org/vulkan/) API. The GUI is written using the [ImGui](https://github.com/ocornut/imgui) library.

Thanks to [Vulkan Tutorial](https://vulkan-tutorial.com/) for the amazing tutorial on the graphics API, to github user [planetpratik](https://github.com/planetpratik) for getting me to understand how to integrate ImGui with Vulkan and to [Sascha](https://github.com/SaschaWillems) for his amazing examples.

Currently only for Windows, but there will be Mac and Linux ports.

## How to
Go to [this](https://github.com/felipunky/DigitalSignature/releases) page, download the latest .exe file. Run it.
<p align="center">
    <img src=![SetupThr34d5](https://user-images.githubusercontent.com/21000020/76342900-51e4fa80-62cd-11ea-8a35-0a9ecf377451.JPG)>
</p>

Choose where you want it to install.

![SetupThr34d5_1](https://user-images.githubusercontent.com/21000020/76343054-8953a700-62cd-11ea-94dd-631c323aeebf.JPG)

Open the folder where it installed and click on the .exe.

![SetupThr34d5_2](https://user-images.githubusercontent.com/21000020/76343262-d9cb0480-62cd-11ea-86a7-9c4f3299c067.JPG)
Screenshot of pixel shader [Not Our Home](https://felipunky.github.io/html/FuqueneUno.html) by me. *Disclaimer: don't run if you don't have a beefy GPU.

The UI is very intuitive, but just in case: 
1. Path to Image: It defaults to the folder where it is installed, feel free to change it to any image file in your computer.
2. Change image: Click it to change the image, if you messed up the window by resizing, you can also click to reload.
3. Size: Controls the size of the stamp.
4. Alpha: Controls when to start culling according to the alpha channel of the stamp.
5. Save As: Again defaults to where the app is installed, feel free to change it anywhere on your system.
6. File format: Let's you pick the type of file you want to save it to.
7. Save: I don't think I have to explain this one.

*Watchout for the UI appearing on the images you save, undock the UI from the main app window simply by dragging it out. If the image is very large and you don't have enough space on the screen (and you don't want to mess the aspect ratio by going full-screen), simply set the main window to the side, the image save doesn't rely on what you are actually seeing on the screen.
