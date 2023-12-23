function encodeText() {
  const inputText = document.getElementById("input-text").value;
  const encodedText = btoa(inputText);
  document.getElementById("encoded-output").innerText = encodedText;
}
function decodeText() {
  const encodedText = document.getElementById("encoded-output").innerText;
  const decodedText = atob(encodedText);
  document.getElementById("decoded-output").innerText = decodedText;
}
