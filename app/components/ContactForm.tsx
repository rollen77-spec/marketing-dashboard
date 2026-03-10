"use client";

export default function ContactForm() {
  return (
    <form
      className="mt-6 space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          placeholder="First Name"
          className="rounded-md border border-zinc-300 px-4 py-2.5 text-sm"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="rounded-md border border-zinc-300 px-4 py-2.5 text-sm"
        />
      </div>
      <input
        type="email"
        placeholder="Work Email"
        className="w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm"
      />
      <input
        type="text"
        placeholder="Company & Role"
        className="w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm"
      />
      <textarea
        placeholder="What are you looking to achieve?"
        rows={3}
        className="w-full rounded-md border border-zinc-300 px-4 py-2.5 text-sm"
      />
      <button
        type="submit"
        className="rounded-md bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-amber-200"
      >
        Send Message
      </button>
    </form>
  );
}
