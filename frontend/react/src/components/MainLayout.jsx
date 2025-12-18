import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from 'react-router-dom';

export default function MainLayout({ title }) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 h-full fix flex-col">
        <Header 
          title={title}/>

        <main className="p-6 min-h-screen flex-1 bg-gray-300 ml-60 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
