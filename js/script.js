{
  const toggleMobileHeader = () => {
    const buttonAddClass = document.querySelector(".js-buttonHeader")
    const link = document.querySelector(".js-mobileHeader")


    buttonAddClass.addEventListener("click", () => {
      link.classList.toggle("disable");
    })

  }

  const hiddenMobileHeader = () => {
    const mobileLink = document.querySelector(".js-mobileLink")
    const headerMobile = document.querySelector(".js-mobileHeader")

    mobileLink.addEventListener("click", () => {
      headerMobile.classList.add("disable");
    })
  }

  const init = () => {

    hiddenMobileHeader();
    toggleMobileHeader(); 


  }
  init();

}