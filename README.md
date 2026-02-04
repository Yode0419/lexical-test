# Lexical Variable Editor

A rich text editor built with Lexical that supports variable tag insertion, perfect for email templates and dynamic content.

## Features

- 📝 **Rich Text Editing** - Bold, Italic, Underline formatting
- 📋 **List Support** - Bullet points and numbered lists
- 🏷️ **Variable Tags** - Insert dynamic variables as visual tags
- ⌨️ **Keyboard Support** - Delete tags with backspace
- 📱 **Responsive Design** - Built with Bootstrap 5
- ⚡ **Modern Stack** - React 18, TypeScript, Vite

## Variable Categories

- **Client Info** - First Name, Last Name, Full Name, Email
- **Inspector Info** - First Name, Last Name, Full Name, Phone, Email, Company Name
- **Inspection Details** - Property Address, Date, Time, Date & Time, Report Link

## Getting Started

### Prerequisites

- Node.js 20.17.0 or higher
- npm 10.8.2 or higher

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

1. **Subject Field** - Enter email subject with variable support
2. **Body Editor** - Rich text editor with formatting tools
3. **Insert Variable** - Click the button to choose from available variables
4. **Variable Tags** - Variables appear as gray tags that can be deleted with backspace

## Tech Stack

- **Framework**: React 18.3 with TypeScript
- **Editor**: Lexical 0.40
- **UI**: Bootstrap 5.3 + React Bootstrap
- **Build Tool**: Vite 7.2
- **Styling**: CSS Modules

## Project Structure

```
src/
├── components/
│   ├── Editor/
│   │   ├── nodes/          # Custom Lexical nodes
│   │   ├── plugins/        # Editor plugins
│   │   └── Editor.tsx      # Main editor component
│   ├── SubjectField/       # Subject input component
│   └── VariableMenu/       # Variable selection UI
├── data/
│   └── variableCategories.ts  # Variable definitions
├── types/
│   └── variables.ts        # TypeScript types
└── utils/
    └── editorConfig.ts     # Lexical configuration
```

## License

MIT

## Author

Built with Claude Code
