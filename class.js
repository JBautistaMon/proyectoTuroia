// Clase principal para usuarios
class User {
    constructor(nom, email, rol) {
      this.nom = nom;
      this.email = email;
      this.role = rol;
    }
  
    // Método para enviar un ticket
    sendTicket(asunto, descripcion, urgencia) {
      // Crear una nueva instancia de Ticket con los datos proporcionados
      const newTicket = new Ticket(asunto, descripcion, this.email, urgencia);
      
      // Agregar el ticket a la lista de tickets (aquí deberás implementar esta lógica según tu aplicación)
      addTicketToList(newTicket); // Esta función sería definida en otro lugar
    }
  }
  
  // Clase para estudiantes
  class Student extends User {
    constructor(nom, email) {
      super(nom, email, 'alumne');
    }
  
    // Método específico para estudiantes
    enrollCourse(courseId) {
      // Lógica para inscribirse en un curso
    }
  }
  
  // Clase para tutores
  class Tutor extends User {
    constructor(nom, email) {
      super(nom, email, 'tutor');
    }
  
    // Método específico para tutores
    respondToTicket(ticketId, response) {
      // Lógica para responder a un ticket
    }
  }
  let ticketIdCounter = 0 
  // Clase para tickets
  class Ticket {
    constructor(asunto, descripcion, nomAlumne, urgencia) {
      this.id = ++ticketIdCounter; 
      this.asunto = asunto;
      this.descripcion = descripcion;
      this.nomAlumne = nomAlumne;
      this.urgencia = urgencia;
    }
  
    // Método para cerrar un ticket
    closeTicket() {
      this.status = 'Cerrado';
    }
  }
  
  // Función para agregar un ticket a la lista de tickets
  function addTicketToList(ticket) {
      const ticketsList = document.getElementById('tickets');
      
      // Crear un nuevo elemento de lista para el ticket
      const listItem = document.createElement('li');
      listItem.textContent = `${ticket.asunto} - ${ticket.descripcion} - ${ticket.nomAlumne} - ${ticket.urgencia}`  ;
      
      // Agregar el elemento de lista a la lista de tickets
      ticketsList.appendChild(listItem);
      console.log(ticketsList)
  }
  
  // Función para manejar el envío del formulario
  function handleFormSubmit(event) {
      event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
      // Obtener los valores del formulario
      const asunto = document.getElementById('asunto').value;
      const descripcion = document.getElementById('descripcion').value;
      const nomAlumne = document.getElementById('nomAlumne').value;
      const urgencia = document.getElementById('urgencia').value;
      
  
      const newTicket = new Ticket(asunto, descripcion, nomAlumne ,urgencia);

      //  Mostrar ticket por pantalla o consola

      displayTicket(newTicket);

      // Limpiar el formulario después de enviar el ticket (opcional)
      document.getElementById('asunto').value = '';
      document.getElementById('descripcion').value = '';
      document.getElementById('nomAlumne').value = '';
      document.getElementById('urgencia').value = 'Baja';
  }

  function displayTicket(ticket) {
    // Aquí puedes decidir cómo quieres mostrar el ticket
    // Por ejemplo, puedes agregarlo a una lista en tu página HTML o mostrarlo en la consola del navegador
    console.log(ticket); // Muestra el ticket en la consola del navegador

    const ticketlist = document.getElementById('tickets')
    const listItem = document.getElementById('li');
    listItem.textContent = `ID ${ticket.id} - Asunto: ${ticket.asunto} - Descripición: ${ticket.descripcion} - Nombre de alumno: ${ticket.nomAlumne} - Nivel de urgencia: ${ticket.urgencia}`

    // crea un nuevo elemtno de lista para el ticket
    
    ticketlist.appendChild(listItem);

}
  
  // Agregar un event listener para el envío del formulario
  const sendTicketForm = document.getElementById('send-ticket-form');
  sendTicketForm.addEventListener('submit', handleFormSubmit);