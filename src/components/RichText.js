import React, { useState, useEffect } from 'react';
import { EditorState, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

const RichText = React.memo((props) => {
  const [editor, setEditor] = useState();
  useEffect(() => {
    setEditor(
      EditorState.createWithContent(
        ContentState.createFromBlockArray(convertFromHTML(props.text))
      )
    );
  }, [props]);
  return (
    <Editor
      editorState={editor}
      toolbar={{
        options: []
      }}
    />
  );
});

export default RichText;
