import IconDiscord from "../icons/IconDiscord"
import IconWhatsapp from "../icons/IconWhatsapp"
import IconYoutube from "../icons/IconYoutube"
import {COMITES} from "@/data/comites";


const CommitteCard = (props) => {
	return (
		<div
			className="bg-white relative md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-sm p-3 max-w-xs md:max-w-3xl mx-auto border border-sky-300">


			<div className="w-full bg-white">
				{COMITES.slice(0,6).map(({name, description, image}) => (
					<div key={crypto.randomUUID()}>
						<article className="flex md:flex-row flex-col bg-white place-items-center pb-16 md:pl-1">
							<img src={image} alt="committee image" className="rounded-xl pb-5"/>
							<div className="w-full flex flex-col pl-10">
								<h3 className="font-black text-gray-800 md:text-3xl text-xl">{name}</h3>
								<p className="md:text-lg text-gray-500 text-base">
									{description}</p>
								{/* <p className="text-xl font-black text-gray-800">
					read more...
				</p> */}
								<hr className=" border-t border-gray-300"></hr>
								<div className="flex justify-between items-center">
									<div className="flex item-center space-x-2">

										<ButtonLink url="#">
											<IconDiscord width="2rem"/>
										</ButtonLink>
										<ButtonLink url="#">
											<IconWhatsapp width="2rem"/>
										</ButtonLink>
										<ButtonLink url="#">
											<IconYoutube width="2rem"/>
										</ButtonLink>
									</div>
									<button
										className="btn flex items-center justify-center bg-gray-200 px-3 py-1 rounded-full text-gray-800 md:block">Button
									</button>
								</div>
							</div>

						</article>


					</div>
				))}

			</div>
		</div>

	)
}

const ButtonLink = ({url, children}) => {
	return (
		<a className="rounded-full hover:scale-110 transition" href={url}>
			{children}
		</a>
	)
}

export default CommitteCard