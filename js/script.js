{
  const toggleMobileHeader = () => {
    const buttonAddClass = document.querySelector(".js-buttonHeader")
    const link = document.querySelector(".js-mobileHeader")


    buttonAddClass.addEventListener("click", () => {
      link.classList.toggle("disable");
    })

  }

  const hiddeAboutMeHeader = () => {
    const mobileLink = document.querySelector(".js-mobileLink")
    const headerMe = document.querySelector(".js-mobileHeader")

    mobileLink.addEventListener("click", () => {
      headerMe.classList.add("disable");
    })  
  }

  const hiddeContactHeader = () => {
    const headerContact = document.querySelector(".js-mobileLink1")
    const contact = document.querySelector(".js-mobileHeader")

    headerContact.addEventListener("click", () => {
      contact.classList.add("disable");
    })  
  }
  
  const hideMediaHeader = () => {
    const headerMobile = document.querySelector(".js-mobileLink2");
    const mobile = document.querySelector(".js-mobileHeader");
  
    headerMobile.addEventListener("click", () => {
      mobile.classList.add("disable");
    })  

  
  }
  
  
  const init = () => {
    hideMediaHeader();
    hiddeContactHeader();
    hiddeAboutMeHeader();
    toggleMobileHeader(); 


  }
  init();

}