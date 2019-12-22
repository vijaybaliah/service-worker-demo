const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/sw.js`).then(register => {
      console.log('Worked: ', register)
    })
    .catch(error => {
      console.log('Error: ', error)
    })
  }
}

export default registerServiceWorker;