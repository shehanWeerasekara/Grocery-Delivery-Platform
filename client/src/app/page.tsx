import {Toaster} from "react-hot-toast";
import {Route, Routes} from "react-router-dom";
import Login from "@/pages/Login";
import AppLayout from "@/pages/AppLayout";

export default function Home() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{duration: 3000, style: {
      background: "#1B3022",color: "#fff", borderRadius: "12px", fontSize: "14px"}
      }}/>

      <Routes>
        {/* auth pages - no navbar/footer */}
        <Route path="/login" element={<Login />} />
        {/* main pages - with navbar/footer */}
        <Route path="/" element={<AppLayout />} />
      </Routes>
    </>
  );
}
