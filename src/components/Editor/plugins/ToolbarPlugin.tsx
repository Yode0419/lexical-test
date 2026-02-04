// Toolbar plugin for formatting and variable insertion

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useCallback, useEffect, useState } from 'react';
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from 'lexical';
import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND } from '@lexical/list';
import type { InsertVariablePayload } from './VariablePlugin';
import { INSERT_VARIABLE_COMMAND } from './VariablePlugin';
import { variableCategories } from '../../../data/variableCategories';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import './ToolbarPlugin.css';

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
    }
  }, []);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      () => {
        updateToolbar();
        return false;
      },
      1
    );
  }, [editor, updateToolbar]);

  const handleFormat = (format: 'bold' | 'italic' | 'underline') => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, format);
  };

  const handleInsertVariable = (variableKey: string, category: string, displayName: string) => {
    const payload: InsertVariablePayload = {
      variableKey,
      category,
      displayName,
    };
    editor.dispatchCommand(INSERT_VARIABLE_COMMAND, payload);
  };

  return (
    <div className="toolbar">
      <ButtonGroup size="sm" className="me-2">
        <Button
          variant={isBold ? 'secondary' : 'outline-secondary'}
          onClick={() => handleFormat('bold')}
          title="Bold"
        >
          <strong>B</strong>
        </Button>
        <Button
          variant={isItalic ? 'secondary' : 'outline-secondary'}
          onClick={() => handleFormat('italic')}
          title="Italic"
        >
          <em>I</em>
        </Button>
        <Button
          variant={isUnderline ? 'secondary' : 'outline-secondary'}
          onClick={() => handleFormat('underline')}
          title="Underline"
        >
          <u>U</u>
        </Button>
      </ButtonGroup>

      <ButtonGroup size="sm" className="me-2">
        <Button
          variant="outline-secondary"
          onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)}
          title="Bullet List"
        >
          ⚫ ≡
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)}
          title="Numbered List"
        >
          ≡
        </Button>
      </ButtonGroup>

      <Dropdown>
        <Dropdown.Toggle variant="primary" size="sm" id="variable-dropdown">
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
