
const API_URL = "https://medabrim-ivrit-ai.shibaly1.workers.dev";

async function askAI(message) {
  const response = await fetch(API_URL + "/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  });

  if (!response.ok) {
    throw new Error("שגיאה בחיבור לשרת");
  }

  return await response.json();
}

window.askAI = askAI;
