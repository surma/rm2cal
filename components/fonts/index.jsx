import { useMemo } from "preact/hooks";

const weightMap = {
	thin: 100,
	extralight: 100,
	light: 300,
	regular: 400,
	medium: 500,
	semibold: 600,
	bold: 700,
	extrabold: 800,
	black: 900,
};

function parseFontPath(path) {
	const [name, params] = path.split("/").at(-1).split("-");
	const weight = Object.entries(weightMap).find(([name, _weight]) =>
		params.toLowerCase().includes(name),
	)?.[1];
	const italic = params.toLowerCase().includes("italic");
	return { path, name, weight, italic };
}

function FontFace({ font }) {
	return (
		<style>{`
		@font-face {
			font-family: '${font.name}';
			${font.italic ? "font-style: italic;" : ""}
			font-weight: ${font.weight};
			font-display: swap;
			src: url(${font.path});
		}
	`}</style>
	);
}

export default function Fonts() {
	const fontpaths = useMemo(() => Object.keys(import.meta.glob("/**/*.ttf")));
	const fonts = useMemo(
		() => fontpaths.map((font) => parseFontPath(font)),
		[fontpaths],
	);
	return fonts.map((font) => <FontFace font={font} />);
}
