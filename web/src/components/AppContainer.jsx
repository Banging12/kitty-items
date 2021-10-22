import Head from "next/head"
import PropTypes from "prop-types"
import Header from "src/components/Header"
import {BASE_HTML_TITLE} from "src/global/constants"
import "src/global/fclConfig"

export default function AppContainer({children}) {
  return (
    <div>
      <Head>
        <title>{BASE_HTML_TITLE}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

AppContainer.propTypes = {
  children: PropTypes.node,
}