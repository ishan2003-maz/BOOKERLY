import { forwardAuthRequest } from "../../../../../lib/forward-auth-request";

export async function POST(request) {
  return forwardAuthRequest(request, "/api/auth/admin/register");
}
