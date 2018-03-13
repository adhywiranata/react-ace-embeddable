import React, { Component } from 'react';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

// this is just a dummy code. get these codes from actual database!
let code1 = `let name = [...]`;
let code5 = `
const num = 5;

function fiveMultiply(n) {
  return 5 [...] n;
}

fiveMultiply(5);
`;

class App extends Component {
  state = {
    code: '',
  }

  componentDidMount() {
    const qs = window.location.search;
    const qsObj = {};
    qs.slice(1).split('&').forEach((val) => {
      let vSplit = val.split('=');
      qsObj[vSplit[0]] = vSplit[1];
    });
    const snippetId = Number(qsObj['snippetId']);

    let code = '';

    // dummy switch case. do the actual API calls later!
    switch(snippetId) {
      case 1: {
        code = code1;
        break;
      }
      case 5: {
        code = code5;
        break;
      }
      default:
    }

    this.setState({ code });
  }

  render() {
    return (
      <div>
        <div style={{ position: 'fixed', background: 'transparent', zIndex: 999, top: 0, left: 0, width: '100%', height: '100%' }}></div>
        <AceEditor
          mode="javascript"
          theme="monokai"
          name="editor"
          fontSize={18}
          wrapEnabled
          width={'100%'}
          height={250}
          value={this.state.code}
          tabSize={2}
          readOnly
          editorProps={{$blockScrolling: true}}
        />
      </div>
    );
  }
}

export default App;
