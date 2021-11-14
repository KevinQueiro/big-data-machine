const IsLoged = () => {
  if (sessionStorage.getItem("active") !== "true") {
    window.location.replace('/logIn')
  }
}

export default IsLoged


