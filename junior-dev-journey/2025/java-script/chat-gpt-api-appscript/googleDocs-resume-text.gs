/**
 * ================================================================
 * 📋 DESCRIPCIÓN DEL CÓDIGO
 * ================================================================
 * Este script de Google Apps Script extrae el contenido de un documento de Google Docs 
 * y utiliza la API de OpenAI (ChatGPT) para generar un resumen del texto extraído.
 * 
 * ✅ FUNCIONALIDADES:
 * - Extrae el texto completo de un documento de Google Docs por su ID.
 * - Envía el texto a la API de OpenAI (GPT-4) para obtener un resumen.
 * - Muestra el contenido original y el resumen en los registros (Logs) de Apps Script.
 * 
 * ================================================================
 * 📖 CÓMO IMPLEMENTARLO EN GOOGLE APPS SCRIPT:
 * ================================================================
 * 1. Abre el documento de Google Docs que deseas utilizar.
 * 2. Ve al menú → Extensiones → Apps Script.
 * 3. Crea un nuevo proyecto y pega este código en el editor.
 * 4. Reemplaza los valores de:
 *    - 'YOUR_DOCUMENT_ID_HERE' con el ID real de tu documento.
 *    - 'YOUR_API_KEY_HERE' con tu API Key de OpenAI.
 * 5. Guarda el proyecto.
 * 6. Ejecuta la función `extraerPorID` desde el editor.
 * 7. Ve a Ver → Registros para ver el contenido y el resumen generado.
 * 
 * 🚨 IMPORTANTE:
 * - No compartas tu API Key en el código.
 * - Usa Script Properties para almacenar claves sensibles si es necesario.
 * ================================================================
 */

function extraerPorID() { 
    // 🔒 Reemplaza con el ID real del documento de Google Docs
    var docId = 'YOUR_DOCUMENT_ID_HERE'; 
  
    // 🔒 Reemplaza con tu API Key de OpenAI
    var apiKey = 'YOUR_API_KEY_HERE';
  
    // 📄 Abre el documento de Google Docs usando su ID
    var doc = DocumentApp.openById(docId);
  
    // 📋 Obtiene el cuerpo del documento
    var cuerpo = doc.getBody();
  
    // 📝 Extrae todo el texto del documento
    var texto = cuerpo.getText();
  
    // 📊 Muestra el contenido del documento en el registro
    Logger.log("Contenido del Documento:\n" + texto);
  
    // 🤖 Llama a la función que genera el resumen utilizando la API de OpenAI
    var respuesta = llamarApiChatGpt(apiKey, texto);
  
    // 📊 Muestra el resumen generado en el registro
    Logger.log("Resumen generado:\n" + respuesta);
  }
  
  /**
   * ================================================================
   * 💡 FUNCIÓN: llamarApiChatGpt
   * ---------------------------------------------------------------
   * Esta función se encarga de hacer la solicitud a la API de OpenAI
   * para generar un resumen del texto extraído.
   * ================================================================
   * @param {string} apiKey - La clave API de OpenAI para autenticación.
   * @param {string} texto - El texto extraído del documento que se quiere resumir.
   * @returns {string} - El resumen generado por la API o un mensaje de error.
   */
  function llamarApiChatGpt(apiKey, texto) {
    // 🌐 URL de la API de OpenAI para la generación de textos
    var url = 'https://api.openai.com/v1/chat/completions';
  
    // 📦 Datos que se enviarán en la solicitud POST
    var data = {
      "model": "gpt-4", // Puedes cambiar a "gpt-3.5-turbo" si prefieres
      "messages": [
        { "role": "system", "content": "Eres un asistente que resume textos." }, // Rol del sistema
        { "role": "user", "content": "Resume el siguiente texto:\n\n" + texto }  // Texto proporcionado por el usuario
      ],
      "temperature": 0.5,  // 🔥 Controla la creatividad (0 = respuestas más precisas, 1 = más creativas)
      "max_tokens": 500     // 📏 Máximo número de tokens en la respuesta
    };
  
    // ⚙️ Opciones de configuración para la solicitud HTTP
    var opciones = {
      "method": "post",                        // Método HTTP POST
      "contentType": "application/json",      // Tipo de contenido JSON
      "headers": {                            // Headers con autenticación
        "Authorization": "Bearer " + apiKey   // Incluye la API Key en el header
      },
      "payload": JSON.stringify(data)        // Convierte los datos a formato JSON
    };
  
    try {
      // 📡 Realiza la solicitud a la API de OpenAI
      var respuesta = UrlFetchApp.fetch(url, opciones);
  
      // 🔍 Convierte la respuesta JSON en objeto legible
      var json = JSON.parse(respuesta.getContentText());
  
      // ✅ Retorna el contenido generado por la API
      return json.choices[0].message.content;
  
    } catch (e) {
      // ❌ Captura y muestra cualquier error que ocurra en la solicitud
      Logger.log("Error al llamar a la API: " + e);
      return "No se pudo generar el resumen.";
    }
  }
  