export function MainContainer({ children, className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1280px] px-4 py-8 sm:px-6 lg:px-10 lg:py-10 ${className}`}
    >
      {children}
    </div>
  );
}
