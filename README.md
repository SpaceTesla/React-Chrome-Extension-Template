# **React Chrome Extension Template**

Welcome to the **React Chrome Extension Template**, a boilerplate for building modern Chrome extensions using React and Webpack! This template allows you to quickly set up both **content scripts** and **popup pages** written entirely in React, making it easy to manage complex UI components and state in your Chrome extension.

## **Features**

- 🛠 **React-based architecture**: Write your content scripts and popup UI using React for better component reusability and easier state management.
- 🚀 **Webpack for bundling**: Leverage Webpack to bundle and minify your React code for optimized performance.
- 🎨 **Modular folder structure**: Keep your extension’s logic and UI components organized with a clear folder structure.
- ⚡ **Fast development setup**: Use the `npm start` command to start building right away with hot reloading for development.
- 🌐 **Cross-browser compatibility**: Set up for Chrome, but easily adaptable for other browsers like Firefox and Edge.

## **Folder Structure**

```
React-Chrome-Extension-Template/
│
├── dist/                   # Compiled extension files
├── node_modules/           # Node.js dependencies
├── public/                 # Public assets (e.g., icons)
│   ├── icons/              # Icons for the extension
│   └── index.html          # HTML for the popup
│
├── src/                    # Source files
│   ├── content-script/     # Content script related components
│   │   ├── components/     # React components for content scripts
│   │   │   └── Hello.jsx       # Sample component
│   │   ├── ContentApp.jsx  # Main content script App
│   │   └── index.js        # Entry point for content script
│   ├── popup/              # Popup page related components
│   │   ├── components/     # React components for popup
│   │   │   └── Hello.jsx       # Sample component
│   │   ├── PopupApp.jsx    # Main popup App
│   │   ├── index.js        # Entry point for popup script
│   │   └── styles.css      # Styles for popup script
│
├── manifest.json           # Chrome extension manifest file
├── package.json            # Project dependencies and scripts
├── webpack.config.js       # Webpack configuration for bundling
├── README                  # Readme file
└── .gitignore              # Gitignore file
```

## **Getting Started**

### Prerequisites

Make sure you have the following tools installed on your machine:

- **Node.js** (v12 or higher)
- **npm** or **yarn**
- **React** (v17 or higher)

### Installation

1. **Clone this repository**:
   ```bash
   git clone https://github.com/yourusername/react-chrome-extension-template.git
   cd react-chrome-extension-template
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the extension**:
   ```bash
   npm run build
   ```

   This will bundle your React code and output the compiled files to the `dist/` directory.

4. **Load the extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer Mode**.
   - Click **Load unpacked** and select the **root folder** of your project (the one containing `manifest.json`).

### Author 

- [Shivansh Karan](https://github.com/SpaceTesla)
