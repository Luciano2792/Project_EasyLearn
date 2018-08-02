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
					alert('Has sido registrado exitosamente');
					location.href="../Autentication/login.html"
				})
				.catch(function(error) {
					$('.message').append(error);
				});
			}
		}
	);
});