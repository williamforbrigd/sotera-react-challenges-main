
export default async function handler(req, res) {
	const response = await fetch("https://randomuser.me/api/");
    const result = await response.json();
    const data = await result.results;

	const requestMethod = req.method;

	switch (requestMethod) {
		case 'GET':
			res.status(200).json(data[0]);
		default:
			res.status(200).json({message: 'No functionality for method'})

	}
}