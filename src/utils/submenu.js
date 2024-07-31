export function initializeSubMenu(triggerId, submenuId) {
  const trigger = document.getElementById(triggerId);
  const submenu = document.getElementById(submenuId);

  if (!trigger || !submenu) {
    console.warn(`Element with ID ${triggerId} or ${submenuId} not found`);
    return () => {};
  }

  let touchStartX = 0;
  let touchEndX = 0;

  function toggleActive() {
    submenu.classList.toggle("active");
  }

  function handleOutsideClick(event) {
    const isOutsideClick = !submenu.contains(event.target);
    const isTouchDevice =
      "ontouchstart" in window || navigator.msMaxTouchPoints;

    if (
      (isOutsideClick || (isTouchDevice && event.type === "touchstart")) &&
      submenu.classList.contains("active")
    ) {
      submenu.classList.remove("active");
    }
  }

  function handleTouchMove(event) {
    touchEndX = event.touches[0].clientX;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > 10) {
      submenu.classList.remove("active");
    }
  }

  trigger.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleActive();
  });

  document.addEventListener("click", handleOutsideClick);

  if ("ontouchstart" in window || navigator.msMaxTouchPoints) {
    document.addEventListener("touchmove", handleTouchMove);
  }

  return () => {
    trigger.removeEventListener("click", toggleActive);
    document.removeEventListener("click", handleOutsideClick);
    if ("ontouchstart" in window || navigator.msMaxTouchPoints) {
      document.removeEventListener("touchmove", handleTouchMove);
    }
  };
}
