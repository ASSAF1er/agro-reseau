import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className="p-20 bg-[#1a2e05] ">
            <div className="text-[25px] font-bold text-white">AgroRéseau</div>
            <div className="flex gap-5 sm:justify-between flex-wrap pt-5 text-white ">
                <div>
                    <p className="text-yellow-500 pb-2">À PROPOS</p>
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link className="hover:text-yellow-500 ">Qui sommes-nous ?</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500">Notre fonctionnement</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500">Nos partenaires</Link>
                        </li>
                        <li>
                            <Link to="/our-team" className="hover:text-yellow-500">
                                Notre équipe
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500"></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-yellow-500 pb-2">PRODUCTEURS</p>{' '}
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link className="hover:text-yellow-500">Passer une annonce</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500">Quels avantages ?</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500">Devenir certifié</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500">Agrandir son réseau</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500"></Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-yellow-500 pb-2">ACHETEURS</p>{' '}
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link className="hover:text-yellow-500">Rechercher un produit</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500">Contacter un producteur</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500">Passer une annonce</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500">Pourquoi acheter ici ?</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="text-yellow-500 pb-2">SUIVEZ-NOUS</p>{' '}
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link className="hover:text-yellow-500">Facebook</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500">LinkedIn</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500">Twitter</Link>
                        </li>
                        <li>
                            <Link className="hover:text-yellow-500">Instagram</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-white text-right pt-5 mt-10 w-full border-t border-gray-400">
                {new Date().getFullYear()} © AgroRéseau - Tous droits reservés
            </div>
        </div>
    )
}

export default Footer
