import React from 'react';
import 'pages/intro/Intro.scss'
import EntireFlow from 'assets/images/icons/user-flow.png';
// import NewsArticles from 'assets/images/icons/news-pharma-fakes.png';
import {routes} from 'constants/routes';

/**
 * Stateless component responsible for rendering a simple SSI introduction screen.
 * */
const IntroPage = () => {
  return (
    <div className='intro page-form page-form--large'>
      <div className='intro__heading-block'>
        <h1 className='intro__heading'>
          RippleFund
        </h1>
        <h5 className='intro__subheading'>MAS-Backed Crowdfunding Platform</h5>
      </div>
      <div className='intro__text-block'>
        <h4>Introduction</h4>
        <p>RippleFund uses Affinidi's verifiable credentials to build a trusted crowdfunding platform based in Singapore.</p>
      </div>
      <div className='intro__text-block'>
        <h4>Issuer - Holder - Verifier Flow</h4>
        <img className='flow-size' src={EntireFlow} alt='entire-flow'/>
      </div>
      <div className='intro__text-block'>
        <h4>Singapore's Startup Ecosystem</h4>
        <p>Singapore is ranked among the top 20 startup ecosystems globally. The government offers business-incubating infrastructure, tax incentives, cash grants and financing schemes to countless ventures.</p>
        <p>With financing being generally the largest challenge in venture building, SG has been rolling out more and more initiatives to propel Singapore towards a thriving startup ecosystem; <a href="https://www.startupsg.gov.sg/">Startup SG</a> was established in 2017 to unify efforts to support the startup ecosystem under its various initiatives, programmes and partner networks.</p>
      </div>
      <div className='intro__text-block'>
        <h4>About Crowdfunding</h4>
        <p>Crowdfunding is the practice of funding a new venture by raising money from the public. It stimulates innovative projects due to its interactive nature, and at the same time, using innovation to fill the financial gap that traditional financial systems are unable to. Singapore's startup ecosystem seeks to gain from such a potent new source of capital.</p>
        <p>Though crowdfunding can make supporting and raising money for startups easier than ever, but it's not without issues. Con artists can use crowdfunding platforms to deceive donors and steal money for personal use. Or the money can be raised with the best intentions, but not end up used for its stated purpose.</p>
      </div>
      <div className='intro__text-block'>
        <h4>RippleFund's Missions</h4>
        <ol>
          <li>To make crowdfunding accessible to and trusted by the public (MAS- and SAF-backed)</li>
          <li>To protect crowdfunding backers from con artists and scams</li>
          <li>To build trust and engagement among Singaporean startups and crowdfunding backers</li>
          <li>To promote entrepreneurship as well as innovative methods of capital raising in Singapore</li>
        </ol>
      </div>
    </div>
  )
}

export default IntroPage
