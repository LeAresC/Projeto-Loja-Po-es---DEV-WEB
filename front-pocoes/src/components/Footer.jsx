export default function Footer() {
    return (
        // py-8 dá um respiro em cima e embaixo, mt-auto garante que ele vá para o fim
        <footer className="bg-zinc-950 border-t border-purple-500/30 mt-auto py-8 text-center text-gray-400 font-gill">
            <div className="max-w-4xl mx-auto px-6">
                
                <h3 className="text-purple-400 font-header text-2xl mb-2">
                    Taverna do Mago
                </h3>
                
                <p className="text-sm">
                    © 2026 - Desenvolvido pelo Mestre Mago. Todos os feitiços reservados.
                </p>
                <p className="text-sm">
                    Contato: tavernadomago@example.com
                </p>
                
                
            </div>
        </footer>
    );
}