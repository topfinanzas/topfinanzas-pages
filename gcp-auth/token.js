const { GoogleAuth } = require("google-auth-library");

async function getAccessToken() {
  const auth = new GoogleAuth({
    // [seguridad] Credenciales hardcodeadas removidas; la SA topfinanzas-vertex-ai-sa fue eliminada.
    // Usa Application Default Credentials / Workload Identity (SA adjunto a la GCE) o Secret Manager.
    scopes: ["https://www.googleapis.com/auth/cloud-platform"],
  });

  const client = await auth.getClient();
  const token = await client.getAccessToken();
  console.log("Access Token:", token.token);
  return token.token;
}

getAccessToken();
