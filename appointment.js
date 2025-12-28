// ================= EMAILJS INIT =================
(function () {
  emailjs.init("5tQ9fwqJ6NP-V4tWS"); // 🔴 PUT YOUR PUBLIC KEY HERE
})();

// ================= DATE RESTRICTION =================
document.addEventListener("DOMContentLoaded", () => {

  const dateInput = document.getElementById("appointmentDate");
  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;

  const form = document.getElementById("bookingForm");
  const popup = document.getElementById("confirmationPopup");
  const closeBtn = document.getElementById("popupClose");

  // ================= FORM SUBMIT =================
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // ❌ block chrome popup

    const data = {
      fullName: form.fullName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      date: form.date.value
    };

    emailjs.send(
      "service_0bc5e3n",   // ✅ your service ID
      "template_pvwnhlx",  // ✅ your template ID
      data
    )
    .then(() => {
      popup.style.display = "flex";

      gsap.from(".popup-content", {
        scale: 0.6,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
      });

      form.reset();
    })
    .catch(error => {
      alert("Failed to book appointment. Try again.");
      console.error("EmailJS Error:", error);
    });
  });

  // ================= POPUP CLOSE =================
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

});
