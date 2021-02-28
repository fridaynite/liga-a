import { wrapper } from '../store'
import { GlobalStyle } from '../ui'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
