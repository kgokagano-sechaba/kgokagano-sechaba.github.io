document.addEventListener("DOMContentLoaded", () => {
  const reportForm = document.getElementById("reportForm");
  if (reportForm) {
    reportForm.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("reportMessage").innerText =
        "Thank you — your report has been submitted confidentially.";
      reportForm.reset();
    });
  }
});