export default function Header({title}) {
  return (
    <header className="bg-neutral-800 h-24 flex items-center justify-between px-6 ml-64">
      <h1 className="text-2xl text-gray-200">{title}</h1>

      <div className="header-right">
        <a href="/user" className="hover:bg-gray-500 p-2 rounded cursor-pointer">User</a>
      </div>
    </header>
  );
}
