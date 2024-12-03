const PageContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  // w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[800px] xl:max-w-[80vw] 2xl:max-w-[80vw] 3xl:max-w-[2160px]
  return (
    <div className={`max-w-full sm:w-[640px] md:w-[768px] lg:w-[80vw] xl:w-[80vw] 2xl:w-[80vw] 3xl:w-[2160px] ${className}`}>
      {children}
    </div>
  );
}


export { PageContainer };