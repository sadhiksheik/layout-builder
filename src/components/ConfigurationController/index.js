// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const toggleContent = () => {
        onToggleShowContent()
      }

      const toggleLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const toggleRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <ul className="configuration-container">
          <h1 className="layout-heading">Layout</h1>
          <li className="config-items">
            <input
              id="content"
              type="checkbox"
              onChange={toggleContent}
              checked={showContent}
            />
            <label htmlFor="content" className="content">
              Content
            </label>
          </li>
          <li className="config-items">
            <input
              id="leftNavbar"
              type="checkbox"
              onChange={toggleLeftNavbar}
              checked={showLeftNavbar}
            />
            <label htmlFor="leftNavbar" className="content">
              Left Navbar
            </label>
          </li>
          <li className="config-items">
            <input
              id="rightNavbar"
              type="checkbox"
              onChange={toggleRightNavbar}
              checked={showRightNavbar}
            />
            <label htmlFor="rightNavbar" className="content">
              Right Navbar
            </label>
          </li>
        </ul>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
