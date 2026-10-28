import { ClientOnly } from "./client";

// Optional catch-all: every URL (/login, /products, ...) is served by this page,
// and React Router handles the actual routing on the client.
export default function Page() {
	return <ClientOnly />;
}
