export const ChatItem = ({ imgProfile, name, lastMsg, numMessage }) => {
  return (
    <>
      <li className="py-3 sm:py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src={imgProfile}
              alt="user Image"
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {name}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {lastMsg}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {numMessage}{" "}
          </div>
        </div>
      </li>
    </>
  );
};
