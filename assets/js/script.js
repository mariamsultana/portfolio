$(".counter-count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 5000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      });
});

$("#formValidation").validate({
  rules: {
    name: {
      minlength: 2,
    },
    email: {
      required: true,
      email: true,
    },
    subject: {
      required: true,
      subject: true,
      minlength: 10,
    },
    formMessage: {
      required: true,
      formMessage: true,
    },
  },
  messages: {
    name: {
      required: "Please enter your name",
      minlength: "Name at least 2 characters",
    },
    email: "Please enter your email",
    subject: "Please mention your subject",
    formMessage: "Please write your message",
  },

  submitHandler: function (form) {
    form.submit();
  },
});
const message = "Thank you for visiting my website ";
document
  .getElementById("formValidation")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    alert(message);
  });
