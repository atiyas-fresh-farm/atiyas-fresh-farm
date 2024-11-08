import { ReactNode } from "react";

const H1 = ({ children }: {children: ReactNode}) => (
  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    {children}
  </h1>
);

const H2 = ({ children, className }: {children: ReactNode, className?: string}) => (
  <h2 className={`scroll-m-20 pb-2 text-3xl font-medium tracking-tight first:mt-0 ${className}`}>
    { children }
  </h2>
);

const H3 = ({ children, className }: {children: ReactNode, className?: string}) => (
  <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
    { children }
  </h3>
);

const H4 = ({ children }: {children: ReactNode}) => (
  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
    { children }
  </h4>
);

const P = ({ children, className }: {children: ReactNode, className?: string}) => (
  <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
    { children }
  </p>
);

const Large = ({ children, className }: {children: ReactNode, className?: string}) => (
  <div className={`text-lg font-semibold ${className}`}>
    { children }
  </div>
);

const Small = ({ children, className }: {children: ReactNode, className?: string}) => (
  <small className={`text-sm font-medium leading-none ${className}`}>
    { children }
  </small>
);

const Muted = ({ children }: {children: ReactNode}) => (
  <p className="text-sm text-muted-foreground">{ children }</p>
);


export { H1, H2, H3, H4, P, Large, Small, Muted };