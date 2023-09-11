import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GroupImage from './Photos/Group.svg';
import OurImage from './Photos/OurImage.svg';
import TextImage from './Photos/TextImage.svg';

const Header = () => {
  const [selectedId, setSelectedId] = useState('Home');
  const [hoveredId, setHoveredId] = useState('');

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId('');
  };

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <header className="header" onMouseLeave={handleMouseLeave}>
      <nav className="header-right">
        <a
          href="#Home"
          id={selectedId === 'Home' ? 'Selected' : hoveredId === 'Home' ? 'Hovered' : ''}
          onMouseEnter={() => handleMouseEnter('Home')}
          onClick={() => handleClick('Home')}
        >
          <svg width="25" height="25" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.25 25L10.4167 20.8333M10.4167 20.8333L25 6.25L39.5833 20.8333M10.4167 20.8333V41.6667C10.4167 42.8173 11.3494 43.75 12.5 43.75H18.75M39.5833 20.8333L43.75 25M39.5833 20.8333V41.6667C39.5833 42.8173 38.6506 43.75 37.5 43.75H31.25M18.75 43.75C19.9006 43.75 20.8333 42.8173 20.8333 41.6667V33.3333C20.8333 32.1827 21.7661 31.25 22.9167 31.25H27.0833C28.2339 31.25 29.1667 32.1827 29.1667 33.3333V41.6667C29.1667 42.8173 30.0994 43.75 31.25 43.75M18.75 43.75H31.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Home
        </a>
        <a
          href="#About us"
          id={selectedId === 'About us' ? 'Selected' : hoveredId === 'About us' ? 'Hovered' : ''}
          onMouseEnter={() => handleMouseEnter('About us')}
          onClick={() => handleClick('About us')}
        >
          <svg width="25" height="25" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.75 43.75H27.0833M5.20828 44.7917L16.7693 40.3451C17.5087 40.0607 17.8784 39.9185 18.2244 39.7328C18.5316 39.5679 18.8245 39.3776 19.1 39.1638C19.4102 38.9231 19.6903 38.643 20.2505 38.0828L43.75 14.5833C46.0512 12.2822 46.0512 8.55119 43.75 6.25C41.4488 3.94881 37.7179 3.94881 35.4167 6.24999L11.9172 29.7494C11.357 30.3096 11.0769 30.5897 10.8362 30.8999C10.6224 31.1754 10.432 31.4683 10.2671 31.7756C10.0814 32.1215 9.93922 32.4912 9.65481 33.2307L5.20828 44.7917ZM5.20828 44.7917L9.49603 33.6437C9.80286 32.8459 9.95627 32.447 10.2194 32.2643C10.4494 32.1047 10.7339 32.0443 11.0089 32.0968C11.3236 32.1569 11.6257 32.4591 12.2301 33.0635L16.9366 37.7699C17.5409 38.3743 17.8431 38.6764 17.9032 38.9911C17.9557 39.2661 17.8953 39.5506 17.7357 39.7806C17.553 40.0437 17.1541 40.1971 16.3563 40.504L5.20828 44.7917Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          About us
        </a>
        <a
          href="#packages"
          id={selectedId === 'packages' ? 'Selected' : hoveredId === 'packages' ? 'Hovered' : ''}
          onMouseEnter={() => handleMouseEnter('packages')}
          onClick={() => handleClick('packages')}
        >
          <svg width="25" height="25" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 29.1667L31.25 16.6667M19.7917 17.7083H19.8126M30.2084 28.125H30.2292M39.5834 43.75V10.4167C39.5834 8.11548 37.7179 6.25 35.4167 6.25H14.5834C12.2822 6.25 10.4167 8.11548 10.4167 10.4167V43.75L17.7084 39.5833L25 43.75L32.2917 39.5833L39.5834 43.75ZM20.8334 17.7083C20.8334 18.2836 20.367 18.75 19.7917 18.75C19.2164 18.75 18.75 18.2836 18.75 17.7083C18.75 17.133 19.2164 16.6667 19.7917 16.6667C20.367 16.6667 20.8334 17.133 20.8334 17.7083ZM31.25 28.125C31.25 28.7003 30.7836 29.1667 30.2084 29.1667C29.6331 29.1667 29.1667 28.7003 29.1667 28.125C29.1667 27.5497 29.6331 27.0833 30.2084 27.0833C30.7836 27.0833 31.25 27.5497 31.25 28.125Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          packages
        </a>
        <a
          href="#language"
          id={selectedId === 'language' ? 'Selected' : hoveredId === 'language' ? 'Hovered' : ''}
          onMouseEnter={() => handleMouseEnter('language')}
          onClick={() => handleClick('language')}
        >
          <svg width="25" height="25" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.75 25C43.75 35.3553 35.3553 43.75 25 43.75M43.75 25C43.75 14.6447 35.3553 6.25 25 6.25M43.75 25H6.25M25 43.75C14.6447 43.75 6.25 35.3553 6.25 25M25 43.75C28.4518 43.75 31.25 35.3553 31.25 25C31.25 14.6447 28.4518 6.25 25 6.25M25 43.75C21.5482 43.75 18.75 35.3553 18.75 25C18.75 14.6447 21.5482 6.25 25 6.25M6.25 25C6.25 14.6447 14.6447 6.25 25 6.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          language
        </a>
      </nav>
    </header>
  );
};



const Body = () => {
  return (
    <div className='IntroductoryText'>
      <img id="GroupImage" src={GroupImage} alt="Group Image" />
      <img id="OurImage" src={OurImage} alt="Our Image" />
      <img id="TextImage" src={TextImage} alt="Text Image" />
      <div className="RectangleForm">
        <form action="/action_page.php">
          <div className="input-container">
            <input
              type="text"
              id="fname"
              name="fname"
              className="text-input"
              placeholder="First name"
            />
            <input
              type="text"
              id="lname"
              name="lname"
              className="text-input"
              placeholder="Last name"
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              id="email"
              name="email"
              className="text-input"
              placeholder="Email"
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              name="password"
              className="text-input"
              placeholder="Password"
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              id="phone"
              name="phone"
              className="text-input"
              placeholder="Phone Number"
            />
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              id="CheckBoxRules"
              name="subscribe"
              className="checkbox-input"
            />
            <label class="CheckBoxRules">You agree to our Terms and Privacy Policy</label>
          </div>
          <input type="submit" class='SubmitRegister' value="Sign in" />
        </form>
      </div>
    </div>
  );
};






const app = (
  <div>
    {<Header/>}
    {<Body/>}
  </div>
)

ReactDOM.render(app, document.getElementById('root'))