import React from "react";

const ThankYou = () => (
  <>
    {/* Google Tag Manager (noscript) */}
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MBLPJF9K"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
    </noscript>
    {/* End Google Tag Manager (noscript) */}
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#367eF3]/10 to-white">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-[#367eF3]">Obrigado pelo seu contato!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Recebemos suas informações com sucesso.<br />
          Em breve, nossa equipe entrará em contato com você.
        </p>
        <a href="/" className="inline-block mt-4 px-6 py-2 bg-[#367eF3] text-white rounded-lg font-semibold hover:bg-[#265bb5] transition">
          Voltar para a página inicial
        </a>
      </div>
    </div>
  </>
);

export default ThankYou; 