function SidebarControls(){
    var sideBar = document.getElementById("sideBar");
    var menuButton = document.getElementById("menuButton");
    sideBar.scrollTop = 0;
    sideBar.scrollTop = 0;
    var displayVisable = sideBar.getAttribute("display-visible");
    displayVisable === "true"? sideBar.setAttribute("display-visible",false)  : sideBar.setAttribute("display-visible",true);
    displayVisable === "true"? menuButton.setAttribute("display-visible",true)  : menuButton.setAttribute("display-visible",false);



}
export default SidebarControls;