<div class="g-signin2" data-onsuccess="onSignIn"></div>
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
    
    // Send id_token to server for validation and user authentication
    // Example: send token to server using AJAX
    // $.post('/google-signin', { id_token: id_token });
}
