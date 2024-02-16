import Link from "next/link";
import { Heart } from "lucide-react";
import SignIn from "./auth/SignIn";
const HeroSection = () => {
  return (
    <div className="relative h-screen flex flex-col">
      <header className="absolute left-0 top-0 w-full flex items-center h-24 z-40">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
          <div className="flex items-center min-w-max">
            <Link href="/" className="font-semibold flex items-center gap-x-2">
              <div className="flex items-center -space-x-3">
                <span className="h-6 aspect-square bg-purple-600 dark:bg-purple-500 rounded-full flex" />
                <span className="h-6 aspect-square bg-violet-600 dark:bg-violet-400 blur rounded-full flex" />
              </div>
              <span className="text-lg text-gray-700 dark:text-gray-300">
                Snippy
              </span>
            </Link>
          </div>
          <div>
            <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
              <SignIn />
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:min-w-max mt-10 lg:mt-0"></div>
          </div>
        </nav>
      </header>
      <section className="min-h-max bg-white dark:bg-gray-950">
        <div className="absolute top-0 inset-x-0 h-64 flex items-start">
          <div className="h-24 w-2/3 bg-gradient-to-br from-purple-500 opacity-20 blur-2xl dark:from-purple-700 dark:invisible dark:opacity-40"></div>
          <div className="h-20 w-3/5 bg-gradient-to-r from-blue-600 opacity-40 blur-2xl dark:from-purple-700 dark:opacity-40"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-2/5 aspect-[2/0.5] bg-gradient-to-br from-purple-600 to-violet-400 rounded-full opacity-50 blur-2xl"></div>
        <div className="relative mx-auto pt-32 pb-24 lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 text-center space-y-10">
          <h1 className="text-gray-900 dark:text-white mx-auto max-w-5xl font-bold text-4xl/tight sm:text-5xl/tight lg:text-6xl/tight xl:text-7xl/tight">
            We create, we design, we develop Modern tools.
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mx-auto max-w-2xl"></p>
          <div className="flex justify-center items-center flex-wrap mx-auto gap-4">
            <Link
              href="/editor"
              className="flex items-center h-12 px-6 rounded-full bg-purple-600 text-white border border-purple-600"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <footer className="bottom-8 absolute left-0 right-0 text-center">
        <p className="mx-auto inline-flex gap-2">
          Made with
          <Heart className="text-pink-500" />
          by using Next.js
        </p>
      </footer>
    </div>
  );
};
export default HeroSection;
