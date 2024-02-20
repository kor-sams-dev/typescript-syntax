const removeButtons = document.getElementsByClassName("remove");

for (let i = 0; i < removeButtons.length; i++) {
  const item = removeButtons[i];
  item.addEventListener("click", () => {
    item?.parentElement?.remove();
  });
}
