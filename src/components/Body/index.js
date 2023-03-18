// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <ul className="body-left-container">
              <h1 className="left-heading">Left Navbar Menu</h1>
              <li className="left-li">Item 1</li>
              <li className="left-li">Item 2</li>
              <li className="left-li">Item 3</li>
              <li className="left-li">Item 4</li>
            </ul>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="left-heading">Content</h1>
              <p className="para">
                Lorem ipsum dolor sit fjhbvfkj jebfcksfhvbasfjkvb bakjhv bas
                vbasvf vhakvfhbafdsvhbalhfdbc askflfhvb laffvb alsv balvbh
                lafhbvflhk
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="body-left-container">
              <h1 className="left-heading">Right Navbar</h1>
              <div className="box">Ad 1</div>
              <div className="box">Ad 2</div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
