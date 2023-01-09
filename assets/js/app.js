// selction
const contextMenu = document.querySelector(".ContextMenuContainer");

// Logic
// Functions
function contextMenuHandler(evnt) {
  evnt.preventDefault();
  contextMenu.style.top = evnt.pageY + "px";
  contextMenu.style.left = evnt.pageX + "px";
  contextMenu.style.display = "flex";
}
function exitMenu(evnt) {
  //on click or Escape
  if (evnt.which === 27 || evnt.which === 1) {
    contextMenu.style.display = "none";
  }
}
// EventListners
document.body.addEventListener("contextmenu", contextMenuHandler);
document.body.addEventListener("keydown", exitMenu);
document.body.addEventListener("click", exitMenu);
