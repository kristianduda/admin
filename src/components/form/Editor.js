import * as React from 'react';
import ReactMde from 'react-mde';
import Markdown from './Markdown';
import 'react-mde/lib/styles/css/react-mde-all.css';

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

export default function Editor({
    name,
    value,
    setValue
}) {
  const [selectedTab, setSelectedTab] = React.useState('write');

  const save = async function* (data) {
    // Promise that waits for "time" milliseconds
    const wait = function (time) {
      return new Promise((a, r) => {
        setTimeout(() => a(), time);
      });
    };

    // Upload "data" to your server
    // Use XMLHttpRequest.send to send a FormData object containing
    // "data"
    // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

    await wait(2000);
    // yields the URL that should be inserted in the markdown
    yield 'https://picsum.photos/300';
    await wait(2000);

    // returns true meaning that the save was successful
    return true;
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
        // paste={{
        //   saveImage: save
        // }}
      />
    </div>
  );
}
