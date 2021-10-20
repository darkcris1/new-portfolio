import preprocess from 'svelte-preprocess';
import path from "path";




/** @type {import('@sveltejs/kit').Config["kit"]["vite"]} */
const viteConfig = {
	resolve: {
		alias: { // Alias Path
			'$common': path.resolve('./src/common'),
			'$src': path.resolve('./src')
		}
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
        postcss: true
    })],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: viteConfig
	},
};

export default config;
