const ratingForm = document.querySelector("[data-rating-form]");
const ratingStatus = document.querySelector("[data-rating-status]");

if (ratingForm && ratingStatus) {
  ratingForm.addEventListener("change", (event) => {
    const rating = event.target;
    if (rating instanceof HTMLInputElement && rating.name === "rating") {
      ratingStatus.textContent = `Thanks for rating your visit ${rating.value} out of 5 stars.`;
    }
  });
}

const bookingForm = document.querySelector("[data-booking-form]");

if (bookingForm) {
  const dateInput = bookingForm.elements.namedItem("date");
  if (dateInput instanceof HTMLInputElement) {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    dateInput.min = today.toISOString().slice(0, 10);
  }

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(bookingForm);
    const details = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone") || "Not provided"}`,
      `Date: ${formData.get("date")}`,
      `Time: ${formData.get("time")}`,
      `Guests: ${formData.get("guests")}`,
      `Notes: ${formData.get("notes") || "None"}`,
    ].join("\n");
    const subject = encodeURIComponent("Aryan's Cafe table booking request");
    const body = encodeURIComponent(details);
    window.location.href = `mailto:rajeshwarimalleshdavanapalli@gmail.com?subject=${subject}&body=${body}`;
    const status = bookingForm.querySelector("[data-booking-status]");
    if (status) {
      status.textContent = "Your email app should open with the request. Please send it; the table is confirmed only after we reply.";
    }
  });
}
