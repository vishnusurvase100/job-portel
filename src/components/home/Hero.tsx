import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="max-w-3xl">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
          🚀 India's Smart Job Portal
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-tight">
          Find Your
          <span className="text-blue-600"> Dream Job </span>
          Faster
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Discover thousands of jobs from top companies. Search, apply, and
          build your career with confidence.
        </p>

        <div className="mt-8 flex gap-4">
          <Button title="Find Jobs" />

          <Button
            title="Post a Job"
            className="bg-gray-800 hover:bg-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;