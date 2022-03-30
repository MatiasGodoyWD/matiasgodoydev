import emailjs from "@emailjs/browser";

export const sendMail = (templateParams) => {
  emailjs
    .send(
      "service_70dktzc",
      "template_nc5n7df",
      templateParams,
      "user_HOVYKMpW5Au7W5Ll5087U"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
};
