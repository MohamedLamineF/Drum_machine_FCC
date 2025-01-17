<p align="center">
  <a href="" rel="noopener">
 <img width=128px height=128px src="./public/drumMachine.png" alt="Drum Machine"></a>
</p>

<h3 align="center">Drum Machine</h3>

<div align="center"  style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap; justify-content:center" >
<div>

[![Status](https://img.shields.io/badge/status-active-success.svg?style=for-the-badge&color=red)]()

</div>

<div>

![GitHub Issues](https://img.shields.io/github/issues/mohamedLamineF/Drum_machine_FCC?style=for-the-badge)

</div>

<div>

![GitHub Pull Requests](https://img.shields.io/github/issues-pr/MohamedLamineF/Drum_machine_FCC?style=for-the-badge)

</div>

<div>

![GitHub License](https://img.shields.io/github/license/MohamedLamineF/Drum_machine_FCC?style=for-the-badge&color=blue)

</div>
</div>

---

<div align="center" style="border: 2px solid #ccc; border-radius: 8px; padding: 20px; margin: 20px 0;">

This project was created as part of <strong style="color:#ddffee">**FreeCodeCamp's**</strong> **[Front End Development Libraries](https://www.freecodecamp.org/certification/MohamedLamineF/front-end-development-libraries)** certification. For more details, check out the **[project description](project-description.md)** file.

</div>

## 📝 Table of Contents

- [About](#about)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies)
- [Getting Started](#getting_started)
- [Project Structure](#structure)
- [Contributing](#contributing)
- [Other FCC Projects](#others)
- [Authors](#authors)
- [License](#license)

## ℹ️ About <a name = "about"></a>

This drum machine application lets you create beats using two different sound banks with nine unique sounds each. You can trigger sounds by clicking pads or using keyboard keys, making it easy to create your own rhythmic patterns.

## 🎥 Demo <a name = "demo"></a>

<p align="center" >
  <a href="https://drumi-fcc.netlify.app/" rel="noopener">
<img src="./public/Screenshot.png" alt="Drum machine" style="border-radius:5%; margin:10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"></a>
</p>

## ✨ Features <a name = "features"></a>

- 🥁 Two distinct sound banks (Heater Kit and Piano Kit)
- 🌓 Dark/Light mode with system preference detection
- ⌨️ Keyboard controls support (Q, W, E, A, S, D, Z, X, C)
- 💅 Smooth animations and transitions
- 🔊 Adjustable volume control
- 💡 Power on/off toggle
- 📱 Responsive design for all devices

## 🛠️ Technologies Used <a name="technologies"></a>

- **React v17** (as per FreeCodeCamp requirements)
- **TypeScript** for static typing
- **Tailwind CSS** for styling
- **Vite** for fast development and bundling
- **ESLint** for code linting and quality control
- **Prettier** for code formatting
- **Lucide React** for icons and symbols

## 🏁 Getting Started <a name = "getting_started"></a>

Follow these steps to get a local copy up and running:

### 1. Prerequisites

- Node.js (version 12 or higher)
- npm (usually comes with Node.js)
- Git

### 2. Clone the Repository

```bash
git clone git@github.com:MohamedLamineF/Drum_machine_FCC.git
```

### 3. Navigate to the Project Directory

```bash
cd Drum_machine_FCC
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Start the Development Server

```bash
npm run dev
```

## 🌳 Project Structure <a name="structure"></a>

```
src/
├── components/
│ |── drum/
│ |   ├── BankSwitch.tsx
│ |   ├── Display.tsx
│ |   ├── DrumPad.tsx
│ |   └── VolumeControl.tsx
│ |── Layout/
│ |   ├── Header.tsx
│ |   └── Footer.tsx
│ └── UI/
│     └── ThemeToggle.tsx
├── data/
│ |── drumBanks.tsx
│ └── drumPads.tsx
├── hooks/
│ |── useAudioPlayer.tsx
│ |── useDarkMode.tsx
│ └── useDrumPad.tsx
├── types/
│ └── index.ts
|── App.tsx
└── main.tsx
```

## 🛠️ Contributing <a name="contributing"></a>

We welcome contributions! If you have ideas for improving this project, please feel free to:

- Open an **issue** to suggest changes or report bugs.
- Submit a **pull request** with your improvements.

## 🎯 Other FCC Projects <a name="others"></a>

Check out my other projects from the FreeCodeCamp Frontend Development Libraries certification:

- [Random DZ Quote Machine](https://github.com/MohamedLamineF/Random-DZ-Quote-Machine)
- [Markdown Previewer](https://github.com/MohamedLamineF/markdown-previewer-FCC)
- [JavaScript Calculator](https://github.com/MohamedLamineF/JavaScriptCalculatorFCC)
- [25 + 5 Clock](https://github.com/MohamedLamineF/25-5Clock_FCC)

## ✍️ Authors <a name = "authors"></a>

Made with ❤️ by [Lamine](https://github.com/MohamedLamineF) 😛

# License <a name="license"> </a>

This project is licensed under the MIT License - see the [license](LICENSE) file for details.
