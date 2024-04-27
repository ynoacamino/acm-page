import IconFacebook from "../icons/IconFacebook"
import IconLink2 from "../icons/IconLink2"
import IconGitHubFilled from "../icons/IconGitHubFilled"
import IconFacebookFilled from "../icons/IconFacebookFilled"
import IconDiscord from "../icons/IconDiscord"
import IconInstagram from "../icons/IconInstagram"
import IconTwitch from "../icons/IconTwitch"
import IconWhatsapp from "../icons/IconWhatsapp"
import IconYoutube from "../icons/IconYoutube"
import IconInstagramFilled from "../icons/IconInstagramFilled"

const CommitteCard = (props) => {
	return (
		<div
			className="bg-white relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-sm p-3 max-w-xs md:max-w-3xl mx-auto border border-sky-300">
			<div className="w-full md:w-1/3 bg-white grid place-items-center">
				<img src="/images/committees/marketing-illustration.jpg" alt="committee image" className="rounded-xl" />
			</div>

			<div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
				<h3 className="font-black text-gray-800 md:text-3xl text-xl">Marketing Committee</h3>
				<p className="md:text-lg text-gray-500 text-base">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ullam dolore porro adipisci quo officiis recusandae, esse alias necessitatibus corporis ex impedit, exercitationem obcaecati veniam fugiat earum repellendus non consequatur!</p>
				{/* <p className="text-xl font-black text-gray-800">
					read more...
				</p> */}
				<hr className=" border-t border-gray-300"></hr>
				<div className="flex justify-between items-center">
					<div className="flex item-center space-x-2">
						<ButtonLink url="#">
							<IconFacebookFilled width="2rem" />
						</ButtonLink>
						<ButtonLink url="#">
							<IconGitHubFilled width="2rem" />
						</ButtonLink>
						<ButtonLink url="#">
							<IconDiscord width="2rem" />
						</ButtonLink>
						<ButtonLink url="#">
							<IconInstagramFilled width="2rem" />
						</ButtonLink>
						<ButtonLink url="#">
							<IconTwitch width="2rem" />
						</ButtonLink>
						<ButtonLink url="#">
							<IconWhatsapp width="2rem" />
						</ButtonLink>
						<ButtonLink url="#">
							<IconYoutube width="2rem" />
						</ButtonLink>
					</div>
					<button className="btn flex items-center justify-center bg-gray-200 px-3 py-1 rounded-full text-gray-800 md:block">Button</button>
				</div>
			</div>
		</div>

	)
}

const ButtonLink = ({ url, children }) => {
	return (
		<a className="rounded-full hover:scale-110 transition" href={url}>
			{children}
		</a>
	)
}

export default CommitteCard