import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { Divider, Typography, Stack } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import MailIcon from "@mui/icons-material/Mail";

export default function InfoStrip(props) {
	const infoCards = props.infoCards.data.infoCardsCollection.items;

	return (
		<div className="flex flex-wrap py-20 justify-center text-black">
			{/* {infoCards.map((info) => (
				<>
					<div className="card w-96 mx-4 my-4 bg-gradient-to-t from-base-100 to-white shadow-xl">
						<div className="card-body items-center text-center p-4 sm:p-6">
							<div className="glass rounded-lg p-1">
								{info.address && <MapIcon />}
								{info.email && <MailIcon />}
								{info.hours && <AccessTimeFilledIcon />}
							</div>
							<h2 className="card-title">{info.title}</h2>
							<div className="w-1/2 border-b-2 border-white mb-2 flex justify-center"></div>
							{info.hours && (
								<>
									{info.hours.map((hours) => (
										<>
											<ul>
												<li>{hours}</li>
											</ul>
										</>
									))}
								</>
							)}
							{info.address && (
								<a
									href={info.address}
									className="link link-hover"
								>
									{info.address}
								</a>
							)}
							{info.email && (
								<a
									href={info.email}
									className="link link-hover"
								>
									{info.email}
								</a>
							)}
							{info.phone && (
								<a
									href={info.phone}
									className="link link-hover"
								>
									{info.phone}
								</a>
							)}
							{info.address && (
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.2256418945276!2d-111.58867818438938!3d39.35112652767549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874c71aeef6cb525%3A0x2fe449c62fdcffb8!2sCharlee&#39;s%20comfort%20kitchen!5e0!3m2!1sen!2sus!4v1669400653775!5m2!1sen!2sus"
									width="275"
									height="150"
									style={{
										border: "0",
										borderRadius: "20px",
										marginTop: "5px",
									}}
									allowfullscreen=""
									loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"
								></iframe>
							)}
						</div>
					</div>
				</>
			))} */}
			<div className="card w-96 mx-4 my-4 bg-gradient-to-t from-base-100 to-white shadow-xl">
				<Stack className="card-body items-center text-center p-4 sm:p-6">
					<Stack
						gap={1}
						justifyContent={"center"}
						alignItems={"center"}
					>
						<div className="glass rounded-lg p-1">
							<MapIcon />
						</div>
						<Typography variant="h5">Address</Typography>
						<div className="w-1/2 border-b-2 border-white mb-2 flex justify-center"></div>

						<a
							href={"115 N. Main St. Manti, Ut 84642"}
							className="link link-hover"
						>
							115 N. Main St. Manti, Ut 84642
						</a>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.2256418945276!2d-111.58867818438938!3d39.35112652767549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874c71aeef6cb525%3A0x2fe449c62fdcffb8!2sCharlee&#39;s%20comfort%20kitchen!5e0!3m2!1sen!2sus!4v1669400653775!5m2!1sen!2sus"
							width="275"
							height="150"
							style={{
								border: "0",
								borderRadius: "20px",
								marginTop: "5px",
							}}
							allowfullscreen=""
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
						/>
					</Stack>

					<Stack
						gap={1}
						justifyContent={"center"}
						alignItems={"center"}
						mt={3}
					>
						<div className="glass rounded-lg p-1">
							<MailIcon />
						</div>
						<Typography variant="h5">Contact</Typography>
						<div className="w-1/2 border-b-2 border-white mb-2 flex justify-center"></div>
						<a
							href={"mailto:charleescomfortkitchen@gmail.com"}
							className="link link-hover"
						>
							charleescomfortkitchen@gmail.com
						</a>
						<a href={"tel:4358356500"} className="link link-hover">
							+1 (435)835-6500
						</a>
					</Stack>
				</Stack>
			</div>
			<div className="card w-96 mx-4 my-4 bg-gradient-to-t from-base-100 to-white shadow-xl">
				<div className="card-body items-center text-center p-4 sm:p-6">
					<div className="glass rounded-lg p-1">
						<AccessTimeFilledIcon />
					</div>
					<Typography variant="h5">Dining room hours</Typography>
					<div className="w-1/2 border-b-2 border-white mb-2 flex justify-center"></div>
					<Stack gap={2}>
						<Stack
							gap={0.5}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<Typography variant="h6">
								Tuesday - Friday
							</Typography>
							<Divider color={"white"} width={"15%"} />
							<ul>
								<li>Breakfast: 7am - 11am</li>
								<li>Lunch: 11am - 4pm</li>
								<li>Dinner: 4:30pm - 8pm</li>
							</ul>
						</Stack>
						<Stack
							gap={0.5}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<Typography variant="h6">Saturday</Typography>
							<Divider color={"white"} width={"15%"} />
							<ul>
								<li>Brunch: 10am - 2am</li>
								<li>Lunch: 11am - 4pm</li>
								<li>Dinner: 4:30pm - 8pm</li>
							</ul>
						</Stack>
						<Stack
							gap={0.5}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<Typography variant="h6">
								Sunday - Monday
							</Typography>
							<Divider color={"white"} width={"15%"} />
							Closed
						</Stack>
					</Stack>
					<Typography variant="h5">Market menu hours</Typography>
					<div className="w-1/2 border-b-2 border-white mb-2 flex justify-center"></div>
					<Stack gap={2}>
						<Stack
							gap={0.5}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<Typography variant="h6">
								Tuesday - Saturday
							</Typography>
							<Divider color={"white"} width={"15%"} />
							11am - 9pm
						</Stack>
						<Stack
							gap={0.5}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<Typography variant="h6">
								Sunday - Monday
							</Typography>
							<Divider color={"white"} width={"15%"} />
							Closed
						</Stack>
					</Stack>
				</div>
			</div>
		</div>
	);
}
