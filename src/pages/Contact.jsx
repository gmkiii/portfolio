export default function Contact() {
  return (
    <section className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-midas mb-6">Contactez-moi</h2>
      <form
        action="https://formsubmit.co/baptiste.dewaele3@gmail.com"
        method="POST"
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          required
          className="border p-2 pl-5 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          required
          className="border p-2 pl-5 rounded"
        />
        <textarea
          name="message"
          placeholder="Votre message"
          required
          className=" flex border pt-4 pl-5 pr-0  p-20 rounded align-top"
        />
        <button
          type="submit"
          className="bg-midas text-white px-5 py-3 rounded-lg"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
