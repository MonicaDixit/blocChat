
  var registerForm = $("#register form"),
    errorDiv = $("#error"),
    successDiv = $("#success"),
    username = registerForm.find("input[name=username]"),
    password = registerForm.find("input[name=password]"),
    passwordConfirm = registerForm.find("input[name=passwordConfirm]");

  errorDiv.hide();
  successDiv.hide();

  registerForm.submit(function (e) {
    e.preventDefault();

    errorDiv.hide();
    errorDiv.html("");
    successDiv.hide();
    successDiv.html("");

    if (password.val() === passwordConfirm.val()) {
      register(username.val(), password.val());
    } else {
      errorDiv.html("<p>Passwords must match.</p>");
      errorDiv.slideDown();
    }
  });

  var register = function (username, password) {
    $.post('/user', {
      username: username,
      password: password
    }).success(function (data) {
      successDiv.html("<p>Successfully create user " + data.username + ". You may log in now.</p>");
      successDiv.slideDown();
    }).fail(function (data) {
      errorDiv.html("<p>Error creating user.</p>");
      errorDiv.slideDown();
      console.log(data);
    });
  };
