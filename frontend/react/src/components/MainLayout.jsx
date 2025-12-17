import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from 'react-router-dom';

export default function MainLayout({ title }) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header 
          title={title}/>

        <main className="p-6 flex-1 bg-gray-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
