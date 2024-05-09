import IconDiscord from "../icons/IconDiscord"
import IconWhatsapp from "../icons/IconWhatsapp"
import IconYoutube from "../icons/IconYoutube"
import {COMITES} from "@/data/comites";


const CommitteCard = (props) => {
	return (
		<div
			className="relative md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-sm p-3 max-w-xs md:max-w-3xl mx-auto border border-sky-300">


			<div className="w-full">
				{COMITES.slice(0,6).map(({name, description, image}) => (
					<div key={crypto.randomUUID()}>
						<article className="flex md:flex-row flex-col place-items-center pb-16 md:pl-1">
							<img src={image} alt="committee image" className="rounded-xl pb-5"/>
							<div className="w-full flex flex-col pl-10">
								<h3 className="font-black  md:text-3xl text-xl">{name}</h3>
								<p className="md:text-lg text-gray-500 text-base">
									{description}</p>
								{/* <p className="text-xl font-black text-gray-800">
					read more...
				</p> */}
								<hr className=" border-t border-gray-300"></hr>
								<div className="flex justify-between items-center pt-5">
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