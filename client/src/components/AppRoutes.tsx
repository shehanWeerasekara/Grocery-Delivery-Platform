"use client";

import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import AppLayout from "@/pages/AppLayout";
import HomeRoute from "@/pages/Home";
import Products from "@/pages/Products";
import SearchResults from "@/pages/SearchResults";
import FlashDeals from "@/pages/FlashDeals";
import Checkout from "@/pages/Checkout";
import MyOrders from "@/pages/MyOrders";
import OrderTracking from "@/pages/OrderTracking";
import Addresses from "@/pages/Addresses";
import ProtectedRoutes from "@/components/ProtectedRoutes";

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Toaster
				position="top-right"
				toastOptions={{
					duration: 3000,
					style: {
						background: "#1B3022",
						color: "#fff",
						borderRadius: "12px",
						fontSize: "14px",
					},
				}}
			/>

			<Routes>
				{/* auth pages - no navbar/footer */}
				<Route path="/login" element={<Login />} />
				{/* main pages - with navbar/footer */}
				<Route path="/" element={<AppLayout />}>
					<Route index element={<HomeRoute />} />
					<Route path="/products" element={<Products />} />
					<Route path="/search" element={<SearchResults />} />
					<Route path="/flash-deals" element={<FlashDeals />} />
					<Route element={<ProtectedRoutes />}>
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/my-orders" element={<MyOrders />} />
						<Route path="/my-orders/:id" element={<OrderTracking />} />
						<Route path="/addresses" element={<Addresses />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
