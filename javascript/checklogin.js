jQuery(document).ready(function($){
    $('#signout').on(
        'click',
        function(e){
            e.preventDefault();

            firebase.auth().signOut()
            .then(function() {
                alert("Has cerrado sesión. Vuelve pronto :D");
                location.href="../index.html"
            })
            .catch(function(error) {
                  alert(error);
          })

        })
});

firebase.auth().onAuthStateChanged( check = function(user) {
    if (!user) {
    location.href="../Autentication/login.html"
    }
});