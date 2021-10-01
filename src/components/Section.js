import React from 'react';
import { useState, useRef } from 'react';
import logo1 from '../layout/logo1.svg';
import './section.css';
const Section = () => {
  const url = useRef();
  const [key, setkey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = url.current.value.replace(
      'https://www.youtube.com/watch?v=',
      ''
    );
    setkey(id);
  };
  return (
    <>
      <div className='row mt-5'>
        <div className='col-lg-6 text-center d-flex justify-content-center align-items-center'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              className='p-1'
              placeholder='paste url here'
              style={{
                border: 'none',
                borderBottom: '2px solid #1890ff',
                width: '350px',
              }}
              ref={url}
            />
            <button className='btn btn-primary p-2 ms-2'>convert</button>
          </form>
          {key && (
            <div className='d-flex'>
              <iframe
                title='button'
                style={{
                  width: '230px',
                  height: '60px',
                  border: '0',
                  overflow: 'hidden',
                  padding: '4px',
                }}
                scrolling='no'
                src={`https://loader.to/api/button/?url=https://www.youtube.com/watch?v=${key}&f=mp3&color=1890ff`}
              />
              <iframe
                title='button'
                style={{
                  width: '230px',
                  height: '60px',
                  border: '0',
                  overflow: 'hidden',
                  padding: '4px',
                }}
                scrolling='no'
                src={`https://loader.to/api/button/?url=https://www.youtube.com/watch?v=${key}&f=mp4 720p&color=1890ff`}
              />
            </div>
          )}
        </div>
        <div className='col-lg-6 text-center d-flex  justify-content-center'>
          <div className='card' style={{ width: '600px' }}>
            <img src={logo1} className='card-img-top img-fluid' alt='...' />
            <div className='card-body'>
              <p className='card-text'>
                Convert Youtube video of your favourites songs and download
                videos too
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
