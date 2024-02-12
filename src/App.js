import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function handleClick() {
  window.webkit.messageHandlers.iOS.postMessage("Hello from WebView!");
}

function showPopup(message) {
  console.log(message);
};

function App() {

  const [bluetoothList, setBluetoothList] = useState([]);

  window.event = new Event('MyEventType');

  window.handleBluetoothData = function(data){
    setBluetoothList(data.split('|'));
  }

  // window.addEventListener('MyEventType', function (evt) {
  //   // something is performed
  //   console.log("####event:" + evt.detail);
  //  // alert(evt.detail);
  //    setBluetoothList(evt.detail.split('|'));
  // }, false);
  const listItems = bluetoothList.map((item) =>
    <li key={item.toString()}>
      {item.toString()}
    </li>
  );  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bluetooth
        </p>
        <button onClick={handleClick}>
          Connect
        </button>
        <ul>{listItems}</ul>
      </header>
    </div>
  );
}

export default App;
