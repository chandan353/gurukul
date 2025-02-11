import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Preview,
	Section,
	Text,
} from "@react-email/components";

interface ContactEmailProps {
	name: string;
	email: string;
	phone: string;
	message: string;
}

export function ContactEmail({
	name,
	email,
	phone,
	message,
}: ContactEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>New contact form submission from {name}</Preview>
			<Body style={main}>
				<Container style={container}>
					<Heading style={h1}>New Contact Form Submission</Heading>
					<Section style={section}>
						<Text style={text}>
							<strong>Name:</strong> {name}
						</Text>
						<Text style={text}>
							<strong>Email:</strong> {email}
						</Text>
						<Text style={text}>
							<strong>Phone:</strong> {phone}
						</Text>
						<Hr style={hr} />
						<Text style={text}>
							<strong>Message:</strong>
						</Text>
						<Text style={messageText}>{message}</Text>
					</Section>
				</Container>
			</Body>
		</Html>
	);
}

const main = {
	backgroundColor: "#f6f9fc",
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	padding: "20px 0 48px",
	marginBottom: "64px",
};

const section = {
	padding: "0 48px",
};

const h1 = {
	color: "#333",
	fontSize: "24px",
	fontWeight: "bold",
	margin: "40px 0",
	padding: "0",
	textAlign: "center" as const,
};

const text = {
	color: "#333",
	fontSize: "16px",
	margin: "24px 0",
};

const messageText = {
	color: "#333",
	fontSize: "16px",
	margin: "24px 0",
	whiteSpace: "pre-wrap" as const,
};

const hr = {
	borderColor: "#e6ebf1",
	margin: "20px 0",
};
