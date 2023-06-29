import "../styles/footer.css"
import "../styles/navbar.css"

const Footer = () => {
    return (  
        <div className="footer">

       <div className="footer_log0">
        <img src="images/newlogo.svg" alt="" />
       </div>
       <div className="nav_links">
        <a href="">Terms and Conditions | </a>
        <a href="">Send Us Feedback | </a>
        <a href="">Help</a>
       </div>
       <div className="desc"> 
       <p> 1992-2022, Hotstar.com, Inc. or its affiliates</p>
       </div>
       </div>
    );
}
 
export default Footer;