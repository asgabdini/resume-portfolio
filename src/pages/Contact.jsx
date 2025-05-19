import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout title="Contact Me">
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 dark:border-gray-600 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 min-h-[150px]"
          ></textarea>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
