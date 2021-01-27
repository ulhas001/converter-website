import React, { useState } from 'react';
import logo from './layout/undraw_Location_search_re_ttoj.svg';
import logo1 from './layout/undraw_video_files_fu10.svg';
import logo2 from './layout/undraw_Images_re_0kll.svg';
import './App.css';
import { Link, BrowserRouter } from 'react-router-dom';

const App = () => {
  const [url, setUrl] = useState('');
  const [key, setkey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = url.replace('https://www.youtube.com/watch?v=', '');
    setkey(id);
  };

  return (
    <BrowserRouter>
      <div>
        <header>
          <img src={logo} alt="" />
          <div>
            <Link className="text-decoration-none text-dark">About</Link>
          </div>
        </header>
        <div className="container">
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="p-1"
                placeholder="paste url here"
                style={{ border: 'none', borderBottom: '2px solid #1890ff' }}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button className="btn btn-primary p-2 ms-2">convert</button>
            </form>
            {key ? (
              <div className="d-flex">
                <iframe
                  title="button"
                  style={{
                    width: '230px',
                    height: '60px',
                    border: '0',
                    overflow: 'hidden',
                    padding: '4px',
                  }}
                  scrolling="no"
                  src={`https://loader.to/api/button/?url=https://www.youtube.com/watch?v=${key}&f=mp3&color=1890ff`}
                />
                <iframe
                  title="button"
                  style={{
                    width: '230px',
                    height: '60px',
                    border: '0',
                    overflow: 'hidden',
                    padding: '4px',
                  }}
                  scrolling="no"
                  src={`https://loader.to/api/button/?url=https://www.youtube.com/watch?v=${key}&f=mp4 720p&color=1890ff`}
                />
              </div>
            ) : (
              <h2>Please enter url</h2>
            )}
          </div>
          <div className="txt1">
            <img src={logo1} alt="" />
            <p>Convert and download youtube videos to mp3 and mp4.</p>
            <div className="txt2">
              <img src={logo2} alt="" />
              <p>
                We are going to upload more manipulations like this, stay tuned!
              </p>
            </div>
          </div>
        </div>
        <footer className="footer mt-auto py-3 bg-none fixed-bottom d-flex justify-content-center">
          copyright 2021 @ all rights reserved
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
