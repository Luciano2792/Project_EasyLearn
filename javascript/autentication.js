jQuery(document).ready(function($){
	$('.login').on(
		'submit',
		function(e){
			e.preventDefault();

			var email = $('.login .email').val();
			var password = $('.login .password').val();

			if (!email) {
				alert("Debes ingresar un correo");
			} else if (!password) {
				alert("Debes ingrsar una contraseña");
			} else {
				firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(function() {
					alert('Bienvenido');
					location.href="../Application/selector.html"
				})
				.catch(function(error) {
					alert("Ocurrio un error inesperado");
				});
			}
		}
		);
	$('.registro').on(
		'submit',
		function(e){
			e.preventDefault();

			var email = $('.registro .email').val();
			var password = $('.registro .password').val();

			if (!email) {
				alert("Debes ingresar un correo");
			} else if (!password) {
				alert("Debes ingrsar una contraseña");
			} else {
				firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(function() {
					$('.message').append('<img src="../Sources/check.png" widht="20px" height="20px"> Has sido registrado exitosamente');
				})
				.catch(function(error) {
					$('.message').append(error);
				});
			}
		}
	);
});