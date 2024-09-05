export const Header = () => {
  return (
    <>
      <div className="flex items-center h-16 pl-6 bg-slate-200">
        <div className="flex-shrink-0">
          <img
            className="w-8 h-8 rounded-full"
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="user Image"
          />
        </div>
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-bold text-blue-500 truncate ">
            Juan Esteban
          </p>
          <p className="text-sm text-gray-500 truncate ">Contact Info

</p>
        </div>
      </div>
    </>
  );
};
