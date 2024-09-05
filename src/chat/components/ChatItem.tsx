export const ChatItem = ({ imgProfile, name, lastMsg, numMessage }) => {
  return (
    <>
      <li className="py-3 px-4 sm:py-4 hover:bg-slate-200 rounded-lg cursor-pointer">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src={imgProfile}
              alt="user Image"
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-bold text-blue-500 truncate ">
              {name}
            </p>
            <p className="text-sm text-gray-500 truncate ">
              {lastMsg}
            </p>
          </div>
          <div className="font-semibold bg-green-600 rounded-full text-white w-4 h-4 flex justify-center items-center" >
            <span className="text-xs">
            {numMessage}
            </span>
          </div>
        </div>
      </li>
    </>
  );
};
