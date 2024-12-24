interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="hidden lg:flex flex-col items-center justify-center bg-gray-100  p-10 ">
        <img
          src="../../../public/banner.png"
          alt="logo JlCoders"
          className="mt-8 w-96 "
        />
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          Welcome to ChatApp
        </h1>
        <p className="text-xl text-blue-500">
          Connect with your friends and the world around you.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-6 lg:p-16 ">
        <h2 className="text-3xl font-bold mb-6 text-center">{props.title}</h2>
        {props.children}
      </div>
    </div>
  );
};
