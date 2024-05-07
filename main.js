// Ejemplo de cómo un estudiante envía un ticket
const student = new Student("John Doe", "john@example.com");
student.sendTicket("Ayuda con álgebra", "Necesito ayuda con ecuaciones lineales", "Alta");


// Ejemplo de cómo un tutor responde a un ticket
const tutor = new Tutor("Jane Smith", "jane@example.com");
tutor.respondToTicket(ticketId, "Claro, estaré encantada de ayudarte con eso.");

// Ejemplo de cómo se cierra un ticket
const ticket = new Ticket("Ayuda con álgebra", "Necesito ayuda con ecuaciones lineales", "john@example.com", "Alta");
ticket.closeTicket();