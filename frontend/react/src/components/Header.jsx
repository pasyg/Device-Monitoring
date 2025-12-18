export default function Header({title}) {
  return (
    <header className="bg-neutral-800 h-24 ml-64">
      <div className="flex items-center justify-between h-full px-6">
        <h1 className="text-2xl text-gray-200">{title}</h1>
        <div className="header-right">
          <a href="/user" className="hover:bg-gray-500 p-2 rounded cursor-pointer text-gray-200">User</a>
        </div>
      </div>
    </header>
  );
}