import ReactGA from 'react-ga4'

export const initializeGA = () => {
  ReactGA.initialize('G-NM589PGGZG')
}

export const trackPageView = (page: string) => {
  ReactGA.send({ hitType: 'pageview', page })
}
