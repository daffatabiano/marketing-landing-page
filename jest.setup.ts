import "@testing-library/jest-dom";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

// Mock next/font/google
jest.mock("next/font/google", () => ({
  Playfair_Display: () => ({ variable: "--font-playfair", className: "mock-playfair" }),
  DM_Sans: () => ({ variable: "--font-dm-sans", className: "mock-dm-sans" }),
}));

// Mock framer-motion to avoid animation issues in tests
jest.mock("framer-motion", () => {
  const actual = jest.requireActual("framer-motion");
  return {
    ...actual,
    motion: new Proxy(
      {},
      {
        get: (_target: unknown, prop: string) => {
          const Component = ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
            const { initial, animate, exit, transition, variants, whileHover, whileTap, viewport, ...rest } = props;
            void initial; void animate; void exit; void transition;
            void variants; void whileHover; void whileTap; void viewport;
            const React = require("react");
            return React.createElement(prop, rest, children);
          };
          Component.displayName = `motion.${prop}`;
          return Component;
        },
      }
    ),
    AnimatePresence: ({ children }: React.PropsWithChildren) => children,
    useAnimation: () => ({ start: jest.fn(), stop: jest.fn(), set: jest.fn() }),
    useInView: () => true,
  };
});

// Suppress console.error for known React warnings in tests
const originalConsoleError = console.error;
beforeAll(() => {
  console.error = (...args: unknown[]) => {
    const msg = typeof args[0] === "string" ? args[0] : "";
    if (
      msg.includes("Warning: ReactDOM.render") ||
      msg.includes("Warning: An update to") ||
      msg.includes("act(")
    ) return;
    originalConsoleError(...args);
  };
});
afterAll(() => {
  console.error = originalConsoleError;
});