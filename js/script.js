const lala = () => {
window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
    console.log(`Aktualna szerokość strony: ${screenWidth}px`);
  })
}

  const header = () => {
    // const screenWidth = window.innerWidth;
    
    console.log(`${(lala.screenWidth)}`) ;
    lala();
}
  header();