import Graphicdesignheader from "./graphic_design_header/GraphicDesignHeader.jsx"
import Graphicdesignmain from "./graphic_design_main/GraphicDesignMain.jsx"
import MainSubDesign from "./graphic_design_main/MainSubDesign.jsx"
import MainFooter from "../webdesign/web_design_footer/WebDesignFooter.jsx"
const GraphicDesign = () => {
  return (
    <div className="graphicDesign">
      <Graphicdesignheader />
      <div className="mainSection mainSectionWeb">
        <Graphicdesignmain />
        <MainSubDesign />
      </div>
      <MainFooter />
    </div>
  )
}
export default GraphicDesign
