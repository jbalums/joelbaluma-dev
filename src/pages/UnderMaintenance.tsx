import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Cog, Settings2Icon } from "lucide-react";

const NotFound = () => {
	const location = useLocation();

	useEffect(() => {
		console.error(
			"404 Error: User attempted to access non-existent route:",
			location.pathname,
		);
	}, [location.pathname]);

	return (
		<div className="flex min-h-screen items-center justify-center bg-muted">
			<div className="text-center">
				<Cog className="mx-auto mb-4 h-24 w-24 animate-spin text-muted-foreground" />
				<p className="mb-4 text-xl text-muted-foreground">
					Site under maintenance. Please check back later.
				</p>
			</div>
		</div>
	);
};

export default NotFound;
