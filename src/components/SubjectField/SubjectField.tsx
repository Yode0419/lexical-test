// Subject field component - simplified editor for single-line input

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import type { InsertVariablePayload } from '../Editor/plugins/VariablePlugin';
import { INSERT_VARIABLE_COMMAND } from '../Editor/plugins/VariablePlugin';
import VariablePlugin from '../Editor/plugins/VariablePlugin';
import { editorConfig } from '../../utils/editorConfig';
import { variableCategories } from '../../data/variableCategories';
import { Dropdown } from 'react-bootstrap';
import './SubjectField.css';

function SubjectToolbar() {
  const [editor] = useLexicalComposerContext();

  const handleInsertVariable = (variableKey: string, category: string, displayName: string) => {
    const payload: InsertVariablePayload = {
      variableKey,
      category,
      displayName,
    };
    editor.dispatchCommand(INSERT_VARIABLE_COMMAND, payload);
  };

  return (
    <div className="subject-toolbar">
      <Dropdown>
        <Dropdown.Toggle variant="primary" size="sm" id="subject-variable-dropdown">
          + Insert Variable
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {variableCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {categoryIndex > 0 && <Dropdown.Divider />}
              <Dropdown.Header>{category.name}</Dropdown.Header>
              {category.variables.map((variable) => (
                <Dropdown.Item
                  key={variable.key}
                  onClick={() => handleInsertVariable(variable.key, category.name, variable.displayName)}
                >
                  {variable.displayName}
                </Dropdown.Item>
              ))}
            </div>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default function SubjectField() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="subject-container">
        <div className="subject-header">
          <label className="subject-label">Subject</label>
          <SubjectToolbar />
        </div>
        <div className="subject-editor">
          <PlainTextPlugin
            contentEditable={<ContentEditable className="subject-input" />}
            placeholder={<div className="subject-placeholder">Enter subject...</div>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <VariablePlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}
