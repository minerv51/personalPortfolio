import { StrictMode } from 'react'
import PortfolioSiteInfoC from '../components/portfolioSiteInfo.jsx'
import DevProcess from '../components/devProcess.jsx'

function portfolioSiteInfo() {
  return (
    <StrictMode>
        <PortfolioSiteInfoC />
        <DevProcess />
    </StrictMode>
  );
}

export default portfolioSiteInfo;