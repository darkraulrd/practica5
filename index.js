
(function() {
    var updateButton = document.getElementById('updateDetails');
    var cancelButton = document.getElementById('cancel');
    var favDialog = document.getElementById('favDialog');

    // Update button opens a modal dialog
    updateButton.addEventListener('click', function() {
        favDialog.showModal();
    });

    // Form cancel button closes the dialog box
    cancelButton.addEventListener('click', function() {
        favDialog.close();
    });

})();

alert("hola como te llamas?");

nombre = prompt("ingresa tu nombre");
edad = prompt("ingresa tu edad");	


document.write(nombre + " " + edad);
