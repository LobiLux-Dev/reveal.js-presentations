import EthereumLogo from '../assets/ethereum-logo.png'

export const Slide1 = () => {
	return (
		<section className="kenburns-top" data-background-image="/background.png">
			<div className="!bg-[rgba(68,68,194,0.5)] p-10 rounded-md [&>*]:!text-[#000]">
				<div className="inline-block">
					<div className="bg-white flex w-48 h-48 rounded-full justify-center overflow-hidden items-center">
						<img src={EthereumLogo} alt="Logo Ethereum" width="100" className="object-cover" />
					</div>
				</div>
				<h1>Ethereum</h1>
				<h2>Una investigación sobre la tecnología blockchain</h2>
			</div>
		</section>
	)
}
