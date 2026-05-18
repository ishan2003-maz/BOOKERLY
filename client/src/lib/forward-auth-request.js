import { buildApiUrl } from "./api";

export async function forwardAuthRequest(request, path) {
  try {
    const body = await request.json();

    const backendResponse = await fetch(buildApiUrl(path), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
      cache: "no-store"
    });

    const payload = await backendResponse.text();

    return new Response(payload, {
      status: backendResponse.status,
      headers: {
        "Content-Type": backendResponse.headers.get("content-type") || "application/json"
      }
    });
  } catch (error) {
    console.error(`Failed to forward auth request to ${path}:`, error);

    return new Response(
      JSON.stringify({ message: "Unable to connect to the backend server." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
