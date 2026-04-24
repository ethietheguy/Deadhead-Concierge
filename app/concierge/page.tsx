import { redirect } from "next/navigation";

// The concierge is now the root page. This redirect keeps any old
// /concierge links working.
export default function ConciergeRedirect() {
  redirect("/");
}
