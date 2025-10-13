export default function Contact() {
  return (
    <section className="max-w-xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Contactez-moi</h2>
      <p className="text-gray-700 mb-8">Envoyez-moi un message à :</p>
      <a
        href="mailto:ton.email@example.com"
        className="text-lg bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        ton.email@example.com
      </a>
    </section>
  );
}
