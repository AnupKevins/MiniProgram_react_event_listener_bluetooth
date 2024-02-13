import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function handleClickBluetooth() {
  window.webkit.messageHandlers.iOS.postMessage("iOS_Bluetooth");
}

function handleClickLocation() {
  window.webkit.messageHandlers.iOS.postMessage("iOS_Location");
}

function handleClickDeviceMotion() {
  window.webkit.messageHandlers.iOS.postMessage("iOS_DeviceMotion")
}

function App() {

  const [hardwareList, setHardwareList] = useState([]);

  window.event = new Event('MyEventType');

  window.handleBluetoothData = function(data){
    setHardwareList(data.split('|'));
  }

  window.handleLocationData = function(data){
    setHardwareList(data.split('|'));
  }

  window.handleDeviceMotionData = function(data){
    setHardwareList(data.split('|'));
  }

  // window.addEventListener('MyEventType', function (evt) {
  //   // something is performed
  //   console.log("####event:" + evt.detail);
  //  // alert(evt.detail);
  //    setBluetoothList(evt.detail.split('|'));
  // }, false);
  const listItems = hardwareList.map((item) =>
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
        <button onClick={handleClickBluetooth}>
          Get Bluetooth
        </button>
        <p>
          Location
        </p>
        <button onClick={handleClickLocation}>
          Get Location
        </button>
        <p>
          DeviceMotion
        </p>
        <button onClick={handleClickDeviceMotion}>
          Get DeviceMotion
        </button>
        <ul>{listItems}</ul>
      </header>
    </div>
  );
}

export default App;
