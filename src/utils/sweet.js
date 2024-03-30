import Swal from 'sweetalert2'

const SweetAlert=(position,type,message) =>{
    Swal.fire({
        position: position,
        icon: type,
        title: message,
        showConfirmButton: false,
        timer: 1500,
      });
}

export default SweetAlert;