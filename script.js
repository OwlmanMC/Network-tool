var online
online = window.navigator.onLine
function ic (){
  if (online == true) {
    Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Connected!',
  showConfirmButton: false,
  timer: 2000
})
  } else if (online == false) {
    Swal.fire({
  position: 'top-end',
  icon: 'error',
  title: 'Failed to connect',
  showConfirmButton: true,
})
  }
}
function ipc () {
  const ipAPI = '//api.ipify.org?format=json'

Swal.queue([{
  title: 'IP tool',
  confirmButtonText: 'Show my IP',
  showLoaderOnConfirm: true,
  preConfirm: () => {
    return fetch(ipAPI)
      .then(response => response.json())
      .then(data => Swal.insertQueueStep(data.ip))
      .catch(() => {
        Swal.insertQueueStep({
          icon: 'error',
          title: 'Unable to get your public IP'
        })
      })
  }
}])
}