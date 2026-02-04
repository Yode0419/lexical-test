// Main application component

import SubjectField from './components/SubjectField/SubjectField';
import Editor from './components/Editor/Editor';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="app-title">Email Content</h1>

        <SubjectField />

        <div className="body-section">
          <label className="body-label">Body</label>
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default App;
