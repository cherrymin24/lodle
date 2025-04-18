// src/components/MainLayout.jsx
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full p-6 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
