// Plugin for variable insertion functionality

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useEffect } from 'react';
import type { LexicalCommand } from 'lexical';
import { COMMAND_PRIORITY_EDITOR, createCommand, $getSelection, $isRangeSelection, $createTextNode } from 'lexical';
import { $createVariableNode } from '../nodes/VariableNode';

export interface InsertVariablePayload {
  variableKey: string;
  category: string;
  displayName: string;
}

export const INSERT_VARIABLE_COMMAND: LexicalCommand<InsertVariablePayload> = createCommand();

export default function VariablePlugin() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerCommand(
      INSERT_VARIABLE_COMMAND,
      (payload: InsertVariablePayload) => {
        const { variableKey, category, displayName } = payload;

        editor.update(() => {
          const selection = $getSelection();

          if ($isRangeSelection(selection)) {
            const variableNode = $createVariableNode(variableKey, category, displayName);
            selection.insertNodes([variableNode]);

            // Insert a space after the variable for better UX
            const spaceNode = $createTextNode(' ');
            selection.insertNodes([spaceNode]);
          }
        });

        return true;
      },
      COMMAND_PRIORITY_EDITOR
    );
  }, [editor]);

  return null;
}
