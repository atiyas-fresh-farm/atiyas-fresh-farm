import { ReactNode } from "react";

const H1 = ({ children }: {children: ReactNode}) => (
  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    {children}
  </h1>
);

const H2 = ({ children }: {children: ReactNode}) => (
  <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
    { children }
  </h2>
);

const H3 = ({ children }: {children: ReactNode}) => (
  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
    { children }
  </h3>
);

const H4 = ({ children }: {children: ReactNode}) => (
  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
    { children }
  </h4>
);

const P = ({ children }: {children: ReactNode}) => (
  <p className="leading-7 [&:not(:first-child)]:mt-6">
    { children }
  </p>
);

const Large = ({ children }: {children: ReactNode}) => (
  <div className="text-lg font-semibold">
    { children }
  </div>
);

const Small = ({ children }: {children: ReactNode}) => (
  <small className="text-sm font-medium leading-none">
    { children }
  </small>
);

const Muted = ({ children }: {children: ReactNode}) => (
  <p className="text-sm text-muted-foreground">{ children }</p>
);


export { H1, H2, H3, H4, P, Large, Small, Muted };