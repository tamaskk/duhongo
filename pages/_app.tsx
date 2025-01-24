import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1>Coming soon...</h1>
    </div>
  )
}
