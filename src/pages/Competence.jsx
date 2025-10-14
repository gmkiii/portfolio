export default function Competence() {
    return (
        <section className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Mes Compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Frontend</h3>
                    <ul className="list-disc list-inside text-left text-gray-700">
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Backend</h3>
                    <ul className="list-disc list-inside text-left text-gray-700">
                    </ul>
                </div>
            </div>  
        </section>
    );
}