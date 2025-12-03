const Item = () => {
    return (
        <a href="/" className="flex flex-col gap-3">
            <img 
                src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-1423125480942063519/original/e4b6c64c-0dd7-46b9-ae6f-59ee60d57c5e.jpeg?im_w=960"
                alt=""
                className="aspect-square object-cover rounded-2xl"
            />
           
            <div>
                <h3 className="text-xl font-semibold">Porto de Galinhas, Pernambuco</h3>
                <p className="truncate text-gray-600">
                    Localizado em uma das áreas mais desejadas de Porto de Galinhas, este apartamento oferece o equilíbrio ideal entre conforto, modernidade e uma localização privilegiada, a menos de 10 minutos de caminhada das águas cristalinas da Praia do Cupe e menos de 10 minutos de carro do centro de Porto.
                    Prepare-se para viver dias inesquecíveis em um espaço cuidadosamente projetado, com decoração moderna, utensílios de primeira linha e uma infraestrutura de tirar o fôlego!
                    Destaques do Apartamento: nossa varanda externa com piscina privativa infantil.
                    Nosso apartamento completo, muito bem montado com cozinha completamente equipada incluindo Cooktop, sanduicheira, cafeteira e liquidificador, garantindo que você tenha tudo o que precisa para preparar suas refeições com praticidade.
                    Nosso Apartamento possui uma cama de casal de extrema qualidade para acomodar muito bem 1 casal, e mais 1 cama auxiliar de solteira para um terceiro hóspede.
                </p>
            </div>
           
            <p><span className="font-semibold">R$ 550</span> por noite</p>
        </a>
    );
}
 
export default Item;