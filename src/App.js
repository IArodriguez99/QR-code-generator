import './App.css';
import React, {useState} from 'react'
import QRCode from 'qrcode'





function App() {

  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');


  const generateQrCode = async () => {
    try {
          const response = await QRCode.toDataURL(text);
          setImageUrl(response);
    }catch (error) {
      console.log(error);
    }
  }

  
  return (
    <div className="App">
      <div class="container grid grid-col-3 grid-flow-row min-h-screen">
          
          <div class="grid col-span-3 place-items-center">Generate and scan QR codes</div>

          <div class="grid row-span-6 justify-items-center items-start">
            <div class="flex items-center border-b border-teal-500 py-2 my-8">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Enter a URL" aria-label="Full name" onChange={(e) => setText(e.target.value)}/>
              <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={() => generateQrCode()}>
                Generate
              </button>
            </div>
          </div>
          
          <div class="grid row-span-6 justify-items-center items-start max-w-fit">
              <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 my-11 rounded" type="button">
                Scan QR Code
              </button>
            
          </div>
          
          <div class="grid row-span-6 place-items-center">04</div>
      </div>
    </div>
  );
}

export default App;
