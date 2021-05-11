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
          Pharma's League
        </h1>
        <h5 className='intro__subheading'>Greater Southeast Asia's Trusted Drug Marketplace</h5>
      </div>
      <div className='intro__text-block'>
        <h4>Issuer - Holder - Verifier Flow</h4>
        <img className='flow-size' src={EntireFlow} alt='entire-flow'/>
      </div>
      <div className='intro__text-block'>
        <h4>Rise in Counterfeit Drugs Sold Online</h4>
        <p>The ongoing COVID-19 pandemic and the fast-paced world of e-commerce has taken the acceleration of selling pharmaceuticals online to the next level.</p>
        <p>Though 60% of pharmaceutical brands have seen an increase of revenue from their online business, they have suffered an increase of 67% in online counterfeits as a result as well. WHO estimates that counterfeit medicines worth 89 billion are traded annually.</p> 
        <p>Multiple news articles have been published about the increasingly prevalent issue:</p>
        {/* <img className='articles-size' src={NewsArticles} alt='entire-flow' /> */}
      </div>
      <div className='intro__text-block'>
        <h4>Pharma's League's Mission</h4>
        <p>Counterfeit drugs affect people from poor, underprivileged communities most, where self-medication is most common.</p>
        <p>Half of the deaths from the current opioid crisis were from the synthetic heroin fentanyl, which was reported to contain counterfeit medications.</p>
        <p>Hence, we aim to prevent further harm caused towards these communities, by offering a single source of truth for the purchase and reselling of drugs online, where resellers have to be authorized by respective pharmas to resell their drugs. The guarantee of trust between buyers and sellers would also enforce a more efficient pharma market.</p>
        <p>Pharma's League: a 100% trustworthy platform for drugs.</p>
      </div>
      {/* <div className='intro__roles-description'>
        <div className='intro__roles-description-role'>
          <h3>Issuer</h3>
          <p>Pharma A is able to issue digitalized verfiable credentials.</p>
        </div>
        <div className='intro__roles-description-role'>
          <h3>Holder</h3>
          <p></p>
        </div>
        <div className='intro__roles-description-role'>
          <h3>Verifier</h3>
          <p>TODO</p>
        </div>
      </div>
      <p>Ready to list your drug on Pharma's League? Register <a href={routes.APPLICANT_LOGIN} rel='noreferrer'>here</a></p> */}
    </div>
  )
}

export default IntroPage
