import logo from './logo.svg';
import backButton from './backButton.png';
import './App.css';
import { useState, useEffect } from 'react';

function handleClickOpenCamera() {
  window.webkit.messageHandlers.iOS.postMessage("iOS_OpenCamera");
}

function handleClickOpenPhotos() {
  window.webkit.messageHandlers.iOS.postMessage("iOS_OpenPhotos");
}

function handleClickBluetooth() {
  window.webkit.messageHandlers.iOS.postMessage("iOS_Bluetooth");
}

function handleClickLocation() {
  window.webkit.messageHandlers.iOS.postMessage("iOS_Location");
}

function handleClickDeviceMotion() {
  window.webkit.messageHandlers.iOS.postMessage("iOS_DeviceMotion")
}

function handleClickNetwork() {
  window.webkit.messageHandlers.iOS.postMessage("iOS_Network")
}

function handleClickBack() {
  window.webkit.messageHandlers.iOS.postMessage("iOS_Back");
}

function App() {

  const [hardwareList, setHardwareList] = useState([]);
  const [imageData, setImageData] = useState(null);

  window.event = new Event('MyEventType');

  window.displayImageFromNative = (imageData) => {
    setImageData(imageData);
  };

  window.handleBluetoothData = function(data){
    setHardwareList(data.split('|'));
  }

  window.handleLocationData = function(data){
    setHardwareList(data.split('|'));
  }

  window.handleDeviceMotionData = function(data){
    setHardwareList(data.split('|'));
  }

  window.handleNetworkData = function(data){
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
  
  useEffect(() => {
    // Define the displayImageFromNative function
    window.handleImageData = (imageData) => {
      const imgElement = document.createElement('img');
      imgElement.src = `data:image/jpeg;base64,${imageData}`;
      document.body.appendChild(imgElement);
    
    };
  }, []);

  return (
    <div className="App">
    <div className="page-header">
    <button onClick={handleClickBack} className="back-button">
      <img
        src={backButton} // Replace with the path to your arrow image
        alt="Back"
        style={{ width: '25px'}} // Adjust styles as needed
      />
    </button>
    <header className="page-title">Mini-Programs</header>    
    </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Camera
        </p>
        <button onClick={handleClickOpenCamera}>
          Open Camera
        </button>
        <p>
          Gallery
        </p>
        <button onClick={handleClickOpenPhotos}>
          Open Photos
        </button>
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
        <p>
          Network
        </p>
        <button onClick={handleClickNetwork}>
          Get Network Information
        </button>
        <div>{listItems}</div>
      </header>
      <div className="custom-image-container">
          {imageData && 
          <img 
            // eslint-disable-next-line no-template-curly-in-string
            src='data:image/jpeg;base64,${imageData}' 
            alt='' 
            className="custom-image"
          />}
        </div>
    </div>
  );
}

export default App;
