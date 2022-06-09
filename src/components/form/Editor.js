import * as React from 'react';
import ReactMde from 'react-mde';
import Markdown from './Markdown';
import 'react-mde/lib/styles/css/react-mde-all.css';
import withCanvas from 'src/utils/withCanvas';

function loadSuggestions(text) {
  return new Promise((accept, reject) => {
    setTimeout(() => {
      const suggestions = [
        {
          preview: 'Andre',
          value: '@andre'
        },
        {
          preview: 'Angela',
          value: '@angela'
        },
        {
          preview: 'David',
          value: '@david'
        },
        {
          preview: 'Louise',
          value: '@louise'
        }
      ].filter((i) => i.preview.toLowerCase().includes(text.toLowerCase()));
      accept(suggestions);
    }, 250);
  });
}

function Editor({
    name,
    value,
    setValue,
    addFile,
    canvas
}) {
  const [selectedTab, setSelectedTab] = React.useState('write');

  const saveImage = async function* (data) {
    var blob = new Blob([data], { type: "image/jpeg" });
    var urlCreator = window.URL || window.webkitURL;
    var src = urlCreator.createObjectURL(blob);
    const d = await canvas.resize(src, 320, "img.jpg");

    try {
      const file = await addFile(d);

      yield `{URL}/api/file/${file._id}`;
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div className="container">
      <ReactMde
        value={value}
        onChange={v => setValue(name, v)}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(content) =>
          Promise.resolve(<Markdown>{content || ""}</Markdown>)
        }
        loadSuggestions={loadSuggestions}
        childProps={{
          writeButton: {
            tabIndex: -1
          }
        }}
        paste={{
          saveImage
        }}
      />
    </div>
  );
}

export default withCanvas(Editor);
