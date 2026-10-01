export default function Contact() {
  return (
    <div className="pt-36 pb-24 bg-off text-black min-h-screen">
      <div className="max-w-wrap mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <h1
            className="font-display font-semibold max-w-[12ch]"
            style={{ fontSize: 'clamp(1.9rem,4vw,2.8rem)' }}
          >
            HOW VISIBLE IS YOUR BUSINESS?
          </h1>

          <p className="mt-5 max-w-[40ch] text-[#54534B]">
            Find the technical issues, search opportunities and growth gaps
            holding your website back — free, no obligation.
          </p>
        </div>

        <form
          action="https://formspree.io/f/xeaovjgw"
          method="POST"
          className="flex flex-col gap-3.5"
        >
          <Field
            id="url"
            name="website"
            label="Website URL"
            type="text"
            placeholder="yoursite.com"
            required
          />

          <Field
            id="name"
            name="name"
            label="Name"
            type="text"
            required
          />

          <Field
            id="email"
            name="email"
            label="Email"
            type="email"
            required
          />

          <Field
            id="company"
            name="company"
            label="Company"
            type="text"
          />

          <button
            type="submit"
            className="mt-4 self-start bg-black text-white px-6 py-3.5 rounded-sm font-semibold text-sm hover:bg-orange hover:text-black transition-colors"
          >
            Analyze My Website
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ id, name, label, type, required, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs text-[#7A796F]"
      >
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="bg-transparent border-0 border-b border-[#C9C7BB] py-2.5 px-0.5 text-base outline-none focus:border-orange transition-colors"
      />
    </div>
  );
}