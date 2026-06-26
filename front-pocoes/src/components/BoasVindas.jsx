import ListaPocoes from "./ListaPocoes"; // Ajuste o caminho se necessário!

export default function BoasVindas() {
    return (
        <div className="flex flex-col w-full">
            
            {/* 1. SEÇÃO: Banner e Descrição da Loja */}
            <section className="bg-zinc-900 border-b border-purple-500/20 py-20 px-6 text-center shadow-lg">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-header text-purple-400 mb-6 drop-shadow-md">
                        Taverna do Mago
                    </h1>
                    <p className="text-xl text-gray-300 font-gill leading-relaxed">
                        O maior e mais confiável empório de feitiços, elixires e curas de todo o reino. 
                        Nossa missão é fornecer ingredientes alquímicos de altíssima qualidade tanto para 
                        jovens aprendizes quanto para arquimagos experientes. Entre, puxe uma cadeira e 
                        descubra o poder que engarrafamos para você.
                    </p>
                </div>
            </section>

            {/* 2. SEÇÃO: Histórico (1867) com Fotos */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    
                    {/* Texto da História */}
                    <div className="flex-1 text-gray-300 font-gill space-y-4">
                        <h2 className="text-4xl font-header text-yellow-500 mb-6">Nossa História</h2>
                        <p>
                            A Taverna do Mago foi <strong>fundada no inverno de 1867</strong> por um clã de alquimistas 
                            renegados. O que começou como uma pequena barraca escondida nos becos escuros da capital, 
                            rapidamente se tornou o refúgio para aqueles que buscavam soluções mágicas verdadeiras.
                        </p>
                        <p>
                            Sobrevivemos a inquisições, guerras arcanas e à Grande Praga de Sapos de 1902. 
                            Hoje, mantemos a tradição de nossos fundadores, preparando cada poção artesanalmente 
                            em caldeirões de ferro envelhecido, sob a luz da lua cheia.
                        </p>
                    </div>

                    {/* Foto da História */}
                    <div className="flex-1 relative">
                        {/* Você pode trocar este link pela foto que preferir! */}
                        <img 
                            src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1000&auto=format&fit=crop" 
                            alt="Taverna antiga em 1867" 
                            className="w-full h-80 object-cover rounded-2xl shadow-2xl border-4 border-zinc-800 sepia-[.3]"
                        />
                        <div className="absolute -bottom-4 -right-4 bg-zinc-950 border border-purple-500 text-purple-400 px-4 py-2 rounded-lg font-header font-bold text-sm">
                            Est. 1867
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. SEÇÃO: Os Produtos (Chamando o carrossel que você já fez!) */}
            <section className="py-12 bg-zinc-900 border-t border-zinc-900">
                {/* O seu ListaPocoes já tem o título "Estoque de Poções" e o carrossel, então é só chamar ele aqui! */}
                <ListaPocoes />
            </section>

        </div>
    );
}