import { Typography, Stack, Button } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import MailIcon from "@mui/icons-material/Mail";

export default function InfoStrip() {
	return (
		<div className="flex flex-wrap py-20 justify-center text-black">
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
							(435)835-6500
						</a>
						<Button
							href="https://www.charleesonline.com/"
							target="_blank"
							rel="noreferrer"
							className="link link-hover"
						>
							Info and hours
						</Button>
					</Stack>
				</Stack>
			</div>
		</div>
	);
}
