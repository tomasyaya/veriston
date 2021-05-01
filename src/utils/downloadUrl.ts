export function downloadUrl(url: string, filename: string) {
  const link = document.createElement("a");
  link.setAttribute("download", filename);
  link.setAttribute("href", url);
  link.style.display = "none";
  document.body.appendChild(link);
  if (link) {
    link.click?.();
  }
  window.URL.revokeObjectURL(url);
  link.remove();
}
