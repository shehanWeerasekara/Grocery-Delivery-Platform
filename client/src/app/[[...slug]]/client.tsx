"use client";

import dynamic from "next/dynamic";

// React Router's BrowserRouter needs `document`, so render it on the client only.
const AppRoutes = dynamic(() => import("@/components/AppRoutes"), { ssr: false });

export function ClientOnly() {
	return <AppRoutes />;
}
