import { Link } from "react-router-dom";

/**
 * SideBar View
 */
function SideBar(){
    const navigationJson = [
        {
            icon:"",
            title:"SIDEBAR",
            href:""
        }
    ]
    return(
        <>
           <div className="sidebarFix">
                <div className="navigation">
                    <ul>
                        {
                            navigationJson.map(data =>(
                                <li><Link to={data.href}><span>{data.icon} </span>{data.title}</Link></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="profileBottam">

                </div>
           </div>
        </>
    )
}

export default SideBar;