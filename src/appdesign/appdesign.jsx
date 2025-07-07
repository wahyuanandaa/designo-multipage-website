import AppdesignHeader from "./app_design_header/Appdesignheader.jsx"
import Appdesignmain from "./app_design_main/AppDesignMain.jsx"
import MainSubApp from "./app_design_main/MainSubApp.jsx"
import MainFooter from "../webdesign/web_design_footer/WebDesignFooter"
const Appdesign = () => {
  return (
    <div className="appdesign">
      <AppdesignHeader />
      <div className="mainSection mainSectionWeb">
        <Appdesignmain />
        <MainSubApp />
      </div>
      <MainFooter />
    </div>
  )
}
export default Appdesign
