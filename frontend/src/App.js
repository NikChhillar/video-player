import Videos from "./Components/Videos";
import { useGlobalContext } from "./context/global";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPlayer from "./Components/VideoPlayer";
import { useState } from "react";
import Upload from "./Components/Upload";
import Button from "./Components/Button";

function App() {
  const g = useGlobalContext();
  console.log(g);

  const [modal, setModal] = useState(false);

  return (
    <BrowserRouter>
      <AppStyled className="App">
        <div className="upload">
          <Button
            name="Upload"
            icon={<i className="fas fa-plus"></i>}
            onClick={() => { setModal(true); }}
            bg="#1e90ff"
          />

        </div>
        {modal && <Upload />}
        <h1>Video Uploader</h1>
        <Routes>
          <Route path="/" element={<Videos />} />
          <Route path="/videos/:id" element={<VideoPlayer />} />
        </Routes>
        {modal && (
          <div className="overlay" onClick={() => setModal(false)}></div>
        )}
      </AppStyled>
    </BrowserRouter>
  );
}

const AppStyled = styled.div`
  padding: 3rem 10rem;
  width: 100%;
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-top: 2rem;
    padding: 1.5rem 3rem;
    h1 {
      font-size: 1.5rem;
    }
  }
  h1 {
    color: #fff;
    background: linear-gradient(to right, #00b894 40%, #705df2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .upload {
    display: flex;
    justify-content: flex-start;
    margin: 1rem;
    @media screen and (max-width: 700px) {
      margin: 2rem;
      justify-content :center;
        
  }
`;

export default App;
