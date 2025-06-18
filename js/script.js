document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const confirmation = document.getElementById("confirmation");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.name.value;
      const room = form.room.value;
      const checkin = form.checkin.value;
      const checkout = form.checkout.value;

      confirmation.textContent = `✅ Thank you, ${name}! Your ${room} is booked from ${checkin} to ${checkout}.`;
      form.reset();
    });
  }
});
