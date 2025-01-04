interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const AuthLayout = (props: AuthLayoutProps) => {
  return (
      <div className="flex flex-col items-center justify-center h-screen lg:p-16 ">
        <h2 className="text-3xl font-bold mb-6 text-center">{props.title}</h2>  
        {props.children}
      </div>
  );
};
