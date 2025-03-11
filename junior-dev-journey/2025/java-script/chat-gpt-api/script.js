document.getElementById("execute").addEventListener("click", async function() {
  const apiKey = document.getElementById("apiKey").value.trim();
  const prompt = document.getElementById("prompt").value.trim();
  const model = document.getElementById("model").value;
  const temperature = parseFloat(document.getElementById("temperature").value);

  if (!apiKey || !prompt) {
    alert("Por favor, ingresa tanto la API Key como el prompt.");
    return;
  }

  // Muestra un mensaje de procesamiento
  document.getElementById("result").innerText = "Procesando...";

  // Prepara el payload para la API de ChatGPT
  let payload = {
    model: model,
    messages: [
      { role: "user", content: prompt }
    ],
    temperature: temperature
  };

  let endpoint = "https://api.openai.com/v1/chat/completions";

  // Verifica si el modelo es dall-e-3 para agregar parámetros específicos de imagen
  if (model === "dall-e-3") {
    payload = {
      prompt: prompt,
      n: 1,
      size: "1024x1024"
    };
    endpoint = "https://api.openai.com/v1/images/generations";
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.error && errorData.error.message.includes("The model `gpt-4` does not exist or you do not have access to it")) {
        throw new Error("El modelo `gpt-4` no existe o no tienes acceso a él. Por favor, selecciona otro modelo.");
      }
      throw new Error(errorData.error ? errorData.error.message : "Error en la solicitud");
    }

    const data = await response.json();
    let message;
    if (model === "dall-e-3" && data.data && data.data[0]) {
      message = `<img src="${data.data[0].url}" alt="Generated Image">`;
    } else {
      message = data.choices && data.choices[0] ? data.choices[0].message.content : "No se recibió respuesta.";
    }
    document.getElementById("result").innerHTML = message;
  } catch (error) {
    document.getElementById("result").innerText = "Error: " + error.message;
  }
});
