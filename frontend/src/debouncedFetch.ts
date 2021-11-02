// Map of controllers.
// Key: fetch url pathname, Value: AbortController
const controllers: any = {};

/**
 * Debounced fetch request. A fetch request that automatically cancels the previous fetch request to the same url.
 * @param input Fetch input
 * @param init Fetch init
 * @returns Fetch response
 */
export async function debouncedFetch(
	input: URL,
	init?: RequestInit
): Promise<Response> {
	controllers[input.pathname]?.abort();
	controllers[input.pathname] = new AbortController();

	init = Object.assign({}, init, {
		signal: controllers[input.pathname].signal,
	});

	return await fetch(input.toString(), init);
}
